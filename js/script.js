/* =========================================================================
   CONTENT POOL  –  All gallery images organized by category
   Carousel picks 3 randomly each day (daily seed).
   Portfolio picks 6 randomly each week (weekly seed).
   ========================================================================= */

const CONTENT_POOL = {
    branding: Array.from({ length: 20 }, (_, i) => ({ type: 'image', src: `https://picsum.photos/seed/brand${i + 1}/800/600`, title: `Diseño ${i + 1}`, subtitle: 'Diseño Gráfico', alt: `Branding ${i + 1}` })),
    renders: Array.from({ length: 20 }, (_, i) => ({ type: 'image', src: `https://picsum.photos/seed/rend${i + 1}/800/600`, title: `Render ${i + 1}`, subtitle: 'Renderizado 3D', alt: `Render ${i + 1}` })),
    videos: Array.from({ length: 20 }, (_, i) => ({ type: 'image', src: `https://picsum.photos/seed/vid${i + 1}/800/600`, title: `Video ${i + 1}`, subtitle: 'Área de Video', alt: `Video ${i + 1}` }))
};

// Deterministic shuffle using a numeric seed (Mulberry32)
function seededShuffle(arr, seed) {
    const a = [...arr];
    let s = seed;
    const rand = () => { s |= 0; s = s + 0x6D2B79F5 | 0; let t = Math.imul(s ^ s >>> 15, 1 | s); t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t; return ((t ^ t >>> 14) >>> 0) / 4294967296; };
    for (let i = a.length - 1; i > 0; i--) { const j = Math.floor(rand() * (i + 1));[a[i], a[j]] = [a[j], a[i]]; }
    return a;
}

// Seed based on current day (YYYYMMDD as integer)
function getDailySeed() { const d = new Date(); return d.getFullYear() * 10000 + (d.getMonth() + 1) * 100 + d.getDate(); }
// Seed based on ISO week number
function getWeeklySeed() { const d = new Date(); const startOfYear = new Date(d.getFullYear(), 0, 1); return Math.ceil(((d - startOfYear) / 86400000 + startOfYear.getDay() + 1) / 7) + d.getFullYear() * 100; }

// Combined flat pool
const ALL_POOL = () => [...CONTENT_POOL.branding, ...CONTENT_POOL.renders, ...CONTENT_POOL.videos];

/* =========================================================================
   MAIN INITIALIZATION  –  waits for DOM + libraries
   ========================================================================= */
function bootstrap() {
    lucide.createIcons();
    renderPortfolio();
    initCursor();
    initSearchLogic();
    initMobileMenu();
    init3DCarousel();
    initWaterRipple();
    initPenAnimation();
    initFormHandler();
}

// If GSAP / THREE are already loaded, run immediately after DOM is ready.
// If they haven't loaded yet, wait up to 3 s then run without them.
document.addEventListener('DOMContentLoaded', () => {
    const gsapReady = typeof gsap !== 'undefined';
    const threeReady = typeof THREE !== 'undefined';

    if (gsapReady && threeReady) {
        bootstrap();
    } else {
        let waited = 0;
        const id = setInterval(() => {
            waited += 200;
            if ((typeof gsap !== 'undefined' && typeof THREE !== 'undefined') || waited >= 3000) {
                clearInterval(id);
                bootstrap();
            }
        }, 200);
    }
});

/* =========================================================================
   CURSOR
   ========================================================================= */
function initCursor() {
    const dot = document.getElementById('cursor-dot');
    const ring = document.getElementById('cursor-outline');
    const glow = document.getElementById('cursor-glow');
    if (!dot || !ring) return;

    // Hide on touch devices
    if ('ontouchstart' in window || navigator.maxTouchPoints > 0) {
        [dot, ring, glow].forEach(el => el && (el.style.display = 'none'));
        return;
    }

    document.addEventListener('mousemove', e => {
        const x = e.clientX + 'px';
        const y = e.clientY + 'px';
        dot.style.left = x;
        dot.style.top = y;
        ring.style.left = x;
        ring.style.top = y;
        // Glow moves slowly — CSS transition handles the watery delay
        if (glow) { glow.style.left = x; glow.style.top = y; }
    });

    document.querySelectorAll('a, button, .service-card, .bento-item, .carousel-item, [data-gallery]').forEach(el => {
        el.addEventListener('mouseenter', () => document.body.classList.add('cursor-hover'));
        el.addEventListener('mouseleave', () => document.body.classList.remove('cursor-hover'));
    });
}

