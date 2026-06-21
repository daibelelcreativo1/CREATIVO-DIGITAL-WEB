/* ===== CREATIVO DIGITAL - JS Principal ===== */

// ========================
// DATA
// ========================
const PORTFOLIO_PROJECTS = [
  { id:'p1', title:'TORRE CELESTE', category:'ARQUITECTURA', imageUrl:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80', description:'Complejo residencial y comercial inteligente de 45 pisos con jardines verticales, optimización bioclimática pasiva y fachada cinética.', tags:['Sostenible','Bioclimática','Fachada Paramétrica','BIM'], location:'Medellín, COL', year:'2025' },
  { id:'p2', title:'CASA AEROCAFÉ', category:'ARQUITECTURA', imageUrl:'./img/luxury_villa_1781381880840.jpg', description:'Villa contemporánea de un solo nivel ensamblada en madera laminada (GLT) y concreto visto, mimetizándose con los campos cafeteros.', tags:['Madera Laminada','Cubierta Verde','Paisajismo','Lujo-Sostenible'], location:'Manizales, COL', year:'2024' },
  { id:'p3', title:'CO-WORKING MATRIX', category:'DISEÑO 3D', imageUrl:'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80', description:'Visualización y simulación fotorrealista en Unreal Engine 5 de oficinas colaborativas de alta tecnología.', tags:['Render 3D','Unreal Engine 5','Hologramas','Interiorismo'], location:'Metaverso', year:'2025' },
  { id:'p4', title:'IDENTIDAD ALPHA', category:'DISEÑO GRÁFICO', imageUrl:'./img/design_mockup_1781381899975.jpg', description:'Manual de identidad visual corporativa completo, branding tipográfico a medida y diseño de empaques eco-responsables.', tags:['Branding','Tipografía','Packaging','Vectorial'], location:'Bogotá, COL', year:'2025' },
  { id:'p5', title:'CATHEDRAL RENDER', category:'DISEÑO 3D', imageUrl:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80', description:'Representación conceptual volumétrica de una catedral futurista que utiliza principios de geometría sagrada.', tags:['Geo-computacional','3D Print Design','V-Ray','Concept Art'], location:'París, FRA', year:'2024' },
  { id:'p6', title:'NEXUS BRANDING', category:'DISEÑO GRÁFICO', imageUrl:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=700&q=80', description:'Reconstrucción de marca global para el holding de tecnología Nexus, destacando un isotipo minimalista.', tags:['Rebranding','Design System','UI/UX Guideline','Corporativo'], location:'Miami, USA', year:'2025' },
  { id:'p7', title:'CORTOMETRAJE SENSIS', category:'VIDEO', imageUrl:'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80', description:'Dirección de arte, cinematografía y post-producción audiovisual para cortometraje experiencial.', tags:['Edición','Dirección de Arte','Color Grading','Audiovisual'], location:'Cali, COL', year:'2024' },
  { id:'p8', title:'ARTE GENERATIVO SOLIS', category:'OTROS', imageUrl:'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=700&q=80', description:'Piezas de criptoarte matemático generadas mediante algoritmos p5.js que describen turbulencias gravitacionales.', tags:['Generativo','Creative Coding','NFT','WebGL'], location:'Tokio, JPN', year:'2025' }
];

const FEATURED_PROJECTS = [
  { title:'TORRE CELESTE', category:'ARQUITECTURA', location:'Bogotá, COL', image:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80', description:'Edificio corporativo inteligente con fachada paramétrica auto-sustentable.' },
  { title:'CASA AEROCAFÉ', category:'ARQUITECTURA', location:'Manizales, COL', image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80', description:'Vivienda unifamiliar de arquitectura orgánica integrada al paisaje cafetero.' },
  { title:'DISEÑO 3D SCOPE', category:'DISEÑO 3D', location:'Metaverso', image:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80', description:'Modelado y simulación espacial hiper-realista para entornos inmersivos.' },
  { title:'IDENTIDAD ALPHA', category:'DISEÑO GRÁFICO', location:'Mundial', image:'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80', description:'Desarrollo de branding y sistemas visuales modulares para vanguardia tecnológica.' }
];

const MUSIC_TRACKS = [
  { id:'t1', title:'Cyber Dawn', artist:'Daibel El Creativo', url:'https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3' },
  { id:'t2', title:'Neon Pulse', artist:'Daibel El Creativo', url:'https://assets.mixkit.co/music/preview/mixkit-sleepy-cat-135.mp3' },
  { id:'t3', title:'Digital Horizon', artist:'Daibel El Creativo', url:'https://assets.mixkit.co/music/preview/mixkit-cinematic-epic-suspense-557.mp3' },
  { id:'t4', title:'Quantum Beat', artist:'Daibel El Creativo', url:'https://assets.mixkit.co/music/preview/mixkit-driving-ambient-126.mp3' }
];

const VIDEOS_LIST = [
  { id:'v1', title:'CINEMÁTICA BRUTALISTA', duration:'2:40 Min', cover:'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80', desc:'Dirección de arte experimental', url:'https://assets.mixkit.co/videos/preview/mixkit-neon-light-from-a-tunnel-in-a-futuristic-city-41865-large.mp4' },
  { id:'v2', title:'SINFONÍA DE ACERO', duration:'3:15 Min', cover:'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=400&q=80', desc:'Montaje de complejos estructurales de metal', url:'https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-at-night-41846-large.mp4' },
  { id:'v3', title:'ECOS DEL TIEMPO', duration:'1:50 Min', cover:'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80', desc:'Edición de clips con desfases de cámara', url:'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41855-large.mp4' }
];

const PRIMARY_SERVICES = [
  { id:'s1', title:'ARQUITECTURA', description:'Diseño de espacios funcionales, bioclimáticos y excepcionales.', longDescription:'Planificación integral de proyectos que balancea estética audaz, eficiencia energética pasiva, sostenibilidad certificada (LEED Edge) y optimización estructural avanzada mediante flujos BIM integrales.', iconName:'building-2', benefits:['Modelado BIM LOD 400','Diseño Pasivo/Bioclimático','Coordinación de Ingenierías','Permisos & Viabilidad'], projectsCount:18 },
  { id:'s2', title:'DISEÑO GRÁFICO', description:'Identidades visuales sofisticadas que comunican y conectan.', longDescription:'Estudios exhaustivos de semiótica visual para diseñar marcas atemporales, sistemas tipográficos hechos a medida, papelerías corporativas pulidas y empaques ecológicos.', iconName:'palette', benefits:['Identidad Corporativa Completa','Diseño Tipográfico Digital','Maquetación Editorial Avanzada','Packaging Ecológico'], projectsCount:6 },
  { id:'s3', title:'VIDEO', description:'Producción y postproducción audiovisual cinematográfica.', longDescription:'Simulación física de la iluminación y texturas de alta gama optimizadas para proyectos inmobiliarios de lujo, recorridos interactivos virtuales impulsados por Unreal Engine 5 y animaciones promocionales cinemáticas.', iconName:'video', benefits:['Edición Profesional','Recorridos Virtuales VR','Animación Cinemática 4K','Color Grading ACES'], projectsCount:13 },
  { id:'s4', title:'MÚSICA', description:'Composiciones sonoras y diseño de audio profesional.', longDescription:'Auditorías de marca robustas, análisis de competidores, definición de arquetipos psicológicos y manuales de tono de voz de marca que alinean la comunicación.', iconName:'music', benefits:['Composición Original','Diseño de Foley','Mezcla en Dolby','Logo Sonoro'], projectsCount:12 }
];

const SECONDARY_BENEFITS = [
  { title:'ENFOQUE ESTRATÉGICO', description:'Cada proyecto comienza con un análisis profundo y técnico de la necesidad real comercial.', iconName:'target' },
  { title:'DISEÑO INTEGRAL', description:'Creamos con propósito y rigor geométrico, no por modas pasajeras o decisiones cosméticas.', iconName:'lightbulb' },
  { title:'TECNOLOGÍA AVANZADA', description:'Utilizamos herramientas computacionales de última generación para modelado, cálculo y simulación.', iconName:'cpu' },
  { title:'RESULTADOS REALES', description:'Identidades, edificaciones y experiencias espaciales y de marca de alto impacto global.', iconName:'award' }
];

const BASE_RATES = {
  ARQUITECTURA: { base:0, metricLabel:'Área del lote (m²)' },
  'DISEÑO GRÁFICO': { base:0, metricLabel:'Cantidad de piezas/recursos' },
  VIDEO: { base:0, metricLabel:'Segundos del video editado' },
  MÚSICA: { base:0, metricLabel:'Canales sonoros Foley' },
  OTROS: { base:0, metricLabel:'Nivel del algoritmo (1-10)' }
};

// ========================
// AUDIO CONTEXT
// ========================
let audioCtx = null;
function getAudioCtx() {
  if (!audioCtx) audioCtx = new (window.AudioContext || window.webkitAudioContext)();
  return audioCtx;
}

function playBeep(freq, dur, type='sine') {
  try {
    const ctx = getAudioCtx();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.04, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + dur);
    osc.connect(gain);
    gain.connect(ctx.destination);
    osc.start();
    osc.stop(ctx.currentTime + dur);
  } catch(e){}
}

// ========================
// PIANO
// ========================
const PIANO_NOTES = [
  { note:'C4', freq:261.63, black:false },
  { note:'C#4', freq:277.18, black:true },
  { note:'D4', freq:293.66, black:false },
  { note:'D#4', freq:311.13, black:true },
  { note:'E4', freq:329.63, black:false },
  { note:'F4', freq:349.23, black:false },
  { note:'F#4', freq:369.99, black:true },
  { note:'G4', freq:392.00, black:false },
  { note:'G#4', freq:415.30, black:true },
  { note:'A4', freq:440.00, black:false },
  { note:'A#4', freq:466.16, black:true },
  { note:'B4', freq:493.88, black:false },
  { note:'C5', freq:523.25, black:false }
];

const pianoOscillators = {};

function playPianoNote(noteData) {
  const ctx = getAudioCtx();
  const osc = ctx.createOscillator();
  const gain = ctx.createGain();
  osc.type = 'triangle';
  osc.frequency.setValueAtTime(noteData.freq, ctx.currentTime);
  gain.gain.setValueAtTime(0.25, ctx.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
  osc.connect(gain);
  gain.connect(ctx.destination);
  osc.start();
  pianoOscillators[noteData.note] = { osc, gain };
}

function stopPianoNote(noteData) {
  if (pianoOscillators[noteData.note]) {
    pianoOscillators[noteData.note].gain.gain.exponentialRampToValueAtTime(0.0001, getAudioCtx().currentTime + 0.1);
    pianoOscillators[noteData.note].osc.stop(getAudioCtx().currentTime + 0.1);
    delete pianoOscillators[noteData.note];
  }
}

function buildPiano() {
  const container = document.getElementById('piano-keys');
  if (!container) return;
  container.innerHTML = '';
  
  const whites = PIANO_NOTES.filter(n => !n.black);
  const blacks = PIANO_NOTES.filter(n => n.black);
  
  // White keys first
  whites.forEach(n => {
    const key = document.createElement('div');
    key.className = 'piano-key-white';
    key.dataset.note = n.note;
    key.innerHTML = `<span>${n.note}</span>`;
    key.addEventListener('mousedown', () => {
      playPianoNote(n);
      key.classList.add('pressed');
    });
    key.addEventListener('mouseup', () => {
      stopPianoNote(n);
      key.classList.remove('pressed');
    });
    key.addEventListener('mouseleave', () => {
      stopPianoNote(n);
      key.classList.remove('pressed');
    });
    key.addEventListener('touchstart', (e) => { e.preventDefault(); playPianoNote(n); key.classList.add('pressed'); });
    key.addEventListener('touchend', () => { stopPianoNote(n); key.classList.remove('pressed'); });
    container.appendChild(key);
  });
  
  // Black keys positioned absolutely
  let whiteIdx = 0;
  PIANO_NOTES.forEach(n => {
    if (n.black) {
      const key = document.createElement('div');
      key.className = 'piano-key-black';
      key.dataset.note = n.note;
      const leftPos = (whiteIdx * 48) + 34;
      key.style.left = leftPos + 'px';
      key.addEventListener('mousedown', () => {
        playPianoNote(n);
        key.classList.add('pressed');
      });
      key.addEventListener('mouseup', () => {
        stopPianoNote(n);
        key.classList.remove('pressed');
      });
      key.addEventListener('mouseleave', () => {
        stopPianoNote(n);
        key.classList.remove('pressed');
      });
      key.addEventListener('touchstart', (e) => { e.preventDefault(); playPianoNote(n); key.classList.add('pressed'); });
      key.addEventListener('touchend', () => { stopPianoNote(n); key.classList.remove('pressed'); });
      container.appendChild(key);
    } else {
      whiteIdx++;
    }
  });
}

// ========================
// MUSIC PLAYER
// ========================
let currentTrack = null;
let currentAudio = null;
let isPlaying = false;
let trackVolume = 0.8;

function formatTime(sec) {
  const m = Math.floor(sec / 60);
  const s = Math.floor(sec % 60);
  return m + ':' + String(s).padStart(2,'0');
}

function updatePlayerUI() {
  const bar = document.getElementById('music-player-bar');
  if (!bar || !currentTrack) return;
  
  document.getElementById('player-title').textContent = currentTrack.title;
  document.getElementById('player-artist').textContent = currentTrack.artist;
  
  const playBtn = document.getElementById('player-play-btn');
  playBtn.innerHTML = isPlaying 
    ? '<i data-lucide="pause" class="w-5 h-5"></i>' 
    : '<i data-lucide="play" class="w-5 h-5"></i>';
  
  if (typeof lucide !== 'undefined') lucide.createIcons();
  
  document.querySelectorAll('.track-card').forEach(card => {
    card.classList.toggle('border-cyber-cyan/40', card.dataset.trackId === currentTrack?.id);
  });
}

function updateProgress() {
  if (!currentAudio || !currentTrack) return;
  const progress = document.getElementById('player-progress-fill');
  const currentTime = document.getElementById('player-current-time');
  if (progress && currentAudio.duration) {
    progress.style.width = (currentAudio.currentTime / currentAudio.duration * 100) + '%';
  }
  if (currentTime && currentAudio.duration) {
    currentTime.textContent = formatTime(currentAudio.currentTime);
  }
}

function playTrack(trackId) {
  const track = MUSIC_TRACKS.find(t => t.id === trackId);
  if (!track) return;
  
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.src = '';
  }
  
  currentTrack = track;
  currentAudio = new Audio(track.url);
  currentAudio.volume = trackVolume;
  
  currentAudio.addEventListener('timeupdate', updateProgress);
  currentAudio.addEventListener('ended', () => {
    isPlaying = false;
    updatePlayerUI();
  });
  
  currentAudio.play().then(() => {
    isPlaying = true;
    updatePlayerUI();
  }).catch(e => console.log('Audio play error:', e));
}

function togglePlay() {
  if (!currentAudio || !currentTrack) return;
  if (isPlaying) {
    currentAudio.pause();
    isPlaying = false;
  } else {
    currentAudio.play();
    isPlaying = true;
  }
  updatePlayerUI();
}

function skipTrack(dir) {
  if (!currentTrack) return;
  const idx = MUSIC_TRACKS.findIndex(t => t.id === currentTrack.id);
  const next = (idx + dir + MUSIC_TRACKS.length) % MUSIC_TRACKS.length;
  playTrack(MUSIC_TRACKS[next].id);
}

function setVolume(val) {
  trackVolume = val;
  if (currentAudio) currentAudio.volume = val;
  const volIcon = document.getElementById('player-volume-icon');
  if (volIcon) {
    if (val === 0) volIcon.innerHTML = '<i data-lucide="volume-x" class="w-4 h-4"></i>';
    else if (val < 0.5) volIcon.innerHTML = '<i data-lucide="volume-1" class="w-4 h-4"></i>';
    else volIcon.innerHTML = '<i data-lucide="volume-2" class="w-4 h-4"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}

function seekTrack(e) {
  if (!currentAudio || !currentAudio.duration) return;
  const rect = e.currentTarget.getBoundingClientRect();
  const pct = (e.clientX - rect.left) / rect.width;
  currentAudio.currentTime = pct * currentAudio.duration;
}

function buildTrackList() {
  const container = document.getElementById('track-list');
  if (!container) return;
  container.innerHTML = '';
  MUSIC_TRACKS.forEach(track => {
    const card = document.createElement('div');
    card.className = 'track-card p-3 border border-white/5 bg-cyber-dark rounded-lg flex items-center gap-3 mb-2';
    card.dataset.trackId = track.id;
    card.innerHTML = `
      <div class="w-10 h-10 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center shrink-0">
        <i data-lucide="music" class="w-4 h-4 text-cyber-cyan"></i>
      </div>
      <div class="flex-grow min-w-0">
        <h4 class="font-orbitron text-[10px] font-bold tracking-wider text-white truncate">${track.title}</h4>
        <p class="font-mono text-[8px] text-gray-500">${track.artist}</p>
      </div>
      <div class="flex items-center gap-1.5">
        <span class="w-2 h-2 rounded-full bg-cyber-cyan/30" id="track-indicator-${track.id}"></span>
        <i data-lucide="play" class="w-3.5 h-3.5 text-gray-500"></i>
      </div>
    `;
    card.addEventListener('click', () => playTrack(track.id));
    container.appendChild(card);
  });
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========================
// CAROUSEL
// ========================
let carouselIndex = 0;
let carouselInterval = null;

function goToSlide(idx) {
  carouselIndex = idx;
  const track = document.getElementById('carousel-track');
  if (track) {
    const total = FEATURED_PROJECTS.length;
    const i = ((idx % total) + total) % total;
    track.style.transform = `translateX(-${i * 100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((dot, di) => {
      dot.classList.toggle('active', di === i);
    });
  }
}

function nextSlide() { goToSlide(carouselIndex + 1); }
function prevSlide() { goToSlide(carouselIndex - 1); }

function startCarousel() {
  stopCarousel();
  carouselInterval = setInterval(nextSlide, 3500);
}

function stopCarousel() {
  if (carouselInterval) clearInterval(carouselInterval);
}

function buildCarousel() {
  const track = document.getElementById('carousel-track');
  const dots = document.getElementById('carousel-dots');
  if (!track || !dots) return;
  
  track.innerHTML = '';
  FEATURED_PROJECTS.forEach((proj, idx) => {
    const slide = document.createElement('div');
    slide.className = 'carousel-slide';
    slide.innerHTML = `
      <div class="group relative h-48 rounded-lg overflow-hidden border border-white/5 bg-cyber-dark hover:border-cyber-cyan/40 transition-all duration-300 shadow-lg p-2 flex flex-col justify-end cursor-pointer mx-1" onclick="openFullscreenImage('${proj.image}')">
        <img src="${proj.image}" alt="${proj.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-50 group-hover:brightness-40" />
        <div class="absolute inset-0 border border-cyber-cyan/0 group-hover:border-cyber-cyan/25 rounded-lg z-10 transition-all duration-300 pointer-events-none" />
        <div class="absolute top-2 left-2 z-10 font-mono text-[8px] bg-cyber-blue/80 text-white px-1.5 py-0.5 rounded">${proj.category}</div>
        <div class="relative z-10 p-2 text-left">
          <h4 class="font-orbitron text-xs font-bold tracking-wider text-white mb-0.5 group-hover:text-cyber-cyan transition-colors">${proj.title}</h4>
          <p class="font-mono text-[8px] text-gray-400">${proj.location}</p>
        </div>
      </div>
    `;
    track.appendChild(slide);
  });
  
  dots.innerHTML = '';
  FEATURED_PROJECTS.forEach((_, i) => {
    const dot = document.createElement('div');
    dot.className = 'carousel-dot' + (i === 0 ? ' active' : '');
    dot.addEventListener('click', () => { goToSlide(i); startCarousel(); });
    dots.appendChild(dot);
  });
  
  startCarousel();
}

// ========================
// FULLSCREEN VIEWERS
// ========================
function openFullscreenImage(url) {
  closeAllViewers();
  const viewer = document.createElement('div');
  viewer.className = 'image-viewer-container';
  viewer.id = 'fullscreen-viewer';
  viewer.innerHTML = `
    <div class="corner-deco corner-tl"></div>
    <div class="corner-deco corner-tr"></div>
    <div class="corner-deco corner-bl"></div>
    <div class="corner-deco corner-br"></div>
    <div class="hud-label">VIEWER_FULLSCREEN // IMAGE</div>
    <button onclick="closeAllViewers()" class="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-cyber-cyan hover:border-cyber-cyan transition-all cursor-pointer shadow-lg">
      <i data-lucide="x" class="w-5 h-5"></i>
    </button>
    <img src="${url}" alt="Full Screen Preview" onclick="event.stopPropagation()" />
  `;
  viewer.addEventListener('click', closeAllViewers);
  document.body.appendChild(viewer);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function openFullscreenVideo(url) {
  closeAllViewers();
  const viewer = document.createElement('div');
  viewer.className = 'video-viewer-container';
  viewer.id = 'fullscreen-viewer';
  viewer.innerHTML = `
    <div class="corner-deco corner-tl"></div>
    <div class="corner-deco corner-tr"></div>
    <div class="corner-deco corner-bl"></div>
    <div class="corner-deco corner-br"></div>
    <div class="hud-label">VIEWER_FULLSCREEN // VIDEO_STREAM</div>
    <button onclick="closeAllViewers()" class="absolute top-6 right-6 z-10 w-10 h-10 rounded-full bg-black/60 border border-white/20 flex items-center justify-center text-white hover:text-cyber-cyan hover:border-cyber-cyan transition-all cursor-pointer shadow-lg">
      <i data-lucide="x" class="w-5 h-5"></i>
    </button>
    <div class="w-full max-w-5xl mx-auto px-8" onclick="event.stopPropagation()">
      <video controls autoplay loop class="w-full rounded" style="border:2px solid rgba(0,240,255,0.4); box-shadow:0 0 30px rgba(0,240,255,0.2);">
        <source src="${url}" type="video/mp4">
        Tu navegador no soporta video.
      </video>
    </div>
  `;
  viewer.addEventListener('click', closeAllViewers);
  document.body.appendChild(viewer);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function closeAllViewers() {
  const v = document.getElementById('fullscreen-viewer');
  if (v) {
    const vid = v.querySelector('video');
    if (vid) { vid.pause(); vid.src = ''; }
    v.remove();
  }
  const projModal = document.getElementById('project-modal');
  if (projModal) projModal.remove();
  const svcModal = document.getElementById('service-modal');
  if (svcModal) svcModal.remove();
}

// ========================
// PROJECT DETAIL MODAL
// ========================
function openProjectDetail(projectId) {
  const proj = PORTFOLIO_PROJECTS.find(p => p.id === projectId);
  if (!proj) return;
  
  closeAllViewers();
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
  modal.id = 'project-modal';
  modal.innerHTML = `
    <div class="relative w-full max-w-2xl bg-cyber-dark border border-cyber-cyan/30 rounded-lg overflow-hidden flex flex-col max-h-[90vh] shadow-2xl neon-border-cyan text-left fade-in">
      <button onclick="closeAllViewers()" class="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
      <div class="relative h-60 w-full overflow-hidden shrink-0 cursor-pointer group" onclick="openFullscreenImage('${proj.imageUrl}')">
        <img src="${proj.imageUrl}" alt="${proj.title}" class="w-full h-full object-cover" />
        <div class="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/30 to-black/20"></div>
        <div class="absolute inset-0 bg-black/35 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300 z-10">
          <span class="font-orbitron text-xs text-cyber-cyan border border-cyber-cyan/50 px-3 py-1.5 rounded bg-black/80 tracking-widest neon-text-cyan">PANTALLA COMPLETA</span>
        </div>
        <div class="absolute bottom-4 left-6 z-20">
          <span class="font-mono text-[8px] bg-cyber-cyan/20 border border-cyber-cyan/30 text-cyber-cyan font-bold px-2 py-0.5 rounded inline-block mb-1.5">${proj.category}</span>
          <h3 class="font-orbitron text-xl font-bold tracking-widest text-white leading-none">${proj.title}</h3>
        </div>
      </div>
      <div class="p-6 overflow-y-auto space-y-5 text-left">
        <div class="grid grid-cols-2 gap-4 pb-4 border-b border-white/5 font-mono text-xs">
          <div><span class="text-gray-500 block mb-0.5 text-[10px]">UBICACIÓN</span><span class="text-gray-300 font-semibold">${proj.location}</span></div>
          <div><span class="text-gray-500 block mb-0.5 text-[10px]">AÑO</span><span class="text-gray-300 font-semibold">${proj.year}</span></div>
        </div>
        <div>
          <h4 class="font-orbitron font-semibold text-xs tracking-wider text-cyber-cyan mb-2">ESPECIFICACIONES DEL PROYECTO</h4>
          <p class="font-sans text-xs text-gray-300 leading-relaxed tracking-wide">${proj.description}</p>
        </div>
        <div>
          <h4 class="font-orbitron font-semibold text-xs tracking-wider text-cyber-cyan mb-2">CRITERIOS TÉCNICOS</h4>
          <div class="flex flex-wrap gap-2">
            ${proj.tags.map(t => `<span class="px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/25 text-cyber-blue font-mono text-[8.5px] rounded-sm">${t}</span>`).join('')}
          </div>
        </div>
        <div class="pt-4 border-t border-white/5 flex gap-4">
          <button onclick="closeAllViewers(); openInquiryModal();" class="flex-grow py-2.5 px-4 bg-cyber-cyan hover:bg-cyber-cyan/90 text-black font-orbitron text-[10px] font-bold tracking-widest rounded transition-all cursor-pointer text-center">SOLICITAR PRESUPUESTO</button>
          <button onclick="closeAllViewers()" class="py-2.5 px-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400 hover:text-white font-mono text-[10px] tracking-wider rounded transition-all cursor-pointer">REGRESAR</button>
        </div>
      </div>
    </div>
  `;
  modal.addEventListener('click', (e) => { if (e.target === modal) closeAllViewers(); });
  document.body.appendChild(modal);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========================
// SERVICE DETAIL MODAL
// ========================
function openServiceDetail(serviceId) {
  const svc = PRIMARY_SERVICES.find(s => s.id === serviceId);
  if (!svc) return;
  
  closeAllViewers();
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
  modal.id = 'service-modal';
  modal.innerHTML = `
    <div class="relative w-full max-w-md bg-cyber-dark border border-cyber-cyan/30 rounded-lg shadow-2xl p-6 text-left neon-border-cyan">
      <button onclick="closeAllViewers()" class="absolute top-4 right-4 text-gray-400 hover:text-white cursor-pointer">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
      <div class="flex items-center gap-3 border-b border-white/5 pb-4 mb-4">
        <div class="w-12 h-12 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded flex items-center justify-center">
          <i data-lucide="${svc.iconName}" class="w-6 h-6 text-cyber-cyan"></i>
        </div>
        <div>
          <h3 class="font-orbitron text-sm font-black tracking-widest text-white">${svc.title}</h3>
          <span class="font-mono text-[8px] text-cyber-cyan block uppercase">DISCIPLINA DE ENTREGAS // ESTUDIO</span>
        </div>
      </div>
      <p class="font-sans text-xs text-gray-300 leading-relaxed mb-5">${svc.longDescription}</p>
      <div class="space-y-2 mb-6">
        <h4 class="font-orbitron text-[9px] font-bold tracking-widest text-cyber-cyan uppercase">MÉTODOS & PROTOCOLOS INCLUIDOS</h4>
        <div class="grid grid-cols-1 gap-2">
          ${svc.benefits.map(b => `<div class="flex items-center gap-2 font-mono text-[9px] text-gray-400"><i data-lucide="check" class="w-3.5 h-3.5 text-cyber-cyan"></i><span>${b}</span></div>`).join('')}
        </div>
      </div>
      <button onclick="closeAllViewers(); navigateTo('EXPLORAR');" class="w-full py-2.5 bg-cyber-cyan hover:bg-cyber-cyan/90 text-black font-orbitron text-[10px] font-bold tracking-widest rounded transition-colors text-center cursor-pointer">VER PROYECTOS</button>
    </div>
  `;
  modal.addEventListener('click', (e) => { if (e.target === modal) closeAllViewers(); });
  document.body.appendChild(modal);
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========================
// INQUIRY MODAL (COTIZADOR)
// ========================
let inquiryStep = 1;
let inquiryData = { name:'', email:'', discipline:'ARQUITECTURA', metricSize:150, comment:'' };

function openInquiryModal() {
  inquiryStep = 1;
  inquiryData = { name:'', email:'', discipline:'ARQUITECTURA', metricSize:150, comment:'' };
  renderInquiryModal();
}

function renderInquiryModal() {
  let existing = document.getElementById('inquiry-modal');
  if (existing) existing.remove();
  
  const modal = document.createElement('div');
  modal.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
  modal.id = 'inquiry-modal';
  modal.id = 'inquiry-modal';
  
  const emailValid = validateEmail(inquiryData.email);
  
  let stepContent = '';
  if (inquiryStep === 1) {
    stepContent = `
      <div class="space-y-4">
        <p class="font-sans text-xs text-gray-400">Por favor, proporcione los datos de contacto para anclar la propuesta técnica.</p>
        <div>
          <label class="block font-mono text-[9px] text-gray-500 uppercase mb-1">Nombre Completo *</label>
          <input type="text" id="inq-name" placeholder="e.g. Ing. Alejandro Mendoza" value="${inquiryData.name}" class="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-cyber-cyan outline-none transition-colors" />
        </div>
        <div>
          <label class="block font-mono text-[9px] text-gray-500 uppercase mb-1">Correo Electrónico *</label>
          <input type="email" id="inq-email" placeholder="e.g. alejandro@empresa.com" value="${inquiryData.email}" class="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-cyber-cyan outline-none transition-colors ${inquiryData.email && !emailValid ? 'border-red-500' : ''}" />
          ${inquiryData.email && !emailValid ? '<p class="email-error mt-1">⚠ Correo no válido. Ingrese un email verdadero.</p>' : ''}
        </div>
        <div>
          <label class="block font-mono text-[9px] text-gray-500 uppercase mb-1">Comentario / Descripción del Proyecto</label>
          <textarea id="inq-comment" placeholder="Describa brevemente su proyecto..." rows="3" class="w-full bg-black border border-white/10 rounded px-3 py-2 text-xs text-white focus:border-cyber-cyan outline-none transition-colors resize-none">${inquiryData.comment}</textarea>
        </div>
      </div>
    `;
  } else if (inquiryStep === 2) {
    stepContent = `
      <div class="space-y-4">
        <p class="font-sans text-xs text-gray-400">Seleccione la disciplina técnica para el presupuesto.</p>
        <div class="grid grid-cols-2 gap-2">
          ${Object.entries(BASE_RATES).map(([key, val]) => `
            <button type="button" onclick="selectDiscipline('${key}')" class="p-3 border rounded text-left transition-all duration-200 cursor-pointer ${inquiryData.discipline === key ? 'border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan' : 'border-white/5 bg-black/40 text-gray-400 hover:text-white hover:border-white/10'}">
              <span class="font-orbitron font-bold text-[8.5px] tracking-widest block">${key}</span>
              <span class="font-mono text-[7px] text-gray-500 block mt-0.5">${val.metricLabel}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else if (inquiryStep === 3) {
    const rate = BASE_RATES[inquiryData.discipline] || { base:0, metricLabel:'' };
    const estimate = rate.base * inquiryData.metricSize;
    stepContent = `
      <div class="space-y-4">
        <div class="p-4 bg-black/60 rounded border border-white/5 flex flex-col gap-3">
          <div class="flex items-center gap-2 text-cyber-cyan">
            <i data-lucide="calculator" class="w-4 h-4"></i>
            <span class="font-orbitron font-semibold text-[9px] tracking-widest uppercase">ESTIMADOR TÉCNICO</span>
          </div>
          <div>
            <label class="font-mono text-[9px] text-gray-400 flex justify-between mb-1 text-left">
              <span>${rate.metricLabel}</span>
              <span class="text-cyber-cyan font-bold">${inquiryData.metricSize}</span>
            </label>
            <input type="range" id="inq-metric" min="10" max="1000" value="${inquiryData.metricSize}" class="w-full h-1 bg-cyber-dark rounded-full appearance-none cursor-pointer accent-cyber-cyan border border-white/5" />
          </div>
          <div class="flex justify-between items-center border-t border-white/5 pt-2 mt-1">
            <span class="font-mono text-[8.5px] text-gray-500">VALOR ESTIMADO</span>
            <span class="font-orbitron text-xs font-black text-cyber-cyan neon-text-cyan">$${estimate.toLocaleString()} COP</span>
          </div>
        </div>
        <p class="font-sans text-[9px] text-gray-500 leading-normal">*Cotización aproximada, depende de la evaluación final.</p>
      </div>
    `;
  }
  
  modal.innerHTML = `
    <div class="relative w-full max-w-lg bg-cyber-dark border border-cyber-cyan/30 rounded-lg overflow-hidden flex flex-col shadow-2xl neon-border-cyan text-left fade-in">
      <button onclick="closeInquiryModal()" class="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white transition-colors cursor-pointer">
        <i data-lucide="x" class="w-4 h-4"></i>
      </button>
      <div class="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-blue w-full"></div>
      <div class="p-6 space-y-5">
        <div class="pb-3 border-b border-white/5">
          <h3 class="font-orbitron text-sm font-black tracking-widest text-white uppercase">PLANIFICADOR DE PROYECTO</h3>
          <span class="font-mono text-[8px] text-cyber-cyan block mt-0.5">INGRESO DE REQUERIMIENTOS AL SISTEMA DE COTIZACIÓN AUTOMATIZADO</span>
        </div>
        <div class="flex gap-2 items-center justify-between pb-1 text-[10px] font-mono text-gray-400">
          <span>PASO ${inquiryStep} DE 3</span>
          <div class="flex gap-1">
            <div class="w-6 h-1 rounded ${inquiryStep >= 1 ? 'bg-cyber-cyan' : 'bg-white/10'}"></div>
            <div class="w-6 h-1 rounded ${inquiryStep >= 2 ? 'bg-cyber-cyan' : 'bg-white/10'}"></div>
            <div class="w-6 h-1 rounded ${inquiryStep >= 3 ? 'bg-cyber-cyan' : 'bg-white/10'}"></div>
          </div>
        </div>
        ${stepContent}
        <div class="pt-4 border-t border-white/5 flex justify-between gap-3">
          ${inquiryStep > 1 ? `<button onclick="goBackInquiry()" class="py-2.5 px-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400 hover:text-white font-mono text-[10px] tracking-wider rounded transition-all duration-200 cursor-pointer">ATRÁS</button>` : `<button onclick="closeInquiryModal()" class="py-2.5 px-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400 hover:text-white font-mono text-[10px] tracking-wider rounded transition-all duration-200 cursor-pointer">CANCELAR</button>`}
          ${inquiryStep < 3 ? `<button onclick="goNextInquiry()" class="py-2.5 px-6 bg-cyber-blue hover:bg-cyber-blue/90 text-white font-orbitron text-[10px] font-bold tracking-widest rounded transition-all duration-200 cursor-pointer">CONTINUAR</button>` : `<button onclick="submitInquiry()" class="py-2.5 px-6 bg-cyber-cyan hover:bg-cyber-cyan/90 text-black font-orbitron text-[10px] font-bold tracking-widest rounded transition-all duration-200 cursor-pointer flex items-center justify-center gap-2"><span>ENVIAR</span><i data-lucide="send" class="w-3 h-3"></i></button>`}
        </div>
      </div>
    </div>
  `;
  modal.addEventListener('click', (e) => { if (e.target === modal) closeInquiryModal(); });
  document.body.appendChild(modal);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  
  // Bind inputs
  setTimeout(() => {
    const nameEl = document.getElementById('inq-name');
    const emailEl = document.getElementById('inq-email');
    const commentEl = document.getElementById('inq-comment');
    const metricEl = document.getElementById('inq-metric');
    if (nameEl) nameEl.addEventListener('input', (e) => { inquiryData.name = e.target.value; });
    if (emailEl) emailEl.addEventListener('input', (e) => { inquiryData.email = e.target.value; });
    if (commentEl) commentEl.addEventListener('input', (e) => { inquiryData.comment = e.target.value; });
    if (metricEl) metricEl.addEventListener('input', (e) => { inquiryData.metricSize = parseInt(e.target.value); renderInquiryModal(); });
  }, 50);
}

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function selectDiscipline(disc) {
  inquiryData.discipline = disc;
  renderInquiryModal();
}

function goNextInquiry() {
  if (inquiryStep === 1) {
    if (!inquiryData.name.trim()) { alert('Por favor ingrese su nombre.'); return; }
    if (!validateEmail(inquiryData.email)) { alert('Por favor ingrese un correo electrónico válido.'); return; }
  }
  inquiryStep++;
  renderInquiryModal();
}

function goBackInquiry() {
  inquiryStep--;
  renderInquiryModal();
}

function closeInquiryModal() {
  const m = document.getElementById('inquiry-modal');
  if (m) m.remove();
}

function submitInquiry() {
  closeInquiryModal();
  
  // Show computing animation
  const loading = document.createElement('div');
  loading.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
  loading.id = 'inquiry-loading';
  loading.innerHTML = `
    <div class="w-full max-w-sm bg-cyber-dark border-2 border-cyber-cyan/40 p-6 rounded-lg text-center flex flex-col justify-center items-center h-64 space-y-4 shadow-2xl neon-border-cyan fade-in">
      <div class="w-12 h-12 border-2 border-dashed border-cyber-cyan rounded-full flex items-center justify-center animate-[spin_1.5s_linear_infinite]">
        <i data-lucide="upload" class="w-4 h-4 text-cyber-cyan"></i>
      </div>
      <div class="space-y-1">
        <h4 class="font-orbitron font-bold text-xs tracking-widest text-white">ENVIANDO PROPUESTA...</h4>
        <p class="font-mono text-[8px] text-gray-500 uppercase tracking-widest">[ TELEMETRY: COMPLETED ]</p>
      </div>
      <div class="w-full max-w-[200px] h-[3px] bg-white/5 rounded-full overflow-hidden relative">
        <div class="absolute h-full w-1/2 bg-cyber-cyan animate-[pulse_1.5s_infinite]"></div>
      </div>
    </div>
  `;
  document.body.appendChild(loading);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  
  // Try mailto
  const subject = encodeURIComponent(`Solicitud de Proyecto - ${inquiryData.discipline} - ${inquiryData.name}`);
  const body = encodeURIComponent(
    `Nombre: ${inquiryData.name}\nCorreo: ${inquiryData.email}\nDisciplina: ${inquiryData.discipline}\nMétrica: ${inquiryData.metricSize}\nComentario: ${inquiryData.comment}\n\nEnviado desde CREATIVO DIGITAL`
  );
  window.open(`mailto:daibelelcreativo1@gmail.com?subject=${subject}&body=${body}`, '_blank');
  
  // Show success after delay
  setTimeout(() => {
    loading.remove();
    const done = document.createElement('div');
    done.className = 'fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
    done.id = 'inquiry-done';
    const rate = BASE_RATES[inquiryData.discipline] || { base:0 };
    const estimate = rate.base * inquiryData.metricSize;
    done.innerHTML = `
      <div class="w-full max-w-md bg-cyber-dark border border-green-500/40 p-6 rounded-lg text-center flex flex-col justify-center items-center shadow-2xl relative overflow-hidden text-left fade-in">
        <div class="absolute top-0 left-0 right-0 h-1 bg-green-500"></div>
        <div class="w-11 h-11 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4">
          <i data-lucide="check-circle" class="w-5 h-5 text-green-500"></i>
        </div>
        <h3 class="font-orbitron font-black text-sm tracking-widest text-white mb-1 text-center">PROPUESTA ANCLADA</h3>
        <p class="font-sans text-xs text-gray-400 text-center mb-6 max-w-xs leading-normal">Sus requerimientos de <span class="text-cyber-cyan font-bold font-mono">${inquiryData.discipline}</span> han sido enviados correctamente.</p>
        <div class="w-full bg-black/60 rounded border border-white/5 p-4 text-left font-mono text-[9px] text-gray-400 space-y-1.5 mb-6">
          <div class="flex justify-between border-b border-white/[0.04] pb-1"><span>CLIENTE</span><span class="text-white font-semibold">${inquiryData.name.toUpperCase()}</span></div>
          <div class="flex justify-between border-b border-white/[0.04] pb-1"><span>CORREO</span><span class="text-white font-semibold">${inquiryData.email}</span></div>
          <div class="flex justify-between border-b border-white/[0.04] pb-1"><span>METRICA</span><span class="text-cyber-cyan font-semibold">${inquiryData.metricSize}</span></div>
          <div class="flex justify-between pt-1 font-semibold text-white"><span>COTIZACIÓN</span><span class="text-green-500">$${estimate.toLocaleString()} COP</span></div>
        </div>
        <button onclick="document.getElementById('inquiry-done').remove()" class="w-full py-2.5 px-4 bg-green-500 hover:bg-green-600 text-black font-orbitron text-[10px] font-bold tracking-widest rounded transition-all cursor-pointer text-center">CERRAR</button>
      </div>
    `;
    document.body.appendChild(done);
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }, 2500);
}

// ========================
// NAVIGATION
// ========================
let activeSection = 'INICIO';

function navigateTo(section) {
  activeSection = section;
  document.querySelectorAll('.radar-menu-item').forEach(item => {
    const isActive = item.dataset.section === section;
    item.classList.toggle('bg-cyber-cyan/5', isActive);
    item.classList.toggle('border-l-2', isActive);
    item.classList.toggle('border-cyber-cyan', isActive);
    item.querySelector('.menu-label').classList.toggle('text-cyber-cyan', isActive);
    item.querySelector('.menu-label').classList.toggle('neon-text-cyan', isActive);
    item.querySelector('.menu-label').classList.toggle('text-gray-400', !isActive);
  });
  
  // Show/hide sections
  document.querySelectorAll('.content-section').forEach(sec => {
    sec.style.display = 'none';
  });
  // Map section names to HTML element IDs
  const sectionIdMap = {
    'INICIO': 'section-INICIO',
    'EXPLORAR': 'section-EXPLORAR',
    'PORTAFOLIO': 'section-EXPLORAR',
    'SERVICIOS': 'section-SERVICIOS',
    'ARQUITECTURA': 'section-ARQUITECTURA',
    'DISEÑO GRÁFICO': 'section-DISEÑO-GRÁFICO',
    'VIDEO': 'section-VIDEO',
    'MÚSICA': 'section-MÚSICA',
    'OTROS': 'section-OTROS'
  };
  
  const targetId = sectionIdMap[section] || ('section-' + section.replace(/\s/g, '-'));
  const target = document.getElementById(targetId);
  if (target) {
    target.style.display = '';
    target.classList.remove('fade-in');
    void target.offsetWidth;
    target.classList.add('fade-in');
  }
  
  // Rebuild piano if music section
  if (section === 'MÚSICA') {
    setTimeout(() => { buildPiano(); buildTrackList(); }, 100);
  }
  // Rebuild carousel if inicio
  if (section === 'INICIO') {
    setTimeout(buildCarousel, 100);
  }
  // Rebuild portfolio grid if explorar
  if (section === 'EXPLORAR' || section === 'PORTAFOLIO') {
    setTimeout(renderPortfolioGrid, 100);
  }
  // Close mobile menu
  const mobileMenu = document.getElementById('mobile-menu');
  if (mobileMenu) mobileMenu.classList.add('hidden');
  
  // Play beep
  playBeep(1200, 0.15, 'sine');
  setTimeout(() => playBeep(1800, 0.1, 'sine'), 50);
  
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ========================
// SEARCH
// ========================
function handleSearch(query) {
  const results = document.getElementById('search-results');
  if (!results) return;
  
  if (!query.trim()) {
    results.classList.add('hidden');
    return;
  }
  
  const q = query.toLowerCase();
  const filtered = PORTFOLIO_PROJECTS.filter(p =>
    p.title.toLowerCase().includes(q) ||
    p.category.toLowerCase().includes(q) ||
    p.description.toLowerCase().includes(q) ||
    p.tags.some(t => t.toLowerCase().includes(q))
  );
  
  results.classList.remove('hidden');
  results.innerHTML = filtered.length > 0
    ? filtered.map(p => `
        <div class="p-3 hover:bg-cyber-cyan/10 flex items-center gap-3 cursor-pointer transition-colors group text-left" onclick="openProjectDetail('${p.id}'); document.getElementById('search-input').value=''; document.getElementById('search-results').classList.add('hidden');">
          <img src="${p.imageUrl}" alt="${p.title}" class="w-10 h-10 object-cover rounded border border-white/10 group-hover:border-cyber-cyan/30 transition-colors shrink-0" />
          <div class="flex-grow min-w-0">
            <div class="flex items-center justify-between gap-2">
              <span class="font-orbitron text-[10px] font-bold text-white group-hover:text-cyber-cyan transition-colors truncate">${p.title}</span>
              <span class="font-mono text-[7px] bg-cyber-blue/80 text-white px-1 py-0.5 rounded-sm shrink-0">${p.category}</span>
            </div>
            <p class="font-sans text-[9px] text-gray-400 truncate mt-0.5">${p.description}</p>
          </div>
        </div>
      `).join('')
    : '<div class="p-4 text-center font-mono text-[10px] text-gray-500">NO SE ENCONTRARON COINCIDENCIAS</div>';
}

// ========================
// MOBILE MENU
// ========================
function toggleMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.toggle('hidden');
}

// ========================
// GLITCH EFFECT
// ========================
function initGlitchEffect() {
  const layer = document.getElementById('glitch-layer');
  if (!layer) return;
  
  document.addEventListener('mousemove', (e) => {
    layer.classList.add('active');
    setTimeout(() => layer.classList.remove('active'), 150);
  });
}

// ========================
// RADAR MENU BEEP
// ========================
function radarHover() { playBeep(900, 0.08, 'triangle'); }

// ========================
// CHAT ASSISTANT
// ========================
let chatMessages = [
  { sender:'assistant', text:'Saludos. Soy el holograma de enlace del estudio CREATIVO DIGITAL. ¿En qué puedo orientarle hoy?', time:'LIVE' }
];

function toggleChat() {
  const panel = document.getElementById('chat-panel');
  if (panel) panel.classList.toggle('hidden');
}

function sendChat(text) {
  if (!text || !text.trim()) return;
  const input = document.getElementById('chat-input');
  if (input) input.value = '';
  
  const now = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  chatMessages.push({ sender:'user', text: text.trim(), time: now });
  
  // Auto reply
  setTimeout(() => {
    let reply = 'Módulo no codificado. Consultas disponibles: "enfoque", "arquitectura", "diseño", "cotizador" o "contacto".';
    const c = text.toLowerCase();
    if (c.includes('enfoque') || c.includes('concepto') || c.includes('filosofia') || c.includes('biblia') || c.includes('cita')) {
      reply = 'Nuestro norte metodológico: 1 Tesalonicenses 5:21 "Examinadlo todo; retened lo bueno".';
    } else if (c.includes('arquitectura') || c.includes('casa') || c.includes('lote')) {
      reply = 'Diseñamos obras contemporáneas en BIM LOD400. Revise la sección ARQUITECTURA.';
    } else if (c.includes('diseño') || c.includes('marca') || c.includes('branding') || c.includes('grafico')) {
      reply = 'Ofrecemos branding premium holístico e identidades corporativas pulidas.';
    } else if (c.includes('cotizador') || c.includes('precio') || c.includes('costo') || c.includes('iniciar')) {
      reply = 'Use el botón "INICIAR PROYECTO" de color cian para simular el costo.';
    } else if (c.includes('contacto') || c.includes('correo')) {
      reply = 'Escríbanos a: daibelelcreativo1@gmail.com';
    }
    chatMessages.push({ sender:'assistant', text: reply, time:'SYNCED' });
    renderChatMessages();
  }, 1000);
  
  renderChatMessages();
}

function renderChatMessages() {
  const container = document.getElementById('chat-messages');
  if (!container) return;
  container.innerHTML = chatMessages.map(m => `
    <div class="max-w-[85%] rounded p-2.5 ${m.sender === 'user' ? 'bg-cyber-blue/20 border border-cyber-blue/30 text-white self-end rounded-tr-none' : 'bg-white/[0.01] border border-white/5 text-gray-300 self-start rounded-tl-none'}">
      <p class="leading-relaxed tracking-wide text-[11px] whitespace-pre-wrap">${m.text}</p>
      <span class="font-mono text-[6px] text-gray-600 block mt-1.5 text-right uppercase tracking-wider">${m.time}</span>
    </div>
  `).join('');
  container.scrollTop = container.scrollHeight;
}

// ========================
// PORTFOLIO GRID
// ========================
let activeFilter = 'TODOS';

function filterPortfolio(category) {
  activeFilter = category;
  renderPortfolioGrid();
  
  // Update filter button styles
  document.querySelectorAll('[id^="filter-"]').forEach(btn => {
    const btnCat = btn.id.replace('filter-', '');
    if (btnCat === category) {
      btn.className = 'px-3 py-1.5 font-mono text-[10px] tracking-widest transition-all duration-300 border rounded cursor-pointer bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan neon-text-cyan';
    } else {
      btn.className = 'px-3 py-1.5 font-mono text-[10px] tracking-widest transition-all duration-300 border rounded cursor-pointer border-white/5 bg-cyber-dark text-gray-400 hover:text-white hover:border-white/20';
    }
  });
}

function renderPortfolioGrid() {
  const grid = document.getElementById('portfolio-grid');
  if (!grid) return;
  
  const filtered = activeFilter === 'TODOS' 
    ? PORTFOLIO_PROJECTS 
    : PORTFOLIO_PROJECTS.filter(p => p.category === activeFilter);
  
  grid.innerHTML = filtered.map(p => `
    <div onclick="openProjectDetail('${p.id}')" class="group relative h-40 rounded-lg overflow-hidden border border-white/5 hover:border-cyber-cyan/30 transition-all duration-300 bg-cyber-dark cursor-pointer shadow-lg flex flex-col justify-end">
      <img src="${p.imageUrl}" alt="${p.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-[0.55] group-hover:brightness-50" />
      <div class="absolute inset-0 border border-cyber-cyan/0 group-hover:border-cyber-cyan/20 rounded-lg pointer-events-none transition-colors duration-300 z-10"></div>
      <div class="absolute top-2 right-2 font-mono text-[7px] text-gray-500 z-10 opacity-0 group-hover:opacity-100 transition-opacity">SRC_ID: ${p.id.toUpperCase()}</div>
      <div class="relative z-10 p-3 text-left">
        <span class="font-mono text-[7px] bg-cyber-blue/80 text-white px-1 py-0.5 rounded-sm inline-block mb-1.5 font-semibold">${p.category}</span>
        <h3 class="font-orbitron text-xs font-bold tracking-wider text-white mb-0.5 group-hover:text-cyber-cyan transition-colors">${p.title}</h3>
        <div class="flex items-center gap-1.5">
          <span class="w-1.5 h-1.5 rounded-full bg-cyber-cyan/80"></span>
          <p class="font-mono text-[8px] text-gray-400">${p.location}</p>
        </div>
      </div>
    </div>
  `).join('');
}

// ========================
// INIT
// ========================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  initGlitchEffect();
  buildCarousel();
  renderPortfolioGrid();
  navigateTo('INICIO');
  
  // Search input
  const searchInput = document.getElementById('search-input');
  if (searchInput) {
    searchInput.addEventListener('input', (e) => handleSearch(e.target.value));
    document.addEventListener('click', (e) => {
      const results = document.getElementById('search-results');
      const searchBox = document.getElementById('search-container');
      if (results && searchBox && !searchBox.contains(e.target)) {
        results.classList.add('hidden');
      }
    });
  }
  
  // Keyboard shortcut
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeAllViewers();
  });
  
  renderChatMessages();
});
