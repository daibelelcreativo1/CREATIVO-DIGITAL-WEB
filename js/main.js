/* ===== CREATIVO DIGITAL - JS Principal ===== */

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
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start(); osc.stop(ctx.currentTime + dur);
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
function playPianoNote(n) {
  try {
    const ctx = getAudioCtx();
    if (ctx.state === 'suspended') ctx.resume();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(n.freq, ctx.currentTime);
    gain.gain.setValueAtTime(0.25, ctx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + 2);
    osc.connect(gain); gain.connect(ctx.destination);
    osc.start();
    pianoOscillators[n.note] = { osc, gain };
  } catch(e){}
}
function stopPianoNote(n) {
  if (pianoOscillators[n.note]) {
    try {
      pianoOscillators[n.note].gain.gain.exponentialRampToValueAtTime(0.0001, getAudioCtx().currentTime + 0.1);
      pianoOscillators[n.note].osc.stop(getAudioCtx().currentTime + 0.1);
    } catch(e){}
    delete pianoOscillators[n.note];
  }
}
function buildPiano() {
  const container = document.getElementById('piano-keys');
  if (!container) return;
  container.innerHTML = '';
  PIANO_NOTES.filter(n => !n.black).forEach(n => {
    const k = document.createElement('div');
    k.className = 'piano-key-white'; k.dataset.note = n.note;
    k.innerHTML = `<span>${n.note}</span>`;
    attachPianoEvents(k, n);
    container.appendChild(k);
  });
  let wi = 0;
  PIANO_NOTES.forEach(n => {
    if (n.black) {
      const k = document.createElement('div');
      k.className = 'piano-key-black'; k.dataset.note = n.note;
      k.style.left = (wi * 42 - 13) + 'px';
      attachPianoEvents(k, n);
      container.appendChild(k);
    } else { wi++; }
  });
}
function attachPianoEvents(k, n) {
  const p = (e) => { e.preventDefault(); playPianoNote(n); k.classList.add('pressed'); };
  const r = () => { stopPianoNote(n); k.classList.remove('pressed'); };
  k.addEventListener('mousedown', p); k.addEventListener('mouseup', r);
  k.addEventListener('mouseleave', r);
  k.addEventListener('touchstart', p, { passive: false });
  k.addEventListener('touchend', r); k.addEventListener('touchcancel', r);
}

// ========================
// MUSIC PLAYER
// ========================
let currentTrack = null, currentAudio = null, isPlaying = false, trackVolume = 0.8;
function formatTime(s) { if (!isFinite(s)) return '0:00'; return Math.floor(s/60)+':'+String(Math.floor(s%60)).padStart(2,'0'); }
function updatePlayerUI() {
  const bar = document.getElementById('music-player-bar');
  if (!bar) return;
  if (!currentTrack) { bar.style.display = 'none'; return; }
  bar.style.display = '';
  document.getElementById('player-title').textContent = currentTrack.title;
  document.getElementById('player-artist').textContent = currentTrack.artist;
  document.getElementById('player-play-btn').innerHTML = isPlaying ? '<i data-lucide="pause" class="w-4 h-4"></i>' : '<i data-lucide="play" class="w-4 h-4"></i>';
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.querySelectorAll('.track-card').forEach(c => c.classList.toggle('playing', c.dataset.trackId === currentTrack?.id));
}
function updateProgress() {
  if (!currentAudio) return;
  const p = document.getElementById('player-progress-fill');
  const ct = document.getElementById('player-current-time');
  const tt = document.getElementById('player-total-time');
  if (p && currentAudio.duration) p.style.width = (currentAudio.currentTime/currentAudio.duration*100)+'%';
  if (ct) ct.textContent = formatTime(currentAudio.currentTime);
  if (tt && currentAudio.duration) tt.textContent = formatTime(currentAudio.duration);
}
function playTrack(id) {
  const t = MUSIC_TRACKS.find(x => x.id === id);
  if (!t) return;
  // Desbloquear contexto de audio por interacción
  try { const ctx = getAudioCtx(); if (ctx.state === 'suspended') ctx.resume(); } catch(e){}
  if (currentAudio) { try { currentAudio.pause(); currentAudio.removeAttribute('src'); currentAudio.load(); } catch(e){} }
  currentTrack = t;
  currentAudio = new Audio();
  currentAudio.crossOrigin = 'anonymous';
  currentAudio.preload = 'auto';
  currentAudio.src = t.url;
  currentAudio.volume = trackVolume;
  currentAudio.addEventListener('timeupdate', updateProgress);
  currentAudio.addEventListener('loadedmetadata', updateProgress);
  currentAudio.addEventListener('ended', () => { isPlaying = false; updatePlayerUI(); });
  currentAudio.addEventListener('error', () => { isPlaying = false; updatePlayerUI(); });
  currentAudio.play().then(() => { isPlaying = true; updatePlayerUI(); }).catch(e => { console.log('Audio err:', e); isPlaying = false; updatePlayerUI(); });
}
function togglePlay() {
  if (!currentAudio || !currentTrack) { if (MUSIC_TRACKS[0]) playTrack(MUSIC_TRACKS[0].id); return; }
  // Desbloquear contexto de audio
  try { const ctx = getAudioCtx(); if (ctx.state === 'suspended') ctx.resume(); } catch(e){}
  if (isPlaying) { currentAudio.pause(); isPlaying = false; }
  else { currentAudio.play().then(()=>{ isPlaying = true; updatePlayerUI(); }).catch(e=>{ console.log('Play err', e); }); }
  updatePlayerUI();
}
function skipTrack(d) {
  if (!currentTrack) { if (MUSIC_TRACKS[0]) playTrack(MUSIC_TRACKS[0].id); return; }
  const i = MUSIC_TRACKS.findIndex(t => t.id === currentTrack.id);
  playTrack(MUSIC_TRACKS[(i+d+MUSIC_TRACKS.length)%MUSIC_TRACKS.length].id);
}
function setVolume(v) {
  trackVolume = parseFloat(v);
  if (currentAudio) currentAudio.volume = trackVolume;
  const ic = document.getElementById('player-volume-icon');
  if (ic) {
    if (trackVolume === 0) ic.innerHTML = '<i data-lucide="volume-x" class="w-3.5 h-3.5"></i>';
    else if (trackVolume < 0.5) ic.innerHTML = '<i data-lucide="volume-1" class="w-3.5 h-3.5"></i>';
    else ic.innerHTML = '<i data-lucide="volume-2" class="w-3.5 h-3.5"></i>';
    if (typeof lucide !== 'undefined') lucide.createIcons();
  }
}
function seekTrack(e) {
  if (!currentAudio || !currentAudio.duration) return;
  const r = e.currentTarget.getBoundingClientRect();
  const x = e.touches ? e.touches[0].clientX : e.clientX;
  currentAudio.currentTime = Math.max(0, Math.min(1, (x-r.left)/r.width)) * currentAudio.duration;
}
function buildTrackList() {
  const c = document.getElementById('track-list'); if (!c) return;
  c.innerHTML = '';
  MUSIC_TRACKS.forEach(t => {
    const card = document.createElement('div');
    card.className = 'track-card p-2.5 border border-white/5 bg-cyber-dark rounded-lg flex items-center gap-2.5 mb-2';
    card.dataset.trackId = t.id;
    card.innerHTML = `<div class="w-9 h-9 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center shrink-0"><i data-lucide="music" class="w-4 h-4 text-cyber-cyan"></i></div><div class="flex-grow min-w-0"><h4 class="font-orbitron text-[10px] font-bold tracking-wider text-white truncate">${t.title}</h4><p class="font-mono text-[8px] text-gray-500 truncate">${t.artist}</p></div><div class="w-7 h-7 rounded-full bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center shrink-0 text-cyber-cyan"><i data-lucide="play" class="w-3 h-3"></i></div>`;
    card.addEventListener('click', () => playTrack(t.id));
    c.appendChild(card);
  });
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// ========================
// CAROUSEL
// ========================
let carouselIndex = 0, carouselInterval = null;
function goToSlide(i) {
  carouselIndex = i;
  const tr = document.getElementById('carousel-track');
  if (tr) {
    const n = FEATURED_PROJECTS.length;
    i = ((i%n)+n)%n; carouselIndex = i;
    tr.style.transform = `translateX(-${i*100}%)`;
    document.querySelectorAll('.carousel-dot').forEach((d,di) => d.classList.toggle('active', di===i));
  }
}
function nextSlide() { goToSlide(carouselIndex+1); }
function prevSlide() { goToSlide(carouselIndex-1); }
function startCarousel() { stopCarousel(); carouselInterval = setInterval(nextSlide, 3500); }
function stopCarousel() { if (carouselInterval) clearInterval(carouselInterval); }
function buildCarousel() {
  const tr = document.getElementById('carousel-track');
  const dt = document.getElementById('carousel-dots');
  if (!tr || !dt) return;
  tr.innerHTML = '';
  FEATURED_PROJECTS.forEach(p => {
    const s = document.createElement('div');
    s.className = 'carousel-slide';
    s.innerHTML = `<div class="slide-card" onclick="openFullscreenImage('${p.image}')"><img src="${p.image}" alt="${p.title}" loading="lazy" /><div class="slide-overlay"></div><div class="slide-meta"><span class="slide-tag">${p.category}</span><h4 class="slide-title">${p.title}</h4><p class="font-mono text-[8px] text-gray-400 mt-0.5">${p.location}</p></div></div>`;
    tr.appendChild(s);
  });
  dt.innerHTML = '';
  FEATURED_PROJECTS.forEach((_,i) => {
    const d = document.createElement('div');
    d.className = 'carousel-dot'+(i===0?' active':'');
    d.addEventListener('click', () => { goToSlide(i); startCarousel(); });
    dt.appendChild(d);
  });
  startCarousel();
}

// ========================
// FULLSCREEN VIEWERS
// ========================
function openFullscreenImage(url) {
  closeAllViewers();
  const v = document.createElement('div');
  v.className = 'image-viewer-container'; v.id = 'fullscreen-viewer';
  v.innerHTML = `<div class="corner-deco corner-tl"></div><div class="corner-deco corner-tr"></div><div class="corner-deco corner-bl"></div><div class="corner-deco corner-br"></div><div class="hud-label">VIEWER // IMAGE</div><button onclick="closeAllViewers()" class="viewer-close-btn"><i data-lucide="x" class="w-5 h-5"></i></button><img src="${url}" alt="Full" onclick="event.stopPropagation()" />`;
  v.addEventListener('click', closeAllViewers);
  document.body.appendChild(v);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.body.style.overflow = 'hidden';
}
function openFullscreenVideo(url) {
  closeAllViewers();
  // Desbloquear audio context por interacción del usuario
  try { const ctx = getAudioCtx(); if (ctx.state === 'suspended') ctx.resume(); } catch(e){}
  const v = document.createElement('div');
  v.className = 'video-viewer-container'; v.id = 'fullscreen-viewer';
  v.innerHTML = `<div class="corner-deco corner-tl"></div><div class="corner-deco corner-tr"></div><div class="corner-deco corner-bl"></div><div class="corner-deco corner-br"></div><div class="hud-label">VIEWER // VIDEO</div><button onclick="closeAllViewers()" class="viewer-close-btn"><i data-lucide="x" class="w-5 h-5"></i></button><div class="video-frame" onclick="event.stopPropagation()"><video id="viewer-video" controls autoplay loop playsinline preload="auto" crossorigin="anonymous"><source src="${url}" type="video/mp4">Tu navegador no soporta video.</video></div>`;
  v.addEventListener('click', closeAllViewers);
  document.body.appendChild(v);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.body.style.overflow = 'hidden';
  // Forzar reproducción (con fallback muted si el navegador bloquea autoplay)
  const vid = document.getElementById('viewer-video');
  if (vid) {
    const playPromise = vid.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        vid.muted = true;
        vid.play().catch(()=>{});
      });
    }
  }
}
// Reproductor de YouTube con estilo cyberpunk
function openYouTubePlayer(videoId, title) {
  closeAllViewers();
  const v = document.createElement('div');
  v.className = 'video-viewer-container'; v.id = 'fullscreen-viewer';
  v.innerHTML = `<div class="corner-deco corner-tl"></div><div class="corner-deco corner-tr"></div><div class="corner-deco corner-bl"></div><div class="corner-deco corner-br"></div><div class="hud-label">VIEWER // YOUTUBE</div><button onclick="closeAllViewers()" class="viewer-close-btn"><i data-lucide="x" class="w-5 h-5"></i></button><div class="video-frame" onclick="event.stopPropagation()"><div style="position:relative;width:100%;padding-top:56.25%;border:2px solid rgba(0,240,255,0.4);border-radius:6px;box-shadow:0 0 30px rgba(0,240,255,0.2);overflow:hidden;background:#000;"><iframe style="position:absolute;inset:0;width:100%;height:100%;border:0;" src="https://www.youtube-nocookie.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1" title="${title||'YouTube'}" allow="accelerometer;autoplay;clipboard-write;encrypted-media;gyroscope;picture-in-picture" allowfullscreen></iframe></div></div>`;
  v.addEventListener('click', closeAllViewers);
  document.body.appendChild(v);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.body.style.overflow = 'hidden';
}
function closeAllViewers() {
  const v = document.getElementById('fullscreen-viewer');
  if (v) { const vid = v.querySelector('video'); if (vid) { try { vid.pause(); vid.removeAttribute('src'); vid.load(); } catch(e){} } v.remove(); }
  const p = document.getElementById('project-modal'); if (p) p.remove();
  const s = document.getElementById('service-modal'); if (s) s.remove();
  document.body.style.overflow = '';
}