/* =========================================================================
   WATER RIPPLE BACKGROUND  (WebGL – graceful fallback)
   ========================================================================= */
function initWaterRipple() {
    const canvas = document.getElementById('liquid-canvas');
    if (!canvas || typeof THREE === 'undefined') return;

    try {
        const scene = new THREE.Scene();
        const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
        const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        renderer.setSize(window.innerWidth, window.innerHeight);

        const loader = new THREE.TextureLoader();
        const bgUrl = document.getElementById('hero-img-src')?.dataset.src
            || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=60&w=1200';
        const texture = loader.load(bgUrl);

        const mat = new THREE.ShaderMaterial({
            uniforms: {
                u_texture: { value: texture },
                u_mouse: { value: new THREE.Vector2(0.5, 0.5) },
                u_time: { value: 0 }
            },
            vertexShader: `varying vec2 vUv; void main(){ vUv = uv; gl_Position = vec4(position,1.0); }`,
            fragmentShader: `
                varying vec2 vUv;
                uniform sampler2D u_texture;
                uniform vec2 u_mouse;
                uniform float u_time;
                void main(){
                    vec2 uv = vUv;
                    float d = distance(uv, u_mouse);
                    float ripple = sin(d * 55.0 - u_time * 4.0) * 0.005;
                    float s = smoothstep(0.5, 0.0, d) * ripple;
                    vec2 disp = normalize(uv - u_mouse) * s;
                    vec4 col = texture2D(u_texture, uv + disp);
                    col.rgb *= 0.72;
                    gl_FragColor = col;
                }
            `,
            transparent: true
        });

        scene.add(new THREE.Mesh(new THREE.PlaneGeometry(2, 2), mat));

        // Throttled mouse update (no heavy per-frame GSAP calls on many elements)
        let mouseTarget = { x: 0.5, y: 0.5 };
        document.addEventListener('mousemove', e => {
            mouseTarget.x = e.clientX / window.innerWidth;
            mouseTarget.y = 1 - e.clientY / window.innerHeight;
        });

        const lerpVal = (a, b, t) => a + (b - a) * t;
        let cur = { x: 0.5, y: 0.5 };

        (function loop(time) {
            requestAnimationFrame(loop);
            cur.x = lerpVal(cur.x, mouseTarget.x, 0.05);
            cur.y = lerpVal(cur.y, mouseTarget.y, 0.05);
            mat.uniforms.u_mouse.value.set(cur.x, cur.y);
            mat.uniforms.u_time.value = time * 0.001;
            renderer.render(scene, camera);
        })(0);

        window.addEventListener('resize', () => renderer.setSize(window.innerWidth, window.innerHeight));
    } catch (err) {
        console.warn('WebGL ripple failed:', err);
    }
}

/* =========================================================================
   ILLUSTRATOR PEN ANIMATION
   ========================================================================= */
