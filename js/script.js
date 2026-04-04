// Inicializar iconos
        lucide.createIcons();

        // 0. Renderizar Portafolio Dinámico
        const portfolioGrid = document.getElementById('portfolio-grid');
        if (portfolioGrid && typeof portfolioData !== 'undefined') {
            portfolioData.forEach(item => {
                const bentoItem = document.createElement('div');
                bentoItem.className = 'bento-item interactable';
                
                let mediaElement = '';
                if (item.type === 'video') {
                    mediaElement = `
                        <video src="${item.src}" autoplay loop muted playsinline style="width: 100%; height: 100%; object-fit: cover; transition: transform 0.6s ease;"></video>
                        <div class="grid-play-btn"><i data-lucide="play" fill="white"></i></div>
                    `;
                } else {
                    mediaElement = `<img src="${item.src}" alt="${item.alt}" loading="lazy">`;
                }

                bentoItem.innerHTML = `
                    ${mediaElement}
                    <div class="bento-overlay">
                        <h3>${item.title}</h3>
                        <p>${item.subtitle}</p>
                    </div>
                `;

                bentoItem.addEventListener('touchstart', () => {
                    bentoItem.classList.add('touch-active');
                }, {passive: true});
                bentoItem.addEventListener('touchend', () => {
                    setTimeout(() => bentoItem.classList.remove('touch-active'), 1500); 
                }, {passive: true});

                bentoItem.addEventListener('click', () => {
                    if (window.openLightbox) {
                        window.openLightbox(item);
                    }
                });

                portfolioGrid.appendChild(bentoItem);
            });
            lucide.createIcons();
        }

        // 0.5 Renderizar Lightbox y Reproductor Custom
        const lightbox = document.getElementById('lightbox');
        const lightboxContent = document.getElementById('lightbox-content');
        
        window.openLightbox = (item) => {
            let mediaHtml = '';
            if (item.type === 'video') {
                mediaHtml = `
                    <div style="position:relative; width: 100%; height: 100%; display:flex; justify-content:center; align-items:center;">
                        <video id="lb-video" src="${item.src}" autoplay playsinline style="max-width:100%; max-height:95vh; box-shadow: 0 10px 40px rgba(0,0,0,0.5); border-radius: 8px;"></video>
                        <div class="custom-video-ui">
                            <button id="lb-play" class="video-btn"><i data-lucide="pause"></i></button>
                            <div class="video-progress-bar" id="lb-progress-container"><div class="video-progress-filled" id="lb-progress"></div></div>
                            <button id="lb-mute" class="video-btn"><i data-lucide="volume-2"></i></button>
                        </div>
                    </div>
                `;
            } else {
                mediaHtml = `<img src="${item.src}" alt="${item.alt}">`;
            }
            lightboxContent.innerHTML = mediaHtml;
            lightbox.classList.add('active');
            
            lucide.createIcons();

            if (item.type === 'video') {
                const v = document.getElementById('lb-video');
                const pBtn = document.getElementById('lb-play');
                const mBtn = document.getElementById('lb-mute');
                const pBar = document.getElementById('lb-progress');
                const pCont = document.getElementById('lb-progress-container');
                let isPlaying = true;
                
                pBtn.onclick = (e) => {
                    e.stopPropagation();
                    if(isPlaying) { v.pause(); pBtn.innerHTML = '<i data-lucide="play"></i>'; }
                    else { v.play(); pBtn.innerHTML = '<i data-lucide="pause"></i>'; }
                    isPlaying = !isPlaying;
                    lucide.createIcons();
                };
                
                mBtn.onclick = (e) => {
                    e.stopPropagation();
                    v.muted = !v.muted;
                    mBtn.innerHTML = v.muted ? '<i data-lucide="volume-x"></i>' : '<i data-lucide="volume-2"></i>';
                    lucide.createIcons();
                };
                
                v.ontimeupdate = () => {
                    if (v.duration) {
                        const pct = (v.currentTime / v.duration) * 100;
                        pBar.style.width = pct + '%';
                    }
                };
                
                pCont.onclick = (e) => {
                    e.stopPropagation();
                    const rect = pCont.getBoundingClientRect();
                    const pos = (e.clientX - rect.left) / rect.width;
                    v.currentTime = pos * v.duration;
                };
            }
        };

        window.closeLightbox = () => {
            lightbox.classList.remove('active');
            lightboxContent.innerHTML = '';
        };

        // Cerrar al dar click fuera del contenido (en el fondo oscuro)
        if (lightbox) {
            lightbox.addEventListener('click', (e) => {
                if(e.target === lightbox) {
                    window.closeLightbox();
                }
            });
        }

        // 0.6 Renderizar Search Modal
        const searchModal = document.getElementById('search-modal');
        const searchInput = document.getElementById('search-input');
        const searchResults = document.getElementById('search-results');
        
        window.openSearch = () => {
            searchModal.classList.add('active');
            searchInput.value = '';
            searchResults.innerHTML = '';
            setTimeout(() => searchInput.focus(), 100);
        };

        window.closeSearch = () => {
            searchModal.classList.remove('active');
        };

        if (searchModal) {
            searchModal.addEventListener('click', (e) => {
                if(e.target === searchModal) {
                    window.closeSearch();
                }
            });
        }

        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                searchResults.innerHTML = '';
                if(query.trim() === '') return;

                const matches = portfolioData.filter(item => 
                    item.title.toLowerCase().includes(query) || 
                    item.subtitle.toLowerCase().includes(query)
                );

                if(matches.length === 0) {
                    searchResults.innerHTML = '<p style="color:var(--text-secondary); text-align:center; padding:1rem;">No se encontraron resultados.</p>';
                    return;
                }

                matches.forEach(item => {
                    const resDiv = document.createElement('div');
                    resDiv.style = "display:flex; align-items:center; gap: 1rem; padding: 0.5rem; border-radius: 8px; cursor: pointer; transition: background 0.2s;";
                    resDiv.className = "interactable";
                    resDiv.onmouseover = () => resDiv.style.background = 'rgba(0, 229, 255, 0.1)';
                    resDiv.onmouseout = () => resDiv.style.background = 'transparent';
                    
                    const thumb = item.type === 'video' 
                        ? `<video src="${item.src}" style="width:60px; height:60px; object-fit:cover; border-radius:4px;"></video>`
                        : `<img src="${item.src}" style="width:60px; height:60px; object-fit:cover; border-radius:4px;">`;
                    
                    resDiv.innerHTML = `
                        ${thumb}
                        <div>
                            <h4 style="margin:0; font-size:1rem; color:var(--text-primary);">${item.title}</h4>
                            <p style="margin:0; font-size:0.8rem; color:var(--accent-cyan);">${item.subtitle}</p>
                        </div>
                    `;
                    resDiv.onclick = () => {
                        window.closeSearch();
                        window.openLightbox(item);
                    };
                    searchResults.appendChild(resDiv);
                });
            });
        }

        // Cerrar con Escape
        window.addEventListener('keydown', (e) => {
            if(e.key === 'Escape') {
                if (lightbox && lightbox.classList.contains('active')) window.closeLightbox();
                if (searchModal && searchModal.classList.contains('active')) window.closeSearch();
            }
        });

        // 0.7 Efecto Morph (Texto a Arquitectura)
        const morphText = document.getElementById('morph-text');
        if (morphText) {
            setInterval(() => {
                morphText.classList.toggle('building');
            }, 3000);
        }

        // 0.8 Lusion Constellation Particles (Interactivo)
        const canvas = document.getElementById('fireflies');
        let lusionMouse = { x: -1000, y: -1000 };
        document.addEventListener('mousemove', (e) => {
            lusionMouse.x = e.clientX;
            lusionMouse.y = e.clientY;
        });

        if (canvas) {
            const ctx = canvas.getContext('2d');
            let width, height;
            let particles = [];

            const initCanvas = () => {
                width = canvas.width = window.innerWidth;
                height = canvas.height = window.innerHeight;
            };

            class NodeParticle {
                constructor() {
                    this.x = Math.random() * width;
                    this.y = Math.random() * height;
                    this.vx = (Math.random() - 0.5) * 1;
                    this.vy = (Math.random() - 0.5) * 1;
                }
                update() {
                    let dx = lusionMouse.x - this.x;
                    let dy = lusionMouse.y - this.y;
                    let dist = Math.sqrt(dx*dx + dy*dy);
                    let force = Math.max(0, 150 - dist) / 150;
                    
                    if (dist < 150) {
                        this.x -= dx * force * 0.05;
                        this.y -= dy * force * 0.05;
                    } else {
                        this.x += this.vx;
                        this.y += this.vy;
                    }

                    if (this.x < 0 || this.x > width) this.vx *= -1;
                    if (this.y < 0 || this.y > height) this.vy *= -1;
                }
                draw() {
                    ctx.beginPath();
                    ctx.arc(this.x, this.y, 1.5, 0, Math.PI * 2);
                    ctx.fillStyle = 'rgba(0, 229, 255, 0.6)';
                    ctx.fill();
                }
            }

            const initParticles = () => {
                particles = [];
                const pc = Math.floor((width * height) / 8000); 
                for (let i = 0; i < pc; i++) particles.push(new NodeParticle());
            };

            const animate = () => {
                ctx.clearRect(0, 0, width, height);
                particles.forEach(p => p.update());
                
                for(let i=0; i<particles.length; i++) {
                    particles[i].draw();
                    for(let j=i+1; j<particles.length; j++) {
                        let ddx = particles[i].x - particles[j].x;
                        let ddy = particles[i].y - particles[j].y;
                        let dst = Math.sqrt(ddx*ddx + ddy*ddy);
                        if(dst < 120) {
                            ctx.beginPath();
                            ctx.moveTo(particles[i].x, particles[i].y);
                            ctx.lineTo(particles[j].x, particles[j].y);
                            ctx.strokeStyle = `rgba(0, 229, 255, ${0.4 * (1 - dst/120)})`;
                            ctx.lineWidth = 1;
                            ctx.stroke();
                        }
                    }
                }
                requestAnimationFrame(animate);
            };

            window.addEventListener('resize', () => { initCanvas(); initParticles(); });
            initCanvas();
            initParticles();
            animate();
        }

        // 1. Configuración del Cursor Personalizado
        const cursorDot = document.getElementById('cursor-dot');
        const cursorOutline = document.getElementById('cursor-outline');
        const interactables = document.querySelectorAll('.interactable');
        
        // Verifica si estamos en dispositivo móvil (no aplica cursor custom)
        const isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;

        // Función compartida para actualizar el fondo 3D reactivo
        const updateDynamicBg = (clientX, clientY) => {
            const xDecimal = clientX / window.innerWidth;
            const yDecimal = clientY / window.innerHeight;
            
            const root = document.documentElement;
            root.style.setProperty('--mouse-x', `${(xDecimal * 100).toFixed(2)}%`);
            root.style.setProperty('--mouse-y', `${(yDecimal * 100).toFixed(2)}%`);
        };

        if (!isTouchDevice) {
            window.addEventListener('mousemove', (e) => {
                const posX = e.clientX;
                const posY = e.clientY;

                // Animación suave del cursor
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
                
                // Ligero retraso para el outline
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 500, fill: "forwards" });

                // Efecto Parallax en el Fondo
                updateDynamicBg(posX, posY);
            });

            // Hover effects para enlaces y botones
            interactables.forEach(el => {
                el.addEventListener('mouseenter', () => {
                    document.body.classList.add('cursor-hover');
                });
                el.addEventListener('mouseleave', () => {
                    document.body.classList.remove('cursor-hover');
                });
            });
        } else {
            // En dispositivos móviles habilitamos el movimiento del fondo al deslizar el dedo
            window.addEventListener('touchmove', (e) => {
                if (e.touches.length > 0) {
                    updateDynamicBg(e.touches[0].clientX, e.touches[0].clientY);
                }
            }, {passive: true});
        }

        // 3. Menú Móvil
        const mobileMenuBtn = document.getElementById('mobile-menu-btn');
        const navLinks = document.getElementById('nav-links');

        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });

        // Cerrar menú al hacer clic en un enlace (Móvil)
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });

        // 4. Scroll Header Blur (Cambia transparencia al hacer scroll)
        const header = document.getElementById('header');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                header.style.background = 'rgba(23, 23, 23, 0.85)';
                header.style.boxShadow = '0 4px 30px rgba(0, 0, 0, 0.5)';
            } else {
                header.style.background = 'var(--glass-bg)';
                header.style.boxShadow = '0 8px 32px rgba(0, 0, 0, 0.3)';
            }
        });

        // Documentación Técnica:
        /*
         * - Se aplicó una arquitectura 'Mobile First' ajustando primero el layout a grillas fluidas y usando clamp().
         * - Las animaciones 3D del fondo usan un gradiente radial de CSS que reajusta su origen dinámicamente según la posición del cursor, 
         *   ofreciendo alto rendimiento a diferencia de WebGL, lo que contribuye a un mejor score de Lighthouse.
         * - Se han incrustado variables CSS para facilitar cambios masivos en el diseño, ideal para modo oscuro/claro posterior.
         * - El cursor personalizado añade interactividad Premium y es desactivado en pantallas táctiles para accesibilidad.
         * - Los recursos externos son mínimos y se utiliza lazy loading nativo (loading="lazy") en las imágenes.
         */