// ========================
// PROJECT DETAIL MODAL
// ========================
function openProjectDetail(id) {
  const p = PORTFOLIO_PROJECTS.find(x => x.id === id); if (!p) return;
  closeAllViewers();
  const m = document.createElement('div');
  m.className = 'modal-overlay fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto';
  m.id = 'project-modal';
  m.innerHTML = `<div class="relative w-full max-w-2xl bg-cyber-dark border border-cyber-cyan/30 rounded-lg overflow-hidden flex flex-col max-h-[90vh] shadow-2xl neon-border-cyan text-left fade-in my-auto"><button onclick="closeAllViewers()" class="viewer-close-btn" style="top:8px;right:8px;"><i data-lucide="x" class="w-4 h-4"></i></button><div class="relative h-44 sm:h-60 w-full overflow-hidden shrink-0 cursor-pointer" onclick="openFullscreenImage('${p.imageUrl}')"><img src="${p.imageUrl}" class="w-full h-full object-cover" /><div class="absolute inset-0 bg-gradient-to-t from-cyber-dark via-cyber-dark/30 to-transparent z-[5]"></div><div class="absolute bottom-4 left-6 z-20"><span class="font-mono text-[8px] bg-cyber-cyan/20 border border-cyber-cyan/30 text-cyber-cyan font-bold px-2 py-0.5 rounded inline-block mb-1.5">${p.category}</span><h3 class="font-orbitron text-base sm:text-xl font-bold tracking-widest text-white">${p.title}</h3></div></div><div class="p-4 sm:p-6 overflow-y-auto space-y-4 text-left"><div class="grid grid-cols-2 gap-4 pb-4 border-b border-white/5 font-mono text-xs"><div><span class="text-gray-500 block mb-0.5 text-[10px]">UBICACIÓN</span><span class="text-gray-300 font-semibold">${p.location}</span></div><div><span class="text-gray-500 block mb-0.5 text-[10px]">AÑO</span><span class="text-gray-300 font-semibold">${p.year}</span></div></div><div><h4 class="font-orbitron font-semibold text-xs tracking-wider text-cyber-cyan mb-2">ESPECIFICACIONES</h4><p class="font-sans text-xs text-gray-300 leading-relaxed">${p.description}</p></div><div><h4 class="font-orbitron font-semibold text-xs tracking-wider text-cyber-cyan mb-2">CRITERIOS</h4><div class="flex flex-wrap gap-2">${p.tags.map(t => `<span class="px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/25 text-cyber-blue font-mono text-[8.5px] rounded-sm">${t}</span>`).join('')}</div></div><div class="pt-4 border-t border-white/5 flex flex-col sm:flex-row gap-3"><button onclick="closeAllViewers(); openInquiryModal();" class="flex-grow py-2.5 px-4 bg-cyber-cyan hover:bg-cyber-cyan/90 text-black font-orbitron text-[10px] font-bold tracking-widest rounded cursor-pointer">SOLICITAR PRESUPUESTO</button><button onclick="closeAllViewers()" class="py-2.5 px-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400 hover:text-white font-mono text-[10px] rounded cursor-pointer">REGRESAR</button></div></div></div>`;
  m.addEventListener('click', e => { if (e.target === m) closeAllViewers(); });
  document.body.appendChild(m);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.body.style.overflow = 'hidden';
}