function initPenAnimation() {
    const svg = document.getElementById('illustrator-svg');
    const pen = document.getElementById('pen-tool');
    const title = document.getElementById('hero-title');
    if (!svg || !title) { if (title) title.style.visibility = 'visible'; return; }

    if (typeof gsap === 'undefined') {
        title.style.visibility = 'visible';
        return;
    }

    // Each letter mapped to SVG paths that look like real Illustrator pen strokes
    // ViewBox: 0 0 500 100  — letters spaced from x=10
    const letterStrokes = [
        // C
        "M 42 28 C 42 16 22 14 18 28 C 14 40 14 60 18 72 C 22 84 42 82 42 72",
        // R
        "M 52 78 L 52 22 M 52 22 Q 70 22 70 38 Q 70 54 52 54 M 57 54 L 72 78",
        // E
        "M 80 78 L 80 22 L 98 22 M 80 50 L 95 50 M 80 78 L 98 78",
        // A
        "M 108 78 L 120 22 L 132 78 M 112 60 L 128 60",
        // T
        "M 140 22 L 160 22 M 150 22 L 150 78",
        // I
        "M 170 22 L 170 78",
        // V
        "M 178 22 L 188 78 L 198 22",
        // O  — made larger to match letter height of surrounding glyphs
        "M 207 50 C 207 18 245 18 245 50 C 245 82 207 82 207 50 Z",
        // === SPACE between CREATIVO and DIGITAL (invisible stroke for pen gap) ===
        "M 252 50 L 252 50",

        // D
        "M 256 22 L 256 78 Q 284 78 284 50 Q 284 22 256 22",
        // I
        "M 293 22 L 293 78",
        // G
        "M 330 28 C 320 16 302 20 302 50 C 302 80 320 84 330 72 L 330 52 L 315 52",
        // I
        "M 340 22 L 340 78",
        // T
        "M 348 22 L 368 22 M 358 22 L 358 78",
        // A
        "M 376 78 L 388 22 L 400 78 M 380 60 L 396 60",
        // L
        "M 408 22 L 408 78 L 425 78",
    ];

    svg.setAttribute('viewBox', '0 0 440 100');

    const tl = gsap.timeline({
        delay: 0.4,
        onComplete: () => {
            // Flash highlight, then fade SVG and reveal logo
            gsap.to(svg, {
                filter: 'brightness(2)', duration: 0.15, yoyo: true, repeat: 1, onComplete: () => {
                    gsap.to([svg, pen], { opacity: 0, duration: 0.6 });
                    gsap.delayedCall(0.4, () => {
                        title.style.visibility = 'visible';
                        gsap.from(title, { y: 20, opacity: 0, duration: 1.2, ease: 'power3.out' });
                    });
                }
            });
        }
    });

    if (pen) { pen.style.opacity = 1; pen.style.position = 'absolute'; }

    letterStrokes.forEach((d) => {
        const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute('d', d);
        path.classList.add('logo-path');
        svg.appendChild(path);

        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });

        tl.to(path, {
            strokeDashoffset: 0,
            duration: 0.35,
            ease: 'power1.inOut',
            onStart() {
                // Add small anchor dot at start point
                const pt0 = path.getPointAtLength(0);
                addAnchorDot(svg, pt0.x, pt0.y);
            },
            onUpdate() {
                if (!pen) return;
                const drawn = len * (1 - gsap.getProperty(path, 'strokeDashoffset') / len);
                const pt = path.getPointAtLength(drawn);
                // Convert SVG coords to container px
                const rect = svg.getBoundingClientRect();
                const sx = rect.width / 440;
                const sy = rect.height / 100;
                pen.style.left = (pt.x * sx) + 'px';
                pen.style.top = (pt.y * sy) + 'px';
            },
            onComplete() {
                // Anchor dot at end
                const pt1 = path.getPointAtLength(len);
                addAnchorDot(svg, pt1.x, pt1.y);
            }
        }, '>-0.05');
    });

    function addAnchorDot(svg, cx, cy) {
        const c = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
        const size = 3;
        c.setAttribute('x', cx - size / 2);
        c.setAttribute('y', cy - size / 2);
        c.setAttribute('width', size);
        c.setAttribute('height', size);
        c.style.fill = '#fff';
        c.style.stroke = 'var(--accent-cyan)';
        c.style.strokeWidth = '0.8';
        c.style.opacity = '0';
        svg.appendChild(c);
        gsap.to(c, { opacity: 1, duration: 0.15 });
    }
}

/* =========================================================================
   3D CAROUSEL  –  picks 3 random images daily from all pools
   ========================================================================= */