// ========================
// SERVICE DETAIL MODAL
// ========================
function openServiceDetail(id) {
  const s = PRIMARY_SERVICES.find(x => x.id === id); if (!s) return;
  closeAllViewers();
  const m = document.createElement('div');
  m.className = 'modal-overlay fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto';
  m.id = 'service-modal';
  m.innerHTML = `<div class="relative w-full max-w-md bg-cyber-dark border border-cyber-cyan/30 rounded-lg shadow-2xl p-5 sm:p-6 text-left neon-border-cyan my-auto"><button onclick="closeAllViewers()" class="viewer-close-btn" style="top:8px;right:8px;width:32px;height:32px;"><i data-lucide="x" class="w-4 h-4"></i></button><div class="flex items-center gap-3 border-b border-white/5 pb-4 mb-4"><div class="w-11 h-11 bg-cyber-cyan/10 border border-cyber-cyan/20 rounded flex items-center justify-center shrink-0"><i data-lucide="${s.iconName}" class="w-5 h-5 text-cyber-cyan"></i></div><div><h3 class="font-orbitron text-sm font-black tracking-widest text-white">${s.title}</h3><span class="font-mono text-[8px] text-cyber-cyan block uppercase">DISCIPLINA</span></div></div><p class="font-sans text-xs text-gray-300 leading-relaxed mb-5">${s.longDescription}</p><div class="space-y-2 mb-6"><h4 class="font-orbitron text-[9px] font-bold tracking-widest text-cyber-cyan uppercase">PROTOCOLOS</h4><div class="grid grid-cols-1 gap-2">${s.benefits.map(b => `<div class="flex items-center gap-2 font-mono text-[9px] text-gray-400"><i data-lucide="check" class="w-3.5 h-3.5 text-cyber-cyan shrink-0"></i><span>${b}</span></div>`).join('')}</div></div><button onclick="closeAllViewers(); navigateTo('EXPLORAR');" class="w-full py-2.5 bg-cyber-cyan hover:bg-cyber-cyan/90 text-black font-orbitron text-[10px] font-bold tracking-widest rounded cursor-pointer">VER PROYECTOS</button></div>`;
  m.addEventListener('click', e => { if (e.target === m) closeAllViewers(); });
  document.body.appendChild(m);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.body.style.overflow = 'hidden';
}

// ========================
// INQUIRY MODAL (COTIZACIÓN DEL PROYECTO)
// ========================
let inquiryStep = 1, inquiryData = { name:'', email:'', discipline:'ARQUITECTURA', metricSize:0, comment:'' };
function openInquiryModal() { inquiryStep = 1; inquiryData = { name:'', email:'', discipline:'ARQUITECTURA', metricSize:0, comment:'' }; renderInquiryModal(); }
function renderInquiryModal() {
  document.getElementById('inquiry-modal')?.remove();
  const m = document.createElement('div');
  m.className = 'modal-overlay fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto';
  m.id = 'inquiry-modal';
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryData.email);
  const cur = CONFIG.currency || 'USD';
  let step = '';
  if (inquiryStep === 1) {
    step = `<div class="space-y-4"><p class="font-sans text-xs text-gray-400">Proporcione sus datos de contacto.</p><div><label class="block font-mono text-[9px] text-gray-500 uppercase mb-1">Nombre *</label><input type="text" id="inq-name" placeholder="EJ: Lenix Plex" value="${inquiryData.name}" class="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-white focus:border-cyber-cyan outline-none" /></div><div><label class="block font-mono text-[9px] text-gray-500 uppercase mb-1">Correo *</label><input type="email" id="inq-email" placeholder="EJ: lenixp2999@gmail.com" value="${inquiryData.email}" class="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-white focus:border-cyber-cyan outline-none ${inquiryData.email && !emailValid ? 'border-red-500' : ''}" />${inquiryData.email && !emailValid ? '<p class="email-error">⚠ Correo no válido.</p>' : ''}</div><div><label class="block font-mono text-[9px] text-gray-500 uppercase mb-1">Comentario</label><textarea id="inq-comment" placeholder="Describa su proyecto..." rows="3" class="w-full bg-black border border-white/10 rounded px-3 py-2.5 text-white focus:border-cyber-cyan outline-none resize-none">${inquiryData.comment}</textarea></div></div>`;
  } else if (inquiryStep === 2) {
    step = `<div class="space-y-4"><p class="font-sans text-xs text-gray-400">Seleccione disciplina.</p><div class="grid grid-cols-2 gap-2">${Object.entries(BASE_RATES).map(([k,v]) => `<button type="button" onclick="selectDiscipline('${k}')" class="p-3 border rounded text-left cursor-pointer ${inquiryData.discipline===k?'border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan':'border-white/5 bg-black/40 text-gray-400 hover:text-white'}"><span class="font-orbitron font-bold text-[8.5px] tracking-widest block">${k}</span><span class="font-mono text-[7px] text-gray-500 block mt-0.5">${v.metricLabel}</span></button>`).join('')}</div></div>`;
  } else {
    const r = BASE_RATES[inquiryData.discipline] || { base:0 };
    const est = r.base * inquiryData.metricSize;
    step = `<div class="space-y-4"><div class="p-4 bg-black/60 rounded border border-white/5 flex flex-col gap-3"><div class="flex items-center gap-2 text-cyber-cyan"><i data-lucide="calculator" class="w-4 h-4"></i><span class="font-orbitron font-semibold text-[9px] tracking-widest uppercase">ESTIMADOR</span></div><div><label class="font-mono text-[9px] text-gray-400 flex justify-between mb-1"><span>${r.metricLabel}</span><span class="text-cyber-cyan font-bold">${inquiryData.metricSize}</span></label><input type="range" id="inq-metric" min="0" max="1000" step="1" value="${inquiryData.metricSize}" class="w-full" /></div><div class="flex justify-between items-center border-t border-white/5 pt-2"><span class="font-mono text-[8.5px] text-gray-500">VALOR ESTIMADO</span><span class="font-orbitron text-xs font-black text-cyber-cyan neon-text-cyan">$${est.toLocaleString()} ${cur}</span></div></div></div>`;
  }
  m.innerHTML = `<div class="relative w-full max-w-lg bg-cyber-dark border border-cyber-cyan/30 rounded-lg overflow-hidden shadow-2xl neon-border-cyan text-left fade-in my-auto"><button onclick="closeInquiryModal()" class="viewer-close-btn" style="top:8px;right:8px;width:32px;height:32px;"><i data-lucide="x" class="w-4 h-4"></i></button><div class="h-1 bg-gradient-to-r from-cyber-cyan to-cyber-blue w-full"></div><div class="p-5 sm:p-6 space-y-4"><div class="pb-3 border-b border-white/5"><h3 class="font-orbitron text-sm font-black tracking-widest text-white uppercase">COTIZACIÓN DEL PROYECTO</h3><span class="font-mono text-[8px] text-cyber-cyan block mt-0.5">PLANIFICADOR INTERACTIVO</span></div><div class="flex gap-2 items-center justify-between text-[10px] font-mono text-gray-400"><span>PASO ${inquiryStep} DE 3</span><div class="flex gap-1"><div class="w-6 h-1 rounded ${inquiryStep>=1?'bg-cyber-cyan':'bg-white/10'}"></div><div class="w-6 h-1 rounded ${inquiryStep>=2?'bg-cyber-cyan':'bg-white/10'}"></div><div class="w-6 h-1 rounded ${inquiryStep>=3?'bg-cyber-cyan':'bg-white/10'}"></div></div></div>${step}<div class="pt-4 border-t border-white/5 flex justify-between gap-3">${inquiryStep>1?`<button onclick="goBackInquiry()" class="py-2.5 px-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400 hover:text-white font-mono text-[10px] rounded cursor-pointer">ATRÁS</button>`:`<button onclick="closeInquiryModal()" class="py-2.5 px-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400 hover:text-white font-mono text-[10px] rounded cursor-pointer">CANCELAR</button>`}${inquiryStep<3?`<button onclick="goNextInquiry()" class="py-2.5 px-6 bg-cyber-blue hover:bg-cyber-blue/90 text-white font-orbitron text-[10px] font-bold tracking-widest rounded cursor-pointer">CONTINUAR</button>`:`<button onclick="submitInquiry()" class="py-2.5 px-6 bg-cyber-cyan hover:bg-cyber-cyan/90 text-black font-orbitron text-[10px] font-bold tracking-widest rounded cursor-pointer flex items-center gap-2"><span>ENVIAR</span><i data-lucide="send" class="w-3 h-3"></i></button>`}</div></div></div>`;
  m.addEventListener('click', e => { if (e.target === m) closeInquiryModal(); });
  document.body.appendChild(m);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.body.style.overflow = 'hidden';
  setTimeout(() => {
    document.getElementById('inq-name')?.addEventListener('input', e => inquiryData.name = e.target.value);
    document.getElementById('inq-email')?.addEventListener('input', e => inquiryData.email = e.target.value);
    document.getElementById('inq-comment')?.addEventListener('input', e => inquiryData.comment = e.target.value);
    document.getElementById('inq-metric')?.addEventListener('input', e => { inquiryData.metricSize = parseInt(e.target.value); renderInquiryModal(); });
  }, 50);
}
function selectDiscipline(d) { inquiryData.discipline = d; renderInquiryModal(); }
function goNextInquiry() {
  if (inquiryStep === 1) {
    if (!inquiryData.name.trim()) { alert('Ingrese su nombre.'); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(inquiryData.email)) { alert('Correo no válido.'); return; }
  }
  inquiryStep++; renderInquiryModal();
}
function goBackInquiry() { inquiryStep--; renderInquiryModal(); }
function closeInquiryModal() { document.getElementById('inquiry-modal')?.remove(); document.body.style.overflow=''; }
function submitInquiry() {
  closeInquiryModal();
  const cur = CONFIG.currency || 'USD';
  const r = BASE_RATES[inquiryData.discipline] || { base:0 };
  const est = r.base * inquiryData.metricSize;
  const l = document.createElement('div');
  l.className = 'modal-overlay fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
  l.id = 'inquiry-loading';
  l.innerHTML = `<div class="w-full max-w-sm bg-cyber-dark border-2 border-cyber-cyan/40 p-6 rounded-lg text-center flex flex-col justify-center items-center h-64 space-y-4 neon-border-cyan"><div class="w-12 h-12 border-2 border-dashed border-cyber-cyan rounded-full flex items-center justify-center animate-[spin_1.5s_linear_infinite]"><i data-lucide="upload" class="w-4 h-4 text-cyber-cyan"></i></div><h4 class="font-orbitron font-bold text-xs tracking-widest text-white">ENVIANDO...</h4></div>`;
  document.body.appendChild(l);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  // Construir mensaje
  const messageLines = [
    `*Nueva Cotización - CREATIVO DIGITAL*`,
    ``,
    `*Cliente:* ${inquiryData.name}`,
    `*Correo:* ${inquiryData.email}`,
    `*Disciplina:* ${inquiryData.discipline}`,
    `*Métrica:* ${inquiryData.metricSize}`,
    `*Valor estimado:* $${est.toLocaleString()} ${cur}`,
    inquiryData.comment ? `*Comentario:* ${inquiryData.comment}` : '',
    ``,
    `Enviado desde CREATIVO DIGITAL`
  ].filter(Boolean).join('\n');
  // Abrir WhatsApp y mailto para garantizar recepción
  const waMsg = encodeURIComponent(messageLines);
  const mailSubject = encodeURIComponent(`Cotización - ${inquiryData.discipline} - ${inquiryData.name}`);
  const mailBody = encodeURIComponent(messageLines);
  // Email
  try { window.open(`mailto:${CONFIG.email}?subject=${mailSubject}&body=${mailBody}`, '_blank'); } catch(e){}
  // WhatsApp (se abre automáticamente)
  setTimeout(() => {
    try { window.open(`${CONFIG.socials.whatsapp}?text=${waMsg}`, '_blank'); } catch(e){}
  }, 300);
  setTimeout(() => {
    l.remove();
    const d = document.createElement('div');
    d.className = 'modal-overlay fixed inset-0 z-[9000] flex items-center justify-center p-4 bg-black/85 backdrop-blur-md';
    d.id = 'inquiry-done';
    d.innerHTML = `<div class="w-full max-w-md bg-cyber-dark border border-green-500/40 p-6 rounded-lg text-center flex flex-col justify-center items-center shadow-2xl relative overflow-hidden fade-in my-auto"><div class="absolute top-0 left-0 right-0 h-1 bg-green-500"></div><div class="w-11 h-11 rounded-full bg-green-500/10 border border-green-500/20 flex items-center justify-center mb-4"><i data-lucide="check-circle" class="w-5 h-5 text-green-500"></i></div><h3 class="font-orbitron font-black text-sm tracking-widest text-white mb-1">PROPUESTA ENVIADA</h3><p class="font-sans text-xs text-gray-400 mb-4">Se abrió tu correo y WhatsApp con la solicitud de <span class="text-cyber-cyan font-bold font-mono">${inquiryData.discipline}</span>. ¡Daibel te responderá pronto!</p><div class="w-full bg-black/60 rounded border border-white/5 p-4 text-left font-mono text-[9px] text-gray-400 space-y-1.5 mb-4"><div class="flex justify-between border-b border-white/[0.04] pb-1"><span>CLIENTE</span><span class="text-white font-semibold">${inquiryData.name.toUpperCase()}</span></div><div class="flex justify-between border-b border-white/[0.04] pb-1"><span>CORREO</span><span class="text-white font-semibold">${inquiryData.email}</span></div><div class="flex justify-between border-b border-white/[0.04] pb-1"><span>METRICA</span><span class="text-cyber-cyan font-semibold">${inquiryData.metricSize}</span></div><div class="flex justify-between pt-1 font-semibold text-white"><span>COTIZACIÓN</span><span class="text-green-500">$${est.toLocaleString()} ${cur}</span></div></div><div class="flex gap-2"><a href="${CONFIG.socials.whatsapp}?text=${waMsg}" target="_blank" class="flex-grow py-2.5 px-4 bg-green-500 hover:bg-green-600 text-black font-orbitron text-[10px] font-bold tracking-widest rounded cursor-pointer flex items-center justify-center gap-2"><i data-lucide="message-circle" class="w-3.5 h-3.5"></i><span>WHATSAPP</span></a><a href="mailto:${CONFIG.email}?subject=${mailSubject}&body=${mailBody}" class="flex-grow py-2.5 px-4 bg-cyber-cyan hover:bg-cyber-cyan/90 text-black font-orbitron text-[10px] font-bold tracking-widest rounded cursor-pointer flex items-center justify-center gap-2"><i data-lucide="mail" class="w-3.5 h-3.5"></i><span>EMAIL</span></a></div><button onclick="document.getElementById('inquiry-done').remove(); document.body.style.overflow='';" class="w-full mt-2 py-2 px-4 bg-transparent border border-white/10 hover:border-white/30 text-gray-400 hover:text-white font-mono text-[10px] rounded cursor-pointer">CERRAR</button></div>`;
    document.body.appendChild(d);
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
    const a = item.dataset.section === section;
    item.classList.toggle('bg-cyber-cyan/5', a);
    item.classList.toggle('border-l-2', a);
    item.classList.toggle('border-cyber-cyan', a);
    item.classList.toggle('rounded-r', a);
    const lab = item.querySelector('.menu-label');
    const num = item.querySelector('.menu-num');
    const dot = item.querySelector('.menu-dot');
    if (lab) { lab.classList.toggle('text-cyber-cyan', a); lab.classList.toggle('neon-text-cyan', a); lab.classList.toggle('text-gray-400', !a); }
    if (num) { num.classList.toggle('text-cyber-cyan', a); num.classList.toggle('text-gray-600', !a); }
    if (dot) dot.style.display = a ? '' : 'none';
  });
  moveRadarIndicator(section);
  document.querySelectorAll('.mobile-menu-item').forEach(i => { i.classList.toggle('bg-cyber-cyan/10', i.dataset.section===section); i.classList.toggle('text-cyber-cyan', i.dataset.section===section); });
  document.querySelectorAll('.content-section').forEach(s => s.style.display = 'none');
  const map = { 'INICIO':'section-INICIO','EXPLORAR':'section-EXPLORAR','SERVICIOS':'section-SERVICIOS','ARQUITECTURA':'section-ARQUITECTURA','DISEÑO GRÁFICO':'section-DISEÑO-GRÁFICO','VIDEO':'section-VIDEO','MÚSICA':'section-MÚSICA','OTROS':'section-OTROS' };
  const t = document.getElementById(map[section]);
  if (t) { t.style.display = ''; t.classList.remove('fade-in'); void t.offsetWidth; t.classList.add('fade-in'); }
  if (section === 'MÚSICA') setTimeout(() => { buildPiano(); buildTrackList(); }, 100);
  if (section === 'INICIO') setTimeout(buildCarousel, 100);
  if (section === 'EXPLORAR') setTimeout(renderPortfolioGrid, 100);
  document.getElementById('mobile-menu')?.classList.add('hidden');
  playBeep(1200, 0.15);
  setTimeout(() => playBeep(1800, 0.1), 50);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
function moveRadarIndicator(section) {
  const ind = document.getElementById('radar-indicator');
  if (!ind) return;
  const items = document.querySelectorAll('.radar-menu-item');
  let idx = 0;
  items.forEach((it,i) => { if (it.dataset.section === section) idx = i; });
  ind.style.transform = `translateY(${(idx - (items.length/2 - 0.5)) * 44}px)`;
  ind.style.transition = 'transform 0.4s cubic-bezier(0.4,0,0.2,1)';
}

// ========================
// SEARCH
// ========================
function handleSearch(q) {
  const r = document.getElementById('search-results'); if (!r) return;
  if (!q.trim()) { r.classList.add('hidden'); return; }
  const s = q.toLowerCase();
  const f = PORTFOLIO_PROJECTS.filter(p => p.title.toLowerCase().includes(s) || p.category.toLowerCase().includes(s) || p.description.toLowerCase().includes(s) || p.tags.some(t => t.toLowerCase().includes(s)));
  r.classList.remove('hidden');
  r.innerHTML = f.length ? f.map(p => `<div class="p-3 hover:bg-cyber-cyan/10 flex items-center gap-3 cursor-pointer group text-left" onclick="openProjectDetail('${p.id}'); document.getElementById('search-input').value=''; document.getElementById('search-results').classList.add('hidden');"><img src="${p.imageUrl}" class="w-10 h-10 object-cover rounded border border-white/10 shrink-0" /><div class="flex-grow min-w-0"><div class="flex items-center justify-between gap-2"><span class="font-orbitron text-[10px] font-bold text-white truncate">${p.title}</span><span class="font-mono text-[7px] bg-cyber-blue/80 text-white px-1 py-0.5 rounded shrink-0">${p.category}</span></div><p class="font-sans text-[9px] text-gray-400 truncate mt-0.5">${p.description}</p></div></div>`).join('') : '<div class="p-4 text-center font-mono text-[10px] text-gray-500">SIN RESULTADOS</div>';
}
function toggleMobileMenu() { document.getElementById('mobile-menu')?.classList.toggle('hidden'); }

// ========================
// GLITCH + RADAR HOVER
// ========================
function initGlitchEffect() {
  const l = document.getElementById('glitch-layer'); if (!l) return;
  let t = null;
  document.addEventListener('mousemove', () => {
    if (t) return;
    t = setTimeout(() => { l.classList.add('active'); setTimeout(() => l.classList.remove('active'), 150); t = null; }, 100);
  });
}
function radarHover() { playBeep(900, 0.08, 'triangle'); }

// ========================
// CHAT IA (inteligente, basado en toda la info del sitio)
// ========================
let chatMessages = [{ sender:'assistant', text:'¡Hola! 👋 Soy CREATIVO IA, el asistente del estudio de Daibel El Creativo. Puedo ayudarte a cotizar un proyecto, pedir un render 3D, un modelo arquitectónico, diseño de marca, video y mucho más. ¿Qué necesitas crear hoy?', time:'NOW' }];
function toggleChat() { document.getElementById('chat-panel')?.classList.toggle('hidden'); }

// Base de conocimiento del sitio (toda la info)
function getKnowledgeBase() {
  return {
    servicios: PRIMARY_SERVICES.map(s => `• ${s.title}: ${s.description}`).join('\n'),
    proyectos: PORTFOLIO_PROJECTS.map(p => `• ${p.title} (${p.category}) - ${p.location}`).join('\n'),
    versiculo: '"Examinadlo todo; retened lo bueno." - 1 Tesalonicenses 5:21',
    contacto: `📧 Email: ${CONFIG.email}\n📱 WhatsApp: ${CONFIG.whatsapp}\n📸 Instagram: @daibelelcreativo\n🎬 YouTube: @daibelelcreativo`,
    cotizacion: 'Para cotizar usa el botón "INICIAR PROYECTO" o "COTIZAR". El estimador es interactivo: eliges disciplina, ajustas la métrica (desde 0) y obtienes el valor en USD. También puedo abrirlo por ti.',
    musica: `En la sección MÚSICA hay ${MUSIC_TRACKS.length} pistas y un piano digital interactivo (toca las teclas). Las pistas se reproducen al hacer clic.`,
    video: `En VIDEO hay ${VIDEOS_LIST.length} producciones cinematográficas. Se abren en pantalla completa al hacer clic.`,
    otros: `En OTROS hay contenido variado: ${OTROS_ITEMS.length} recursos entre videos de YouTube, enlaces a redes sociales, muestras de audio y galería de imágenes.`
  };
}

// Sistema de respuestas inteligente con detección de intenciones
function aiReply(userText) {
  const k = getKnowledgeBase();
  const t = userText.toLowerCase().trim();
  
  // Detectar solicitudes de acción específicas (cotización, render, modelo, etc.)
  if (t.match(/cotiz|presupuesto|cuanto|precio|cuesta|valor|costo/)) {
    setTimeout(() => { if (!document.getElementById('inquiry-modal') && !document.getElementById('inquiry-loading') && !document.getElementById('inquiry-done')) openInquiryModal(); }, 800);
    return '💰 ¡Perfecto! Te abro el COTIZADOR DEL PROYECTO. Es un proceso de 3 pasos:\n1️⃣ Tus datos de contacto\n2️⃣ Seleccionas la disciplina\n3️⃣ Ajustas la métrica y ves el valor en USD\nLa propuesta se enviará a daibelelcreativo1@gmail.com. ¿Listo?';
  }
  
  if (t.match(/render|3d|visualizaci|fotorreal|unreal|v-ray|vray/)) {
    setTimeout(() => navigateTo('DISEÑO GRÁFICO'), 800);
    return '🎮 ¡Excelente elección! Los RENDERS 3D fotorrealistas son una de nuestras fortalezas. Trabajamos con Unreal Engine 5 y V-Ray para visualizaciones de altísima calidad. Te llevo a la galería de DISEÑO GRÁFICO donde verás ejemplos como CATHEDRAL RENDER y CO-WORKING MATRIX. ¿Quieres cotizar uno?';
  }
  
  if (t.match(/modelo|arquitect|casa|edificio|obra|planos|bim|espacio/)) {
    setTimeout(() => navigateTo('ARQUITECTURA'), 800);
    return '🏗️ ¡Genial! En ARQUITECTURA diseñamos espacios bioclimáticos sostenibles con modelado BIM LOD 400. Te llevo a la galería donde verás proyectos como TORRE CELESTE y CASA AEROCAFÉ. ¿Quieres una cotización o viabilidad para tu proyecto?';
  }
  
  if (t.match(/marca|branding|logo|identidad|dise.o gr.fico|tipograf|packaging/)) {
    setTimeout(() => navigateTo('DISEÑO GRÁFICO'), 800);
    return '🎨 ¡Perfecto! Creamos IDENTIDADES VISUALES completas: branding, tipografía exclusiva, manuales de marca y packaging ecológico. Te llevo a la galería con ejemplos como IDENTIDAD ALPHA y NEXUS BRANDING. ¿Quieres diseñar tu marca?';
  }
  
  if (t.match(/video|cine|cinematogr|motion|animaci|audiovisual|edici/)) {
    setTimeout(() => navigateTo('VIDEO'), 800);
    return '🎬 ¡Genial! Producimos contenido audiovisual cinematográfico en 4K HDR con color grading ACES. Te llevo a la sección VIDEO donde verás producciones como CINEMÁTICA BRUTALISTA y SINFONÍA DE ACERO. ¿Quieres iniciar un proyecto de video?';
  }
  
  if (t.match(/música|musica|audio|sonido|canci|piano|composici|foley|dolby/)) {
    setTimeout(() => navigateTo('MÚSICA'), 800);
    return '🎵 ¡Excelente! En MÚSICA ofrecemos composiciones originales, Foley, mezcla Dolby y diseño de logo sonoro. También hay un piano digital interactivo y una playlist. Te llevo a la sección. ¿Quieres cotizar una composición?';
  }
  
  // Información general
  if (t.match(/servicio|ofrecen|hacen|trabajan|que hacen/)) {
    return `Nuestros servicios principales:\n${k.servicios}\n\n¿Te interesa alguno en particular? Puedo cotizarlo o mostrarte ejemplos.`;
  }
  
  if (t.match(/proyecto|portafolio|ejemplo|trabajo|galer|obra/)) {
    setTimeout(() => navigateTo('EXPLORAR'), 800);
    return `Estos son algunos de nuestros proyectos:\n${k.proyectos}\n\nTe llevo a EXPLORAR para que veas la galería completa con filtros por categoría.`;
  }
  
  if (t.match(/versicul|biblia|dios|fe|crist|tesalonic/)) {
    return `📜 Nuestro versículo guía:\n${k.versiculo}\n\nReflejamos fe, excelencia y discernimiento en cada proyecto creativo. "Examinadlo todo" = revisamos cada detalle con rigor.`;
  }
  
  if (t.match(/contacto|correo|email|hablar|mensaje|whatsapp|llamar|tel|fono/)) {
    return `📞 Puedes contactarnos por:\n${k.contacto}\n\n¿Quieres que te abra WhatsApp o inicies una cotización por email?`;
  }
  
  if (t.match(/daibel|qui.n eres|quien eres|que eres|bot|asistente|tu nombre/)) {
    return '🤖 Soy CREATIVO IA, el asistente virtual inteligente del estudio creativo de Daibel El Creativo. Conozco toda la info del sitio: servicios, proyectos, cotización, versículo, contacto y más. Estoy aquí para ayudarte a crear tu próximo proyecto. ¿Qué quieres hacer?';
  }
  
  if (t.match(/otro|recurso|archivo|link|youtube|instagram/)) {
    setTimeout(() => navigateTo('OTROS'), 800);
    return `📦 En OTROS encontrarás contenido variado:\n${k.otros}\n\nTe llevo a la sección para que lo explores.`;
  }
  
  // Saludos
  if (t.match(/hola|buenas|hey|saludos|hi|buenos d|buenas tard/)) {
    return '¡Hola! 😊 Soy CREATIVO IA. Puedo ayudarte a: cotizar un proyecto 💰, pedir un render 3D 🎮, un modelo arquitectónico 🏗️, diseño de marca 🎨, un video 🎬 o música 🎵. ¿Qué necesitas?';
  }
  
  if (t.match(/gracias|thanks|genial|perfecto|excelente|buen|nice/)) {
    return '¡Con gusto! 😊 ¿Algo más en lo que pueda ayudarte? Puedo cotizar, mostrar proyectos o llevarte a cualquier sección.';
  }
  
  if (t.match(/chao|adios|bye|hasta luego|nos vemos|gracias por todo/)) {
    return '¡Hasta pronto! 🚀 Que la creatividad te acompañe. Recuerda: daibelelcreativo1@gmail.com para cualquier proyecto.';
  }
  
  if (t.match(/ayuda|help|que puedo|opciones|menu/)) {
    return 'Puedo ayudarte con:\n💰 Cotizar un proyecto\n🎮 Pedir un render 3D\n🏗️ Solicitar un modelo arquitectónico\n🎨 Diseñar una marca\n🎬 Crear un video\n🎵 Componer música\n📞 Darte info de contacto\n📖 Hablarte del versículo\n\nDime qué necesitas.';
  }
  
  // Respuesta por defecto: intenta entender y sugiere
  return `Entiendo "${userText}". 🤔 Soy CREATIVO IA y conozco todo del estudio. Puedo:\n• Cotizar un proyecto (di "cotización")\n• Mostrarte renders 3D (di "render")\n• Hablar de arquitectura (di "modelo")\n• Diseñar una marca (di "marca")\n• Crear un video (di "video")\n• Componer música (di "música")\n• Darte contacto (di "contacto")\n\n¿Qué te gustaría hacer?`;
}

function sendChat(text) {
  if (!text || !text.trim()) return;
  const inp = document.getElementById('chat-input'); if (inp) inp.value = '';
  const now = new Date().toLocaleTimeString([], { hour:'2-digit', minute:'2-digit' });
  chatMessages.push({ sender:'user', text: text.trim(), time: now });
  renderChatMessages();
  // Mostrar indicador "escribiendo..."
  chatMessages.push({ sender:'assistant', text: '...', time: '...', typing: true });
  renderChatMessages();
  setTimeout(() => {
    // Eliminar indicador de escritura
    chatMessages = chatMessages.filter(m => !m.typing);
    chatMessages.push({ sender:'assistant', text: aiReply(text), time:'IA' });
    renderChatMessages();
  }, 700 + Math.random() * 500);
}
function renderChatMessages() {
  const c = document.getElementById('chat-messages'); if (!c) return;
  c.innerHTML = chatMessages.map(m => `<div class="max-w-[85%] rounded p-2.5 ${m.sender==='user'?'bg-cyber-blue/20 border border-cyber-blue/30 text-white self-end rounded-tr-none':'bg-white/[0.01] border border-white/5 text-gray-300 self-start rounded-tl-none'}"><p class="leading-relaxed text-[11px] whitespace-pre-wrap ${m.typing?'animate-pulse text-cyber-cyan':''}">${m.text}</p><span class="font-mono text-[6px] text-gray-600 block mt-1.5 text-right uppercase">${m.time}</span></div>`).join('');
  c.scrollTop = c.scrollHeight;
}

// ========================
// RENDER DYNAMIC CONTENT
// ========================
let activeFilter = 'TODOS';
function filterPortfolio(cat) {
  activeFilter = cat;
  renderPortfolioGrid();
  document.querySelectorAll('[id^="filter-"]').forEach(b => {
    const bc = b.id.replace('filter-','');
    b.className = bc===cat ? 'px-2.5 py-1 font-mono text-[9px] tracking-widest transition-all border rounded cursor-pointer bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan neon-text-cyan shrink-0' : 'px-2.5 py-1 font-mono text-[9px] tracking-widest transition-all border rounded cursor-pointer border-white/5 bg-cyber-dark text-gray-400 hover:text-white shrink-0';
  });
}
function renderPortfolioGrid() {
  const g = document.getElementById('portfolio-grid'); if (!g) return;
  const f = activeFilter==='TODOS' ? PORTFOLIO_PROJECTS : PORTFOLIO_PROJECTS.filter(p => p.category===activeFilter);
  g.innerHTML = f.map(p => `<div onclick="openProjectDetail('${p.id}')" class="thumb-card group h-36 border border-white/5 hover:border-cyber-cyan/30 transition-all bg-cyber-dark cursor-pointer shadow-lg"><img src="${p.imageUrl}" loading="lazy" /><div class="thumb-overlay"></div><div class="thumb-content"><span class="font-mono text-[7px] bg-cyber-blue/80 text-white px-1.5 py-0.5 rounded-sm inline-block mb-1 font-semibold">${p.category}</span><h3 class="font-orbitron text-[11px] font-bold tracking-wider text-white group-hover:text-cyber-cyan">${p.title}</h3><p class="font-mono text-[8px] text-gray-400 mt-0.5">${p.location}</p></div></div>`).join('');
}

function renderRadarMenu() {
  const c = document.getElementById('radar-menu-list'); if (!c) return;
  c.innerHTML = '';
  SECTIONS.forEach((s, i) => {
    const b = document.createElement('button');
    b.dataset.section = s;
    b.onclick = () => navigateTo(s);
    b.onmouseenter = radarHover;
    b.className = 'radar-menu-item group flex items-center justify-start py-1 text-left transition-all duration-300 relative cursor-pointer';
    if (i === 0) b.className += ' bg-cyber-cyan/5 border-l-2 border-cyber-cyan rounded-r';
    const numClass = i === 0 ? 'text-cyber-cyan' : 'text-gray-600 group-hover:text-cyber-cyan/70';
    const labClass = i === 0 ? 'text-cyber-cyan neon-text-cyan' : 'text-gray-400 group-hover:text-white';
    b.innerHTML = `<div class="flex items-center gap-2"><span class="menu-num font-mono text-[10px] tracking-wider ${numClass}">${String(i+1).padStart(2,'0')}</span><span class="menu-label font-orbitron text-xs font-semibold tracking-widest ${labClass}">${s}</span><span class="menu-dot w-1.5 h-1.5 rounded-full bg-cyber-cyan" style="display:${i===0?'':'none'};"></span></div>`;
    c.appendChild(b);
  });
}

function renderFilters() {
  const cats = ['TODOS', ...new Set(PORTFOLIO_PROJECTS.map(p => p.category))];
  const fb = document.getElementById('filter-bar'); if (!fb) return;
  fb.innerHTML = cats.map(c => `<button id="filter-${c}" onclick="filterPortfolio('${c}')" class="px-2.5 py-1 font-mono text-[9px] tracking-widest transition-all border rounded cursor-pointer ${c==='TODOS'?'bg-cyber-cyan/10 border-cyber-cyan text-cyber-cyan neon-text-cyan':'border-white/5 bg-cyber-dark text-gray-400 hover:text-white'} shrink-0">${c}</button>`).join('');
  activeFilter = 'TODOS';
}

function renderStats() {
  const c = document.getElementById('stats-list'); if (!c) return;
  const cats = ['TODOS', ...new Set(PORTFOLIO_PROJECTS.map(p => p.category))];
  c.innerHTML = cats.map(cat => {
    const count = cat==='TODOS' ? PORTFOLIO_PROJECTS.length : PORTFOLIO_PROJECTS.filter(p => p.category===cat).length;
    return `<div class="flex justify-between"><span class="font-mono text-gray-400">${cat}</span><span class="font-orbitron text-cyber-cyan font-bold">${count}</span></div>`;
  }).join('');
}

function renderServices() {
  const c = document.getElementById('services-grid'); if (!c) return;
  c.innerHTML = PRIMARY_SERVICES.map((s,i) => `<div onclick="openServiceDetail('${s.id}')" class="group relative p-4 bg-gradient-to-b from-cyber-dark to-black border border-white/5 hover:border-cyber-cyan/40 transition-all rounded-lg cursor-pointer flex flex-col gap-2 shadow-lg"><div class="w-10 h-10 rounded border border-white/10 flex items-center justify-center bg-white/[0.01]"><i data-lucide="${s.iconName}" class="w-5 h-5 text-cyber-cyan"></i></div><h3 class="font-orbitron text-[11px] font-bold tracking-widest text-white group-hover:text-cyber-cyan">${s.title}</h3><p class="font-sans text-[10px] text-gray-400 leading-relaxed">${s.description}</p></div>`).join('');
  if (typeof lucide !== 'undefined') lucide.createIcons();
}

function renderGalleries() {
  // Arquitectura
  const arq = document.getElementById('arquitectura-grid');
  if (arq) arq.innerHTML = ARQUITECTURA_ITEMS.map((it,i) => `<div class="md:col-span-${it.span} thumb-card ${it.big?'h-[260px] md:h-[320px]':'h-[150px]'} cursor-pointer" onclick="openFullscreenImage('${it.src}')"><img src="${it.src}" loading="lazy" /><div class="thumb-overlay"></div><div class="thumb-content ${it.big?'p-4':'p-2'}">${it.big&&it.subtitle?`<span class="font-mono text-[8px] text-cyber-cyan font-bold tracking-wider block mb-1">${it.subtitle}</span>`:''}<span class="font-mono text-[7px] bg-cyber-blue/80 px-1 py-0.5 rounded text-white">${it.tag}</span><h4 class="font-orbitron ${it.big?'text-base':'text-[9px]'} font-bold tracking-widest text-white mt-1">${it.title}</h4></div></div>`).join('');

  // Diseño
  const dis = document.getElementById('diseno-grid');
  if (dis) dis.innerHTML = DISENO_ITEMS.map((it,i) => `<div class="md:col-span-${it.span} thumb-card ${it.big?'h-[260px] md:h-[320px]':'h-[150px]'} cursor-pointer" onclick="openFullscreenImage('${it.src}')"><img src="${it.src}" loading="lazy" /><div class="thumb-overlay"></div><div class="thumb-content ${it.big?'p-4':'p-2'}">${it.big&&it.subtitle?`<span class="font-mono text-[8px] text-cyber-cyan font-bold tracking-wider block mb-1">${it.subtitle}</span>`:''}<span class="font-mono text-[7px] bg-cyber-blue/80 px-1 py-0.5 rounded text-white">${it.tag}</span><h4 class="font-orbitron ${it.big?'text-base':'text-[9px]'} font-bold tracking-widest text-white mt-1">${it.title}</h4></div></div>`).join('');

  // Video
  const vid = document.getElementById('video-grid');
  if (vid) vid.innerHTML = VIDEOS_LIST.map(v => `<div onclick="openFullscreenVideo('${v.url}')" class="thumb-card group h-44 cursor-pointer relative"><img src="${v.cover}" loading="lazy" /><div class="thumb-overlay"></div><div class="absolute top-2 right-2 w-9 h-9 rounded-full bg-cyber-cyan/20 border border-cyber-cyan/30 flex items-center justify-center text-cyber-cyan z-10"><i data-lucide="play" class="w-4 h-4 fill-current"></i></div><div class="thumb-content"><span class="font-mono text-[7px] text-cyber-cyan bg-cyber-cyan/10 px-1.5 py-0.5 rounded inline-block mb-1">${v.duration}</span><h4 class="font-orbitron font-bold text-[10px] text-white tracking-widest">${v.title}</h4></div></div>`).join('');

  // OTROS (multiformato)
  const otr = document.getElementById('otros-grid');
  if (otr) otr.innerHTML = OTROS_ITEMS.map(it => {
    if (it.type === 'youtube') {
      const thumb = `https://img.youtube.com/vi/${it.youtubeId}/hqdefault.jpg`;
      return `<div onclick="openYouTubePlayer('${it.youtubeId}', '${it.title}')" class="group p-4 rounded-lg border border-white/5 bg-cyber-dark hover:border-cyber-cyan/30 cursor-pointer flex gap-3 items-center transition-all"><div class="w-20 h-14 rounded overflow-hidden shrink-0 border border-cyber-cyan/20 relative"><img src="${thumb}" class="w-full h-full object-cover" /><div class="absolute inset-0 flex items-center justify-center bg-black/30"><i data-lucide="play" class="w-5 h-5 text-white fill-white"></i></div></div><div class="flex-grow min-w-0"><h4 class="font-orbitron font-bold text-[10px] tracking-widest text-white truncate">${it.title}</h4><p class="font-mono text-[8px] text-gray-500 truncate">${it.desc||''}</p><span class="font-mono text-[7px] text-red-500">YOUTUBE</span></div></div>`;
    }
    if (it.type === 'link') {
      return `<a href="${it.url}" target="_blank" class="group p-4 rounded-lg border border-white/5 bg-cyber-dark hover:border-cyber-cyan/30 cursor-pointer flex gap-3 items-center transition-all"><div class="w-12 h-12 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center shrink-0"><i data-lucide="external-link" class="w-5 h-5 text-cyber-cyan"></i></div><div class="flex-grow min-w-0"><h4 class="font-orbitron font-bold text-[10px] tracking-widest text-white truncate">${it.title}</h4><p class="font-mono text-[8px] text-gray-500 truncate">${it.desc||it.url}</p><span class="font-mono text-[7px] text-cyber-blue">LINK</span></div></a>`;
    }
    if (it.type === 'video') {
      return `<div onclick="openFullscreenVideo('${it.src}')" class="group p-4 rounded-lg border border-white/5 bg-cyber-dark hover:border-cyber-cyan/30 cursor-pointer flex gap-3 items-center transition-all"><div class="w-12 h-12 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center shrink-0"><i data-lucide="video" class="w-5 h-5 text-cyber-cyan"></i></div><div class="flex-grow min-w-0"><h4 class="font-orbitron font-bold text-[10px] tracking-widest text-white truncate">${it.title}</h4><p class="font-mono text-[8px] text-gray-500 truncate">${it.desc||''}</p><span class="font-mono text-[7px] text-cyber-cyan">VIDEO</span></div></div>`;
    }
    if (it.type === 'audio') {
      return `<div onclick="playExternalAudio('${it.src}', '${it.title}')" class="group p-4 rounded-lg border border-white/5 bg-cyber-dark hover:border-cyber-cyan/30 cursor-pointer flex gap-3 items-center transition-all"><div class="w-12 h-12 rounded bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center shrink-0"><i data-lucide="music" class="w-5 h-5 text-cyber-cyan"></i></div><div class="flex-grow min-w-0"><h4 class="font-orbitron font-bold text-[10px] tracking-widest text-white truncate">${it.title}</h4><p class="font-mono text-[8px] text-gray-500 truncate">${it.desc||''}</p><span class="font-mono text-[7px] text-cyber-blue">AUDIO</span></div></div>`;
    }
    // image
    return `<div onclick="openFullscreenImage('${it.src}')" class="group p-2 rounded-lg border border-white/5 bg-cyber-dark hover:border-cyber-cyan/30 cursor-pointer flex gap-3 items-center transition-all"><div class="w-20 h-14 rounded overflow-hidden shrink-0 border border-white/10"><img src="${it.src}" class="w-full h-full object-cover" /></div><div class="flex-grow min-w-0"><h4 class="font-orbitron font-bold text-[10px] tracking-widest text-white truncate">${it.title}</h4><p class="font-mono text-[8px] text-gray-500 truncate">${it.desc||''}</p><span class="font-mono text-[7px] text-cyber-cyan">IMAGEN</span></div></div>`;
  }).join('');

  if (typeof lucide !== 'undefined') lucide.createIcons();
}

// Reproductor externo de audio (en OTROS) - visor fullscreen
let extAudio = null;
function playExternalAudio(url, title) {
  closeAllViewers();
  // Desbloquear contexto de audio
  try { const ctx = getAudioCtx(); if (ctx.state === 'suspended') ctx.resume(); } catch(e){}
  if (extAudio) { try { extAudio.pause(); extAudio.removeAttribute('src'); extAudio.load(); } catch(e){} }
  extAudio = new Audio();
  extAudio.crossOrigin = 'anonymous';
  extAudio.preload = 'auto';
  extAudio.src = url;
  extAudio.volume = 0.8;
  // Mostrar reproductor de audio fullscreen estilo cyberpunk
  const v = document.createElement('div');
  v.className = 'video-viewer-container'; v.id = 'fullscreen-viewer';
  v.innerHTML = `<div class="corner-deco corner-tl"></div><div class="corner-deco corner-tr"></div><div class="corner-deco corner-bl"></div><div class="corner-deco corner-br"></div><div class="hud-label">VIEWER // AUDIO</div><button onclick="closeAllViewers()" class="viewer-close-btn"><i data-lucide="x" class="w-5 h-5"></i></button><div class="video-frame" onclick="event.stopPropagation()" style="max-width:500px;text-align:center;"><div class="w-32 h-32 mx-auto mb-6 rounded-full bg-cyber-cyan/10 border-2 border-cyber-cyan/40 flex items-center justify-center neon-border-cyan"><i data-lucide="music" class="w-12 h-12 text-cyber-cyan"></i></div><h3 class="font-orbitron text-base font-black tracking-widest text-white mb-2">${title}</h3><p class="font-mono text-[10px] text-cyber-cyan mb-6">REPRODUCIENDO AUDIO</p><audio id="ext-audio-el" controls autoplay loop style="width:100%;max-width:400px;border:2px solid rgba(0,240,255,0.4);border-radius:8px;outline:none;"></audio></div>`;
  v.addEventListener('click', closeAllViewers);
  document.body.appendChild(v);
  if (typeof lucide !== 'undefined') lucide.createIcons();
  document.body.style.overflow = 'hidden';
  // Conectar el audio y reproducir
  const audioEl = document.getElementById('ext-audio-el');
  if (audioEl) {
    audioEl.src = url;
    audioEl.volume = 0.8;
    const playPromise = audioEl.play();
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        audioEl.muted = true;
        audioEl.play().catch(()=>{});
      });
    }
  }
}