function init3DCarousel() {
    const container = document.getElementById('main-carousel');
    if (!container) return;

    // Build daily random set of 3 images from full pool
    const dailyPool = seededShuffle(ALL_POOL(), getDailySeed());
    const picks = dailyPool.slice(0, 5); // 5 items so cycle feels varied

    // Inject images into existing carousel items (or create more)
    const items = container.querySelectorAll('.carousel-item');
    items.forEach((el, i) => {
        const item = picks[i % picks.length];
        el.innerHTML = `<img src="${item.src}" alt="${item.alt}" loading="lazy">`;
    });

    let idx = 1;
    items.forEach((el, i) => {
        el.className = 'carousel-item';
        if (i === 0) el.classList.add('item-left');
        else if (i === 1) el.classList.add('item-center');
        else if (i === 2) el.classList.add('item-right');
    });

    setInterval(() => {
        items.forEach(el => el.className = 'carousel-item');
        idx = (idx + 1) % items.length;
        const prev = (idx + items.length - 1) % items.length;
        const next = (idx + 1) % items.length;
        items[prev].classList.add('item-left');
        items[idx].classList.add('item-center');
        items[next].classList.add('item-right');
    }, 4500);
}

/* =========================================================================
   PORTFOLIO GRID  –  weekly-random selection from full content pool
   ========================================================================= */
function renderPortfolio() {
    const grid = document.getElementById('portfolio-grid');
    if (!grid) return;

    // Combine user's custom portfolioData (if defined) with pool content
    const customItems = (typeof portfolioData !== 'undefined') ? portfolioData : [];
    const poolItems = seededShuffle(ALL_POOL(), getWeeklySeed()).slice(0, Math.max(0, 9 - customItems.length));
    const allItems = [...customItems, ...poolItems].slice(0, 9); // max 9 bento items

    allItems.forEach(item => {
        const div = document.createElement('div');
        div.className = 'bento-item';

        const media = item.type === 'video'
            ? `<video src="${item.src}" autoplay loop muted playsinline></video>`
            : `<img src="${item.src}" alt="${item.alt || ''}" loading="lazy">`;

        div.innerHTML = `
            ${media}
            <div class="bento-overlay">
                <p style="font-size:0.7rem;color:var(--accent-cyan);text-transform:uppercase;margin-bottom:4px;">${item.subtitle}</p>
                <h3 style="font-size:1.3rem;color:#fff;text-transform:uppercase;">${item.title}</h3>
            </div>`;

        div.onclick = () => window.openLightbox(item);
        grid.appendChild(div);
    });
}

/* =========================================================================
   GALLERY OVERLAY  –  window-level so onclick="openGallery(...)" works
   ========================================================================= */
window.openGallery = function (type) {
    const overlay = document.getElementById('gallery-overlay');
    const titleEl = document.getElementById('gallery-title');
    const grid = document.getElementById('gallery-grid');
    if (!overlay || !grid) { console.error('Gallery elements not found'); return; }

    const labels = {
        branding: 'DISEÑO GRÁFICO & BRANDING',
        renders: 'RENDERIZADO 3D',
        videos: 'PRODUCCIÓN AUDIOVISUAL'
    };
    titleEl.textContent = labels[type] || 'GALERÍA';
    grid.innerHTML = '';

    for (let i = 0; i < 20; i++) {
        const wrap = document.createElement('div');
        wrap.className = 'sub-gallery-item';

        if (type === 'videos') {
            // Use pool image (video thumbnails) — videos also stored as images in pool
            const item = CONTENT_POOL.videos[i];
            const v = document.createElement('video');
            v.src = 'https://www.w3schools.com/html/mov_bbb.mp4';
            v.loop = true; v.muted = true; v.playsInline = true;
            v.addEventListener('mouseenter', () => v.play());
            v.addEventListener('mouseleave', () => v.pause());
            wrap.appendChild(v);
            wrap.onclick = () => window.openLightbox({ src: v.src, type: 'video' });
        } else {
            // Pull EXACTLY the same images used in carousel/portfolio
            const pool = type === 'branding' ? CONTENT_POOL.branding : CONTENT_POOL.renders;
            const item = pool[i];
            const img = document.createElement('img');
            img.src = item.src; img.alt = item.alt; img.loading = 'lazy';
            wrap.appendChild(img);
            wrap.onclick = () => window.openLightbox({ src: item.src, type: 'image' });
        }

        grid.appendChild(wrap);
    }

    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    lucide.createIcons();
};