// ========================
// INIT
// ========================
document.addEventListener('DOMContentLoaded', () => {
  if (typeof lucide !== 'undefined') lucide.createIcons();
  initGlitchEffect();
  initCustomCursor();
  renderRadarMenu();
  renderFilters();
  renderStats();
  renderServices();
  renderGalleries();
  buildCarousel();
  renderPortfolioGrid();
  navigateTo('INICIO');

  const si = document.getElementById('search-input');
  if (si) {
    si.addEventListener('input', e => handleSearch(e.target.value));
    document.addEventListener('click', e => {
      const r = document.getElementById('search-results');
      const sb = document.getElementById('search-container');
      if (r && sb && !sb.contains(e.target)) r.classList.add('hidden');
    });
  }
  document.addEventListener('keydown', e => { if (e.key==='Escape') closeAllViewers(); });
  renderChatMessages();
});

// ========================
// CUSTOM CURSOR (Λ invertida + dispersión al click)
// ========================
function initCustomCursor() {
  // Solo en dispositivos con puntero fino (no táctil)
  if (window.matchMedia('(pointer: coarse)').matches) return;

  const cursor = document.getElementById('js-cursor');
  if (!cursor) return;

  // Seguimiento del mouse
  window.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });

  // Hover: agrandar cursor sobre elementos interactivos
  const hoverSelector = 'a, button, input, select, [onclick], [role="button"], .js-cursor-hover';
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest(hoverSelector)) cursor.classList.add('hover');
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest(hoverSelector)) cursor.classList.remove('hover');
  });

  // Efecto de dispersión al hacer click
  document.addEventListener('click', (e) => {
    const particleCount = 10;
    for (let i = 0; i < particleCount; i++) {
      const particle = document.createElement('div');
      particle.classList.add('cursor-particle');
      particle.style.left = e.clientX + 'px';
      particle.style.top = e.clientY + 'px';
      const angle = (i / particleCount) * Math.PI * 2 + (Math.random() * 0.4);
      const distance = 25 + Math.random() * 35;
      particle.style.setProperty('--mx', `${Math.cos(angle) * distance}px`);
      particle.style.setProperty('--my', `${Math.sin(angle) * distance}px`);
      document.body.appendChild(particle);
      particle.addEventListener('animationend', () => particle.remove());
    }
  });
}