window.closeGallery = function () {
    document.getElementById('gallery-overlay').classList.remove('active');
    document.body.style.overflow = '';
};

/* =========================================================================
   LIGHTBOX
   ========================================================================= */
window.openLightbox = function (item) {
    const lb = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
    if (!lb || !content) return;

    if (item.type === 'video') {
        // Custom video player
        content.innerHTML = `
        <div class="custom-player" id="custom-player">
            <video id="player-video" src="${item.src}" preload="metadata"></video>
            <div class="player-controls">
                <div class="player-progress-wrap">
                    <div class="player-progress-bg">
                        <div class="player-progress-fill" id="player-progress"></div>
                    </div>
                </div>
                <div class="player-btns">
                    <button class="player-btn" id="player-toggle"><svg viewBox="0 0 24 24" fill="currentColor" width="20" height="20"><polygon points="5 3 19 12 5 21 5 3"/></svg></button>
                    <div class="player-time" id="player-time">0:00 / 0:00</div>
                    <div style="flex:1"></div>
                    <input type="range" class="player-volume" id="player-vol" min="0" max="1" step="0.05" value="1">
                    <button class="player-btn" id="player-fs"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="20" height="20"><polyline points="15 3 21 3 21 9"/><polyline points="9 21 3 21 3 15"/><line x1="21" y1="3" x2="14" y2="10"/><line x1="3" y1="21" x2="10" y2="14"/></svg></button>
                </div>
            </div>
        </div>`;
        // Wire up custom player
        initCustomPlayer();
    } else {
        content.innerHTML = `<img src="${item.src}" style="max-width:100%;max-height:88vh;border-radius:16px;object-fit:contain;display:block;">`;
    }
    lb.classList.add('active');
};

function initCustomPlayer() {
    const video = document.getElementById('player-video');
    const toggle = document.getElementById('player-toggle');
    const playBtn = document.getElementById('player-play-btn');
    const progress = document.getElementById('player-progress');
    const timeEl = document.getElementById('player-time');
    const vol = document.getElementById('player-vol');
    const fs = document.getElementById('player-fs');
    const overlay = document.getElementById('player-overlay');
    if (!video) return;

    const fmt = s => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
    const svgPlay = `<polygon points="5 3 19 12 5 21 5 3" fill="currentColor"/>`;
    const svgPause = `<rect x="6" y="4" width="4" height="16" fill="currentColor"/><rect x="14" y="4" width="4" height="16" fill="currentColor"/>`;

    const doToggle = () => {
        if (video.paused) { video.play(); toggle.querySelector('svg').innerHTML = svgPause; }
        else { video.pause(); toggle.querySelector('svg').innerHTML = svgPlay; }
    };

    toggle.onclick = doToggle;
    vol.oninput = () => video.volume = vol.value;
    if (fs) fs.onclick = () => {
        const p = document.getElementById('custom-player');
        if (!document.fullscreenElement) p.requestFullscreen();
        else document.exitFullscreen();
    };

    video.addEventListener('timeupdate', () => {
        if (!video.duration) return;
        progress.style.width = (video.currentTime / video.duration * 100) + '%';
        timeEl.textContent = `${fmt(video.currentTime)} / ${fmt(video.duration)}`;
    });

    document.getElementById('player-progress-wrap')?.addEventListener('click', e => {
        const r = e.currentTarget.getBoundingClientRect();
        video.currentTime = ((e.clientX - r.left) / r.width) * video.duration;
    });

    video.play().catch(() => { }); // autoplay
}

window.closeLightbox = function () {
    const lb = document.getElementById('lightbox');
    const content = document.getElementById('lightbox-content');
    if (!lb) return;
    lb.classList.remove('active');
    if (content) content.innerHTML = '';
};

// Close lightbox on backdrop click
document.addEventListener('click', e => {
    const lb = document.getElementById('lightbox');
    if (lb && e.target === lb) window.closeLightbox();
});

/* =========================================================================
   SEARCH
   ========================================================================= */
window.openSearch = function () {
    const modal = document.getElementById('search-modal');
    if (!modal) return;
    modal.classList.add('active');
    setTimeout(() => document.getElementById('search-input')?.focus(), 50);
};

window.closeSearch = function () {
    document.getElementById('search-modal')?.classList.remove('active');
};

function initSearchLogic() {
    const input = document.getElementById('search-input');
    const results = document.getElementById('search-results');
    if (!input || !results) return;

    input.addEventListener('input', () => {
        const q = input.value.toLowerCase().trim();
        results.innerHTML = '';
        if (!q || typeof portfolioData === 'undefined') return;

        const matches = portfolioData.filter(i =>
            i.title.toLowerCase().includes(q) || i.subtitle.toLowerCase().includes(q)
        );

        if (matches.length === 0) {
            results.innerHTML = `<p style="color:var(--text-secondary);padding:1rem;">Sin resultados para "${input.value}".</p>`;
            return;
        }

        matches.forEach(m => {
            const row = document.createElement('div');
            row.style.cssText = 'display:flex;align-items:center;gap:1rem;padding:0.75rem;border-radius:10px;cursor:pointer;transition:background 0.2s;';

            const thumb = m.type === 'video'
                ? `<video src="${m.src}" style="width:60px;height:45px;border-radius:6px;object-fit:cover;"></video>`
                : `<img src="${m.src}" style="width:60px;height:45px;border-radius:6px;object-fit:cover;" loading="lazy">`;

            row.innerHTML = `
                ${thumb}
                <div>
                    <div style="font-weight:600;color:#fff;">${m.title}</div>
                    <div style="font-size:0.75rem;color:var(--accent-cyan);">${m.subtitle}</div>
                </div>`;

            row.addEventListener('mouseenter', () => row.style.background = 'rgba(0,229,255,0.07)');
            row.addEventListener('mouseleave', () => row.style.background = '');
            row.onclick = () => { window.closeSearch(); window.openLightbox(m); };
            results.appendChild(row);
        });
    });
}

/* =========================================================================
   MOBILE MENU
   ========================================================================= */
function initMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const links = document.getElementById('nav-links');
    if (!btn || !links) return;

    btn.addEventListener('click', () => links.classList.toggle('active'));
    links.querySelectorAll('a').forEach(a =>
        a.addEventListener('click', () => links.classList.remove('active'))
    );
}

/* =========================================================================
   CONTACT FORM HANDLER (AJAX)
   ========================================================================= */
function initFormHandler() {
    const form = document.getElementById('contact-form');
    const feedback = document.getElementById('form-feedback');
    const submitBtn = document.getElementById('form-submit-btn');
    if (!form || !feedback || !submitBtn) return;

    form.onsubmit = async (e) => {
        e.preventDefault();

        // Basic validation
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        submitBtn.disabled = true;
        submitBtn.textContent = 'Enviando...';

        feedback.style.display = 'block';
        feedback.textContent = 'Procesando mensaje...';
        feedback.style.background = 'rgba(0,229,255,0.1)';
        feedback.style.color = 'var(--accent-cyan)';

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {
            const response = await fetch('https://formsubmit.co/ajax/daibelelcreativo1@gmail.com', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
                body: JSON.stringify(data)
            });

            if (response.ok) {
                feedback.textContent = '¡Mensaje enviado con éxito! Nos contactaremos pronto.';
                feedback.style.background = 'rgba(0,255,100,0.1)';
                feedback.style.color = '#00ff64';
                form.reset();
            } else {
                throw new Error();
            }
        } catch (err) {
            feedback.textContent = 'Error al enviar. Por favor, intenta de nuevo o usa WhatsApp.';
            feedback.style.background = 'rgba(255,50,50,0.1)';
            feedback.style.color = '#ff3232';
        } finally {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Enviar Mensaje';
            setTimeout(() => { feedback.style.display = 'none'; }, 6000);
        }
    };
}

/* =========================================================================
   SCROLL-restored: ensure body is scrollable after any overlay closes
   ========================================================================= */
document.addEventListener('keydown', e => {
    if (e.key === 'Escape') {
        window.closeLightbox?.();
        window.closeSearch?.();
        window.closeGallery?.();
    }
});