// Local Images mapping (using relative paths for the static version)
const cyberSculpture = './img/cyber_sculpture_1781381865496.jpg';
const luxuryVilla = './img/luxury_villa_1781381880840.jpg';
const designMockup = './img/design_mockup_1781381899975.jpg';

// Projects Data
const PORTFOLIO_PROJECTS = [
  {
    id: 'p1',
    title: 'TORRE CELESTE',
    category: 'ARQUITECTURA',
    imageUrl: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80',
    description: 'Complejo residencial y comercial inteligente de 45 pisos con jardines verticales, optimización bioclimática pasiva y fachada cinética que reduce la incidencia solar directa.',
    tags: ['Sostenible', 'Bioclimática', 'Fachada Paramétrica', 'BIM'],
    location: 'Medellín, COL',
    year: '2025'
  },
  {
    id: 'p2',
    title: 'CASA AEROCAFÉ',
    category: 'ARQUITECTURA',
    imageUrl: luxuryVilla,
    description: 'Villa contemporánea de un solo nivel ensamblada en madera laminada (GLT) y concreto visto, mimetizándose con los campos cafeteros gracias a cubiertas verdes extensivas.',
    tags: ['Madera Laminada', 'Cubierta Verde', 'Paisajismo', 'Lujo-Sostenible'],
    location: 'Manizales, COL',
    year: '2024'
  },
  {
    id: 'p3',
    title: 'CO-WORKING MATRIX',
    category: 'DISEÑO 3D',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80',
    description: 'Visualización y simulación fotorrealista en Unreal Engine 5 de oficinas colaborativas de alta tecnología, preparadas para visitas interactivas mediante realidad virtual.',
    tags: ['Render 3D', 'Unreal Engine 5', 'Hologramas', 'Interiorismo'],
    location: 'Metaverso',
    year: '2025'
  },
  {
    id: 'p4',
    title: 'IDENTIDAD ALPHA',
    category: 'DISEÑO GRÁFICO',
    imageUrl: designMockup,
    description: 'Manual de identidad visual corporativa completo, branding tipográfico a medida y diseño de empaques eco-responsables para la startup líder en computación cuántica AlphaQ.',
    tags: ['Branding', 'Tipografía', 'Packaging', 'Vectorial'],
    location: 'Bogotá, COL',
    year: '2025'
  },
  {
    id: 'p5',
    title: 'CATHEDRAL RENDER',
    category: 'DISEÑO 3D',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80',
    description: 'Representación conceptual volumétrica de una catedral futurista que utiliza principios de geometría sagrada y estructuras tejidas en filigrana metálica impresa en 3D.',
    tags: ['Geo-computacional', '3D Print Design', 'V-Ray', 'Concept Art'],
    location: 'París, FRA',
    year: '2024'
  },
  {
    id: 'p6',
    title: 'NEXUS BRANDING',
    category: 'DISEÑO GRÁFICO',
    imageUrl: 'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=700&q=80',
    description: 'Reconstrucción de marca global para el holding de tecnología Nexus, destacando un isotipo minimalista basado en nudos moleculares y un sistema de color de alta visibilidad.',
    tags: ['Rebranding', 'Design System', 'UI/UX Guideline', 'Corporativo'],
    location: 'Miami, USA',
    year: '2025'
  },
  {
    id: 'p7',
    title: 'CORTOMETRAJE SENSIS',
    category: 'VIDEO',
    imageUrl: 'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80',
    description: 'Dirección de arte, cinematografía y post-producción audiovisual para cortometraje experiencial sobre la interacción de los sentidos bajo entornos arquitectónicos brutales.',
    tags: ['Edición', 'Dirección de Arte', 'Color Grading', 'Audiovisual'],
    location: 'Cali, COL',
    year: '2024'
  },
  {
    id: 'p8',
    title: 'ARTE GENERATIVO SOLIS',
    category: 'OTROS',
    imageUrl: 'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=700&q=80',
    description: 'Piezas de criptoarte matemático generadas mediante algoritmos p5.js que describen las turbulencias gravitacionales de estrellas de neutrones, expuesto en festivales digitales.',
    tags: ['Generativo', 'Creative Coding', 'NFT', 'WebGL'],
    location: 'Tokio, JPN',
    year: '2025'
  }
];

// Service Data
const PRIMARY_SERVICES = [
  { id: 's1', title: 'ARQUITECTURA', description: 'Diseño de espacios funcionales, bioclimáticos y excepcionales.', longDescription: 'Planificación integral de proyectos que balancea estética audaz, eficiencia energética pasiva, sostenibilidad certificada (LEED Edge) y optimización estructural avanzada mediante flujos BIM integrales.', iconName: 'building-2', benefits: ['Modelado BIM LOD 400', 'Diseño Pasivo/Bioclimático', 'Coordinación de Ingenierías', 'Permisos & Viabilidad'], projectsCount: 18 },
  { id: 's2', title: 'DISEÑO GRÁFICO', description: 'Identidades visuales sofisticadas que comunican y conectan.', longDescription: 'Estudios exhaustivos de semiótica visual para diseñar marcas atemporales, sistemas tipográficos hechos a medida, papelerías corporativas pulidas y empaques ecológicos que dominan la presencia del mercado.', iconName: 'palette', benefits: ['Identidad Corporativa Completa', 'Diseño Tipográfico Digital', 'Maquetación Editorial Avanzada', 'Packaging Ecológico'], projectsCount: 6 },
  { id: 's3', title: 'VIDEO', description: 'Producción y postproducción audiovisual cinematográfica de alto impacto.', longDescription: 'Simulación física de la iluminación y texturas de alta gama optimizadas para proyectos inmobiliarios de lujo, recorridos interactivos virtuales impulsados por Unreal Engine 5 y animaciones promocionales cinemáticas.', iconName: 'video', benefits: ['Edición Cinematográfica 4K', 'Color Grading ACES', 'Motion Graphics VFX', 'Entrega Multi-plataforma'], projectsCount: 13 },
  { id: 's4', title: 'MÚSICA', description: 'Composición, sound design y producción musical profesional.', longDescription: 'Auditorías de marca robustas, análisis de competidores, definición de arquetipos psicológicos y composición de identidades sonoras que alinean la comunicación interna y externa para asegurar un posicionamiento distintivo de la empresa.', iconName: 'music', benefits: ['Composición Original', 'Sound Design Foley', 'Masterización Dolby', 'Logo Sonoro Corporativo'], projectsCount: 12 }
];

// Music playlist
const MUSIC_TRACKS = [
  { id: 't1', title: 'NEON DRIFT', artist: 'CREATIVO DIGITAL', duration: '3:42', genre: 'CYBERPUNK AMBIENT', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', cover: 'https://images.unsplash.com/photo-1614149162883-504ce4d13909?auto=format&fit=crop&w=100&q=60' },
  { id: 't2', title: 'SIGNAL BLOOM', artist: 'CREATIVO DIGITAL', duration: '2:58', genre: 'ELECTRONIC', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=100&q=60' },
  { id: 't3', title: 'ARCH PULSE', artist: 'CREATIVO DIGITAL', duration: '4:15', genre: 'SYNTHWAVE', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3', cover: 'https://images.unsplash.com/photo-1598387993281-cecf8b71a8f8?auto=format&fit=crop&w=100&q=60' },
  { id: 't4', title: 'DIGITAL RAIN', artist: 'CREATIVO DIGITAL', duration: '5:03', genre: 'DARK AMBIENT', url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3', cover: 'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?auto=format&fit=crop&w=100&q=60' }
];

// Predefined replies for Chatbot
const BOT_RESPONSES = {
  general: 'Hola, soy el asistente cognitivo de Creativo Digital. Diseñamos espacios de vanguardia, identidades de marca y composiciones audiovisuales. ¿En qué disciplina técnica estás interesado?',
  enfoque: 'Nuestro enfoque combina el rigor de la geometría, diseño bioclimático pasivo (eficiencia energética) e identidades visuales estratégicas. Nos basamos en principios de ordenación analógica y diseño computacional.',
  cotizador: 'Puedes calcular presupuestos indicativos para Arquitectura, Identidad de Marca o Video interactivo haciendo clic en "INICIAR PROYECTO" en la pestaña Portafolio, Servicios o Arquitectura.',
  contacto: 'Puedes contactar directamente al estudio escribiendo al WhatsApp en el menú superior o enviando un correo mediante nuestro planificador de proyectos.',
  default: 'Entendido. Estoy procesando tu consulta sobre el estudio. Puedes preguntar sobre nuestro "enfoque", los "servicios" que ofrecemos o el "contacto".'
};

// Global App State
let state = {
  activeSection: 'INICIO',
  portfolioTab: 'TODOS',
  arquitecturaTab: 'PROYECTOS',
  disenoGraficoTab: 'IDENTIDAD',
  searchQuery: '',
  carouselIdx: 0,
  selectedProject: null,
  fullscreenMedia: null,
  inquiryOpen: false,
  inquiryStep: 1,
  inquiryDiscipline: 'ARQUITECTURA',
  inquiryMetricSize: 150,
  inquiryState: 'IDLE', // IDLE, COMPUTING, DONE
  bottomMenuOpen: false,
  chatOpen: false,
  chatMessages: [
    { sender: 'assistant', text: 'SISTEMA ONLINE. ¿En qué puedo ayudarte hoy?', time: 'AHORA' }
  ],
  currentMusicTrack: null,
  isMusicPlaying: false
};

// Synth sounds helper using Web Audio API
function playSynthBeep(freq, dur, type = 'sine') {
  try {
    const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    const osc = audioCtx.createOscillator();
    const gain = audioCtx.createGain();
    osc.type = type;
    osc.frequency.setValueAtTime(freq, audioCtx.currentTime);
    gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.0001, audioCtx.currentTime + dur);
    osc.connect(gain);
    gain.connect(audioCtx.destination);
    osc.start();
    osc.stop(audioCtx.currentTime + dur);
  } catch (e) {}
}

const handleRadarHover = () => playSynthBeep(900, 0.08, 'triangle');
const handleRadarClick = () => {
  playSynthBeep(1200, 0.15, 'sine');
  setTimeout(() => playSynthBeep(1800, 0.1, 'sine'), 50);
};

// INITIALIZATION
document.addEventListener('DOMContentLoaded', () => {
  // Setup images in views
  setupImageReferences();
  
  // Setup navigation
  setupNavigation();

  // Setup Carousel
  setupFeaturedCarousel();

  // Initialize view displays
  navigateTo(state.activeSection);

  // Setup Portfolio rendering and filters
  setupPortfolio();

  // Setup Services Modals
  setupServices();

  // Setup Sub-tabs for Architecture & Graphic Design
  setupSubTabs();

  // Setup Interactive Piano
  setupPiano();

  // Setup Audio Playlist
  setupMusicPlaylist();

  // Setup Project Inquiry Cotizador Modal
  setupInquiryModal();

  // Setup Chatbot
  setupChatbot();

  // Setup Search bars
  setupSearch();

  // Setup General Modals close button and backdrop click
  setupGeneralModals();

  // Setup Custom Cyberpunk Cursor
  setupCursor();

  // Setup Glitch Background Effect on mouse move
  setupGlitch();

  // Setup Persistent Music Player Bar
  setupMusicPlayerBar();

  // Setup Global image fullscreen click handlers (for any image)
  setupGlobalImageClicks();

  // Lucide Icons Render
  if (window.lucide) {
    window.lucide.createIcons();
  }
});

// Setup images reference paths dynamically
function setupImageReferences() {
  const scImg = document.getElementById('inicio-sculpture-img');
  if (scImg) scImg.src = cyberSculpture;

  const villaImg = document.getElementById('arquitectura-villa-img');
  if (villaImg) villaImg.src = luxuryVilla;

  const brandingImg = document.getElementById('diseno-grafico-mockup-img');
  if (brandingImg) brandingImg.src = designMockup;
}

// NAVIGATION
function setupNavigation() {
  // Radar sidebar menu
  const menuButtons = document.querySelectorAll('#radar-container button');
  menuButtons.forEach((btn, index) => {
    btn.addEventListener('mouseenter', handleRadarHover);
    btn.addEventListener('click', () => {
      handleRadarClick();
      const section = btn.dataset.section;
      navigateTo(section);
    });
  });

  // Mobile submenu dropdown
  const toggleBtn = document.getElementById('header-menu-toggle-btn');
  const submenuList = document.getElementById('header-submenu-list');
  if (toggleBtn && submenuList) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      state.bottomMenuOpen = !state.bottomMenuOpen;
      if (state.bottomMenuOpen) {
        submenuList.classList.remove('hidden');
      } else {
        submenuList.classList.add('hidden');
      }
    });

    // Close when clicking outside
    document.addEventListener('click', () => {
      state.bottomMenuOpen = false;
      submenuList.classList.add('hidden');
    });
  }

  // Header Submenu item clicks
  const submenuButtons = document.querySelectorAll('#header-submenu-list button');
  submenuButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const section = btn.dataset.section;
      navigateTo(section);
      state.bottomMenuOpen = false;
      if (submenuList) submenuList.classList.add('hidden');
    });
  });

  // Logo Brand Home click
  const logoBtn = document.getElementById('logo-brand-btn');
  if (logoBtn) {
    logoBtn.addEventListener('click', () => {
      navigateTo('INICIO');
    });
  }
}

function navigateTo(section) {
  state.activeSection = section;

  // Hide all sections
  document.querySelectorAll('.section-view').forEach(view => {
    view.classList.add('hidden');
  });

  // Show target section
  const targetView = document.getElementById(`${getViewIdBySection(section)}-view`);
  if (targetView) {
    targetView.classList.remove('hidden');
    targetView.classList.add('fade-in');
  }

  // Update Sidebar active state styling
  const menuButtons = document.querySelectorAll('#radar-container button');
  const menuList = Array.from(menuButtons);
  const activeIndex = menuList.findIndex(btn => btn.dataset.section === section);
  
  menuButtons.forEach((btn, idx) => {
    const isActive = btn.dataset.section === section;
    const offsetAmount = Math.sin((idx / (menuButtons.length - 1)) * Math.PI) * 16;
    btn.style.transform = `translateX(${offsetAmount}px)`;

    const textNum = btn.querySelector('.font-mono');
    const textLabel = btn.querySelector('.font-orbitron');
    const glowBg = btn.querySelector('.bg-cyber-cyan\\/5');
    const activeDot = btn.querySelector('.bg-cyber-cyan');

    if (isActive) {
      if (textNum) textNum.className = 'font-mono text-[10px] tracking-wider text-cyber-cyan';
      if (textLabel) textLabel.className = 'font-orbitron text-xs font-semibold tracking-widest text-cyber-cyan scale-105 neon-text-cyan';
      if (glowBg) glowBg.classList.remove('pointer-events-none', 'opacity-0');
      if (activeDot) activeDot.classList.remove('hidden');
    } else {
      if (textNum) textNum.className = 'font-mono text-[10px] tracking-wider text-gray-600 group-hover:text-cyber-cyan/70';
      if (textLabel) textLabel.className = 'font-orbitron text-xs font-semibold tracking-widest text-gray-400 group-hover:text-white group-hover:translate-x-1';
      if (glowBg) glowBg.classList.add('pointer-events-none', 'opacity-0');
      if (activeDot) activeDot.classList.add('hidden');
    }
  });

  // Update active indicator positioning
  const indicator = document.querySelector('#radar-container .absolute.left-4');
  if (indicator && activeIndex !== -1) {
    const offsetPos = (activeIndex - menuButtons.length / 2 + 0.5) * 44;
    indicator.style.transform = `translateY(${offsetPos}px)`;
  }

  // Update Mobile Header Active Link highlights
  const submenuItems = document.querySelectorAll('#header-submenu-list button');
  submenuItems.forEach(btn => {
    if (btn.dataset.section === section) {
      btn.className = 'w-full py-1.5 px-3 rounded text-left font-orbitron text-[10px] font-semibold tracking-wider transition-all bg-cyber-cyan/10 text-cyber-cyan';
    } else {
      btn.className = 'w-full py-1.5 px-3 rounded text-left font-orbitron text-[10px] font-semibold tracking-wider transition-all text-gray-400 hover:bg-white/5 hover:text-white';
    }
  });

  // Refresh lucide icons in the view
  if (window.lucide) window.lucide.createIcons();
}

function getViewIdBySection(section) {
  switch (section) {
    case 'INICIO': return 'inicio';
    case 'PORTAFOLIO': return 'portafolio';
    case 'SERVICIOS': return 'servicios';
    case 'ARQUITECTURA': return 'arquitectura';
    case 'DISEÑO GRÁFICO': return 'diseno-grafico';
    case 'VIDEO': return 'video';
    case 'MÚSICA': return 'musica';
    case 'OTROS': return 'otros';
    default: return 'inicio';
  }
}

// INICIO CAROUSEL
function setupFeaturedCarousel() {
  const track = document.getElementById('featured-carousel-track');
  const dots = document.querySelectorAll('.carousel-dot');
  const prevBtn = document.getElementById('carousel-prev');
  const nextBtn = document.getElementById('carousel-next');

  function updateCarousel() {
    if (!track) return;
    track.style.transform = `translateX(-${state.carouselIdx * 25}%)`;
    
    dots.forEach((dot, idx) => {
      if (idx === state.carouselIdx) {
        dot.className = 'carousel-dot w-4 h-1.5 rounded-full bg-cyber-cyan transition-all';
      } else {
        dot.className = 'carousel-dot w-1.5 h-1.5 rounded-full bg-white/20 transition-all';
      }
    });
  }

  // Auto-slide every 3.5s
  let autoSlideTimer = setInterval(() => {
    state.carouselIdx = (state.carouselIdx + 1) % 4;
    updateCarousel();
  }, 3500);

  function resetTimer() {
    clearInterval(autoSlideTimer);
    autoSlideTimer = setInterval(() => {
      state.carouselIdx = (state.carouselIdx + 1) % 4;
      updateCarousel();
    }, 3500);
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      state.carouselIdx = (state.carouselIdx - 1 + 4) % 4;
      updateCarousel();
      resetTimer();
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      state.carouselIdx = (state.carouselIdx + 1) % 4;
      updateCarousel();
      resetTimer();
    });
  }

  dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
      state.carouselIdx = index;
      updateCarousel();
      resetTimer();
    });
  });

  // Carousel card clicks
  const carouselCards = document.querySelectorAll('.carousel-card');
  carouselCards.forEach(card => {
    card.addEventListener('click', () => {
      const category = card.dataset.category;
      if (category === 'ARQUITECTURA') {
        navigateTo('ARQUITECTURA');
      } else if (category === 'DISEÑO GRÁFICO') {
        navigateTo('DISEÑO GRÁFICO');
      } else {
        navigateTo('PORTAFOLIO');
      }
    });
  });
}

// PORTFOLIO
function setupPortfolio() {
  const grid = document.getElementById('portfolio-grid');
  const tabs = document.querySelectorAll('.portfolio-tab');
  
  // Render grid based on filter
  function renderGrid() {
    if (!grid) return;
    
    // Filter active tab + search
    let filtered = PORTFOLIO_PROJECTS;
    if (state.portfolioTab !== 'TODOS') {
      filtered = filtered.filter(p => p.category === state.portfolioTab);
    }
    
    if (state.searchQuery.trim()) {
      const q = state.searchQuery.toLowerCase();
      filtered = filtered.filter(p => {
        return (
          p.title.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some(tag => tag.toLowerCase().includes(q))
        );
      });
    }

    if (filtered.length === 0) {
      grid.innerHTML = `
        <div class="col-span-4 p-8 text-center font-mono text-xs text-gray-500 border border-white/5 bg-black/40 rounded-lg">
          NO SE ENCONTRARON PROYECTOS PARA ESTA BÚSQUEDA
        </div>
      `;
      return;
    }

    grid.innerHTML = filtered.map(proj => `
      <div
        data-id="${proj.id}"
        class="portfolio-project-card group relative h-40 rounded-lg overflow-hidden border border-white/5 hover:border-cyber-cyan/30 transition-all duration-300 bg-cyber-dark cursor-pointer shadow-lg flex flex-col justify-end"
      >
        <img src="${proj.imageUrl}" alt="${proj.title}" class="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 filter brightness-[0.55] group-hover:brightness-50" />
        <div class="absolute inset-0 border border-cyber-cyan/0 group-hover:border-cyber-cyan/20 rounded-lg pointer-events-none transition-colors duration-300 z-10" />
        <div class="absolute top-2 right-2 font-mono text-[7px] text-gray-500 z-10 opacity-0 group-hover:opacity-100 transition-opacity">SRC_ID: ${proj.id.toUpperCase()}</div>
        <div class="relative z-10 p-3 text-left">
          <span class="font-mono text-[7px] bg-cyber-blue/80 text-white px-1 py-0.5 rounded-sm inline-block mb-1.5 font-semibold">${proj.category}</span>
          <h3 class="font-orbitron text-xs font-bold tracking-wider text-white mb-0.5 group-hover:text-cyber-cyan transition-colors">${proj.title}</h3>
          <div class="flex items-center gap-1.5">
            <span class="w-1.5 h-1.5 rounded-full bg-cyber-cyan/80" />
            <p class="font-mono text-[8px] text-gray-400">${proj.location}</p>
          </div>
        </div>
      </div>
    `).join('');

    // Attach click listeners to cards
    document.querySelectorAll('.portfolio-project-card').forEach(card => {
      card.addEventListener('click', () => {
        const id = card.dataset.id;
        const project = PORTFOLIO_PROJECTS.find(p => p.id === id);
        if (project) openProjectModal(project);
      });
    });
  }

  // Category Tab Selection
  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => {
        t.className = 'portfolio-tab px-3 py-1.5 font-mono text-[10px] tracking-widest transition-all duration-300 border border-white/5 bg-cyber-dark text-gray-400 hover:text-white hover:border-white/20 rounded cursor-pointer';
      });
      tab.className = 'portfolio-tab px-3 py-1.5 font-mono text-[10px] tracking-widest transition-all duration-300 border border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan neon-text-cyan rounded cursor-pointer';
      
      state.portfolioTab = tab.dataset.category;
      renderGrid();
    });
  });

  // Initial render
  renderGrid();

  // Global project rendering function so we can re-render during search events
  window.renderPortfolioGrid = renderGrid;
}

// PROJECT DETAILS MODAL
function openProjectModal(project) {
  state.selectedProject = project;
  const modal = document.getElementById('project-detail-modal');
  if (!modal) return;

  // Populate data
  modal.querySelector('h3').innerText = project.title;
  modal.querySelector('span.bg-cyber-cyan\\/20').innerText = project.category;
  modal.querySelector('img').src = project.imageUrl;
  modal.querySelector('.selected-proj-desc').innerText = project.description;
  modal.querySelector('.selected-proj-location').innerText = project.location || '';
  modal.querySelector('.selected-proj-year').innerText = project.year || '';

  // Tags list
  const tagsContainer = modal.querySelector('.selected-proj-tags');
  if (tagsContainer) {
    if (project.tags && project.tags.length > 0) {
      tagsContainer.innerHTML = project.tags.map(t => `
        <span class="px-2 py-1 bg-cyber-blue/10 border border-cyber-blue/25 text-cyber-blue font-mono text-[8.5px] rounded-sm">${t}</span>
      `).join('');
      tagsContainer.parentElement.classList.remove('hidden');
    } else {
      tagsContainer.parentElement.classList.add('hidden');
    }
  }

  // Setup full screen click on image
  const modalImg = modal.querySelector('img');
  if (modalImg) {
    // Remove previous listeners
    const newImg = modalImg.cloneNode(true);
    modalImg.parentNode.replaceChild(newImg, modalImg);
    
    newImg.addEventListener('click', () => {
      openFullscreenMedia('image', project.imageUrl);
    });
  }

  modal.classList.remove('hidden');
}

// SERVICES VIEW
function setupServices() {
  const cards = document.querySelectorAll('.service-card-btn');
  const modal = document.getElementById('service-detail-modal');

  cards.forEach(card => {
    card.addEventListener('click', () => {
      const serviceId = card.dataset.id;
      const service = PRIMARY_SERVICES.find(s => s.id === serviceId);
      if (service && modal) {
        // Populate modal
        modal.querySelector('h3').innerText = service.title;
        modal.querySelector('p').innerText = service.longDescription;
        
        const list = modal.querySelector('.service-benefits-list');
        if (list) {
          list.innerHTML = service.benefits.map(b => `
            <div class="flex items-center gap-2 font-mono text-[9px] text-gray-400">
              <i data-lucide="check" class="w-3.5 h-3.5 text-cyber-cyan"></i>
              <span>${b}</span>
            </div>
          `).join('');
        }
        
        modal.classList.remove('hidden');
        if (window.lucide) window.lucide.createIcons();
      }
    });
  });

  // Modal Service Portfolio button redirect
  const svcProjBtn = document.getElementById('service-view-projects-btn');
  if (svcProjBtn && modal) {
    svcProjBtn.addEventListener('click', () => {
      modal.classList.add('hidden');
      navigateTo('PORTAFOLIO');
    });
  }
}

// SUB-TABS (ARCHITECTURE & GRAPHIC DESIGN)
function setupSubTabs() {
  // Architecture sub tabs
  const archTabs = document.querySelectorAll('.arch-sub-tab');
  archTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      archTabs.forEach(t => t.className = 'arch-sub-tab px-3 py-1 font-mono text-[9.5px] tracking-widest transition-all duration-300 border border-white/5 bg-cyber-dark text-gray-500 hover:text-white hover:border-white/20 rounded cursor-pointer');
      tab.className = 'arch-sub-tab px-3 py-1 font-mono text-[9.5px] tracking-widest transition-all duration-300 border border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan neon-text-cyan rounded cursor-pointer';
      state.arquitecturaTab = tab.dataset.tab;
      
      // Simulate reload animation
      const grid = document.querySelector('#arquitectura-view .grid');
      if (grid) {
        grid.classList.add('opacity-40');
        setTimeout(() => grid.classList.remove('opacity-40'), 150);
      }
    });
  });

  // Graphic Design sub tabs
  const gdTabs = document.querySelectorAll('.gd-sub-tab');
  gdTabs.forEach(tab => {
    tab.addEventListener('click', () => {
      gdTabs.forEach(t => t.className = 'gd-sub-tab px-3 py-1 font-mono text-[9.5px] tracking-widest transition-all duration-300 border border-white/5 bg-cyber-dark text-gray-500 hover:text-white hover:border-white/20 rounded cursor-pointer');
      tab.className = 'gd-sub-tab px-3 py-1 font-mono text-[9.5px] tracking-widest transition-all duration-300 border border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan neon-text-cyan rounded cursor-pointer';
      state.disenoGraficoTab = tab.dataset.tab;

      const grid = document.querySelector('#diseno-grafico-view .grid');
      if (grid) {
        grid.classList.add('opacity-40');
        setTimeout(() => grid.classList.remove('opacity-40'), 150);
      }
    });
  });
}

// PIANO KEYBOARD (WEB AUDIO API)
function setupPiano() {
  const whiteKeys = document.querySelectorAll('.piano-white-key');
  const blackKeys = document.querySelectorAll('.piano-black-key');
  
  let audioCtx = null;
  const activeNodes = {};

  const getAudioCtx = () => {
    if (!audioCtx || audioCtx.state === 'closed') {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
    }
    if (audioCtx.state === 'suspended') {
      audioCtx.resume();
    }
    return audioCtx;
  };

  const playNote = (note, freq) => {
    try {
      const ctx = getAudioCtx();
      if (activeNodes[note]) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      const filter = ctx.createBiquadFilter();
      
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, ctx.currentTime);
      
      filter.type = 'lowpass';
      filter.frequency.setValueAtTime(2400, ctx.currentTime);
      
      gain.gain.setValueAtTime(0, ctx.currentTime);
      gain.gain.linearRampToValueAtTime(0.35, ctx.currentTime + 0.01);
      
      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start();
      
      activeNodes[note] = { osc, gain };
    } catch (e) {}
  };

  const stopNote = (note) => {
    try {
      const ctx = getAudioCtx();
      const nodes = activeNodes[note];
      if (!nodes) return;
      
      nodes.gain.gain.setValueAtTime(nodes.gain.gain.value, ctx.currentTime);
      nodes.gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.35);
      
      const currentOsc = nodes.osc;
      setTimeout(() => {
        try { currentOsc.stop(); } catch(e){}
      }, 400);
      
      delete activeNodes[note];
    } catch (e) {}
  };

  const attachEvents = (keyElement) => {
    const note = keyElement.dataset.note;
    const freq = parseFloat(keyElement.dataset.freq);

    const onStart = (e) => {
      e.preventDefault();
      keyElement.classList.add('pressed');
      playNote(note, freq);
    };

    const onEnd = () => {
      keyElement.classList.remove('pressed');
      stopNote(note);
    };

    keyElement.addEventListener('mousedown', onStart);
    keyElement.addEventListener('mouseup', onEnd);
    keyElement.addEventListener('mouseleave', onEnd);

    // Touch support for mobiles
    keyElement.addEventListener('touchstart', onStart, { passive: false });
    keyElement.addEventListener('touchend', onEnd, { passive: false });
  };

  whiteKeys.forEach(attachEvents);
  blackKeys.forEach(attachEvents);
}

// MUSIC PLAYLIST
function setupMusicPlaylist() {
  const audio = document.getElementById('music-audio-player');
  const tracklistContainer = document.getElementById('music-tracklist');
  const nowPlayingInfo = document.getElementById('music-now-playing-info');
  const waveformIndicator = document.getElementById('music-waveform-indicator');

  if (!tracklistContainer) return;

  function renderPlaylist() {
    tracklistContainer.innerHTML = MUSIC_TRACKS.map(track => {
      const isSelected = state.currentMusicTrack && state.currentMusicTrack.id === track.id;
      const isPlaying = isSelected && state.isMusicPlaying;
      
      return `
        <div
          data-id="${track.id}"
          class="track-item flex items-center gap-3 p-2.5 rounded-lg cursor-pointer transition-all duration-200 group border ${
            isSelected
              ? 'bg-cyber-cyan/10 border-cyber-cyan/30'
              : 'border-transparent hover:bg-white/[0.03] hover:border-white/10'
          }"
        >
          <img src="${track.cover}" alt="${track.title}" class="w-9 h-9 rounded object-cover border border-white/10 shrink-0" />
          <div class="flex-grow min-w-0">
            <div class="font-orbitron text-[10px] font-bold text-white group-hover:text-cyber-cyan transition-colors truncate">${track.title}</div>
            <div class="font-mono text-[8px] text-gray-500">${track.genre}</div>
          </div>
          <span class="font-mono text-[8px] text-gray-500 shrink-0">${track.duration}</span>
          <div class="track-play-btn w-7 h-7 rounded-full border flex items-center justify-center shrink-0 transition-all ${
            isPlaying
              ? 'bg-cyber-cyan border-transparent text-black'
              : 'border-cyber-cyan/30 text-cyber-cyan group-hover:border-cyber-cyan'
          }">
            <i data-lucide="${isPlaying ? 'pause' : 'play'}" class="w-3 h-3"></i>
          </div>
        </div>
      `;
    }).join('');

    // Attach click listeners to tracks
    tracklistContainer.querySelectorAll('.track-item').forEach(item => {
      item.addEventListener('click', () => {
        const id = item.dataset.id;
        const track = MUSIC_TRACKS.find(t => t.id === id);
        if (track) toggleTrack(track);
      });
    });

    if (window.lucide) window.lucide.createIcons();
  }

  function toggleTrack(track) {
    if (!audio) return;
    
    const isSelected = state.currentMusicTrack && state.currentMusicTrack.id === track.id;
    
    if (isSelected) {
      if (state.isMusicPlaying) {
        audio.pause();
        state.isMusicPlaying = false;
      } else {
        audio.play().catch(()=>{});
        state.isMusicPlaying = true;
      }
    } else {
      audio.src = track.url;
      audio.load();
      audio.play().catch(()=>{});
      state.currentMusicTrack = track;
      state.isMusicPlaying = true;
    }

    updateNowPlayingUI();
    renderPlaylist();
  }

  function updateNowPlayingUI() {
    if (!nowPlayingInfo || !waveformIndicator) return;
    
    if (state.currentMusicTrack && state.isMusicPlaying) {
      nowPlayingInfo.innerHTML = `
        <div class="flex gap-0.5">
          <div class="w-0.5 h-3 bg-cyber-cyan rounded-full animate-pulse"></div>
          <div class="w-0.5 h-4 bg-cyber-cyan rounded-full animate-pulse" style="animation-delay: 0.1s"></div>
          <div class="w-0.5 h-5 bg-cyber-cyan rounded-full animate-pulse" style="animation-delay: 0.2s"></div>
        </div>
        <span class="font-mono text-[8px] text-cyber-cyan truncate max-w-[100px]">${state.currentMusicTrack.title}</span>
      `;
      waveformIndicator.classList.remove('hidden');
    } else if (state.currentMusicTrack && !state.isMusicPlaying) {
      nowPlayingInfo.innerHTML = `
        <i data-lucide="pause" class="w-3 h-3 text-gray-500"></i>
        <span class="font-mono text-[8px] text-gray-500 truncate max-w-[100px]">${state.currentMusicTrack.title}</span>
      `;
      waveformIndicator.classList.add('hidden');
    } else {
      nowPlayingInfo.innerHTML = '';
      waveformIndicator.classList.add('hidden');
    }

    if (window.lucide) window.lucide.createIcons();
  }

  if (audio) {
    audio.addEventListener('ended', () => {
      state.isMusicPlaying = false;
      updateNowPlayingUI();
      renderPlaylist();
    });
  }

  renderPlaylist();
}

// INQUIRY MODAL (COTIZADOR)
function setupInquiryModal() {
  const modal = document.getElementById('inquiry-modal');
  const triggerBtns = document.querySelectorAll('.start-inquiry-btn');
  const slider = document.getElementById('inquiry-slider');
  const sliderLabel = document.getElementById('inquiry-slider-val');
  const sliderUnit = document.getElementById('inquiry-slider-unit');
  const form = document.getElementById('inquiry-project-form');

  // Open modal triggers
  triggerBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      openInquiryModal();
    });
  });

  function openInquiryModal() {
    state.inquiryOpen = true;
    state.inquiryStep = 1;
    state.inquiryState = 'IDLE';
    
    // Clear inputs
    const nameInput = document.getElementById('inquiry-name');
    const emailInput = document.getElementById('inquiry-email');
    if (nameInput) nameInput.value = '';
    if (emailInput) emailInput.value = '';
    state.inquiryMetricSize = 150;
    if (slider) slider.value = 150;

    showStep(1);
    modal.classList.remove('hidden');
  }

  // Handle discipline button selections (Step 2)
  const discButtons = document.querySelectorAll('.discipline-select-btn');
  discButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      discButtons.forEach(b => b.className = 'discipline-select-btn p-3 border border-white/5 bg-black/40 text-gray-400 hover:text-white hover:border-white/10 rounded text-left transition-all duration-200 cursor-pointer');
      btn.className = 'discipline-select-btn p-3 border border-cyber-cyan bg-cyber-cyan/10 text-cyber-cyan rounded text-left transition-all duration-200 cursor-pointer';
      
      state.inquiryDiscipline = btn.dataset.discipline;
      updateStep3Label();
    });
  });

  function updateStep3Label() {
    if (!sliderLabel || !sliderUnit) return;
    
    const labels = {
      ARQUITECTURA: 'Área del lote (m²)',
      'DISEÑO GRÁFICO': 'Cantidad de piezas/recursos',
      'DISEÑO 3D': 'Área interior (m²)',
      VIDEO: 'Segundos del video editado',
      MÚSICA: 'Canales sonoros Foley',
      OTROS: 'Nivel del algoritmo (1-10)'
    };
    
    sliderUnit.innerText = labels[state.inquiryDiscipline] || 'Cantidad m²';
    sliderLabel.innerText = state.inquiryMetricSize;
  }

  // Slider change
  if (slider) {
    slider.addEventListener('input', (e) => {
      state.inquiryMetricSize = parseInt(e.target.value);
      if (sliderLabel) sliderLabel.innerText = state.inquiryMetricSize;
    });
  }

  // Step wizard navigation
  function showStep(stepNum) {
    state.inquiryStep = stepNum;
    
    // Toggle displays
    document.querySelectorAll('.inquiry-step-content').forEach((el, idx) => {
      if (idx + 1 === stepNum) {
        el.classList.remove('hidden');
      } else {
        el.classList.add('hidden');
      }
    });

    // Update wizard progress indicator dots
    const dots = document.querySelectorAll('.inquiry-step-dot');
    dots.forEach((dot, idx) => {
      if (idx + 1 <= stepNum) {
        dot.className = 'inquiry-step-dot w-6 h-1 rounded bg-cyber-cyan';
      } else {
        dot.className = 'inquiry-step-dot w-6 h-1 rounded bg-white/10';
      }
    });

    // Step text label indicator
    const stepLabel = document.getElementById('inquiry-step-label-text');
    if (stepLabel) stepLabel.innerText = `PASO ${stepNum} DE 3`;

    // Next/Prev Buttons toggle visibility
    const prevBtn = document.getElementById('inquiry-prev-btn');
    const nextBtn = document.getElementById('inquiry-next-btn');
    const submitBtn = document.getElementById('inquiry-submit-btn');

    if (prevBtn) {
      if (stepNum === 1) prevBtn.classList.add('hidden');
      else prevBtn.classList.remove('hidden');
    }

    if (nextBtn) {
      if (stepNum === 3) nextBtn.classList.add('hidden');
      else nextBtn.classList.remove('hidden');
    }

    if (submitBtn) {
      if (stepNum === 3) submitBtn.classList.remove('hidden');
      else submitBtn.classList.add('hidden');
    }
  }

  // Step navigations click
  const prevBtn = document.getElementById('inquiry-prev-btn');
  const nextBtn = document.getElementById('inquiry-next-btn');

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      if (state.inquiryStep > 1) showStep(state.inquiryStep - 1);
    });
  }

  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      // Validate inputs in step 1
      if (state.inquiryStep === 1) {
        const nameVal = document.getElementById('inquiry-name').value.trim();
        const emailVal = document.getElementById('inquiry-email').value.trim();
        const emailError = document.getElementById('inquiry-email-error');
        
        // Validate real email format
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        
        if (!nameVal || !emailVal) {
          if (emailError) { emailError.classList.remove('hidden'); emailError.textContent = 'Por favor complete su nombre y correo.'; }
          return;
        }
        if (!emailRegex.test(emailVal)) {
          if (emailError) { emailError.classList.remove('hidden'); emailError.textContent = 'Ingrese un correo electrónico válido (e.g. usuario@dominio.com).'; }
          return;
        }
        if (emailError) emailError.classList.add('hidden');
      }
      
      if (state.inquiryStep < 3) showStep(state.inquiryStep + 1);
    });
  }

  // Form submission: computing HUD animations and success screen + mailto
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const formCard = document.getElementById('inquiry-form-card');
      const computingCard = document.getElementById('inquiry-computing-card');
      const successCard = document.getElementById('inquiry-success-card');
      
      if (!formCard || !computingCard || !successCard) return;

      const clientName = document.getElementById('inquiry-name').value.trim();
      const clientEmail = document.getElementById('inquiry-email').value.trim();
      const clientComment = (document.getElementById('inquiry-comment') || {}).value || '';

      // Swap displays: Hide form card, show HUD computing progress bars
      formCard.classList.add('hidden');
      computingCard.classList.remove('hidden');
      
      // Simulate progress load
      const progressBar = document.getElementById('inquiry-computing-progress');
      let progress = 0;
      const interval = setInterval(() => {
        progress += 4;
        if (progressBar) progressBar.style.width = `${progress}%`;
        if (progress >= 100) {
          clearInterval(interval);
          
          // Show Success screen card
          computingCard.classList.add('hidden');
          successCard.classList.remove('hidden');
          
          // Populate success summary fields
          document.getElementById('success-summary-name').innerText = clientName;
          document.getElementById('success-summary-email').innerText = clientEmail;
          document.getElementById('success-summary-discipline').innerText = state.inquiryDiscipline;
          document.getElementById('success-summary-size').innerText = `${state.inquiryMetricSize} unidades`;

          // Send via mailto to studio email
          const subject = encodeURIComponent(`[CREATIVO DIGITAL] Nueva Solicitud de ${clientName}`);
          const body = encodeURIComponent(
            `NUEVA SOLICITUD DE PROYECTO\n` +
            `================================\n` +
            `Nombre: ${clientName}\n` +
            `Correo del Cliente: ${clientEmail}\n` +
            `Disciplina: ${state.inquiryDiscipline}\n` +
            `Métrica: ${state.inquiryMetricSize} unidades\n` +
            `Comentario: ${clientComment || '(sin comentario)'}\n` +
            `================================\n` +
            `Enviado desde: CREATIVO DIGITAL Web`
          );
          // Open default email client
          const mailtoLink = `mailto:daibelelcreativo1@gmail.com?subject=${subject}&body=${body}&reply-to=${encodeURIComponent(clientEmail)}`;
          window.open(mailtoLink, '_blank');
        }
      }, 90);
    });
  }

  // Success Reset/Close button
  const successCloseBtn = document.getElementById('inquiry-success-close-btn');
  if (successCloseBtn) {
    successCloseBtn.addEventListener('click', () => {
      closeInquiryModal();
    });
  }

  function closeInquiryModal() {
    state.inquiryOpen = false;
    if (modal) modal.classList.add('hidden');
    
    // Restore states for cards
    const formCard = document.getElementById('inquiry-form-card');
    const computingCard = document.getElementById('inquiry-computing-card');
    const successCard = document.getElementById('inquiry-success-card');
    
    if (formCard) formCard.classList.remove('hidden');
    if (computingCard) computingCard.classList.add('hidden');
    if (successCard) successCard.classList.add('hidden');
    
    const progressBar = document.getElementById('inquiry-computing-progress');
    if (progressBar) progressBar.style.width = '0%';
  }

  // Expose inquiry modal function globally
  window.openInquiryModal = openInquiryModal;
}

// VIRTUAL ASSISTANT (CHATBOT)
function setupChatbot() {
  const toggleBtn = document.getElementById('chatbot-toggle-btn');
  const chatWindow = document.getElementById('chatbot-window');
  const minimizeBtn = document.getElementById('chatbot-minimize-btn');
  const messagesWrapper = document.getElementById('chatbot-messages-wrapper');
  const chatInput = document.getElementById('chatbot-input');
  const sendBtn = document.getElementById('chatbot-send-btn');
  const chips = document.querySelectorAll('.chatbot-chip-btn');

  if (!toggleBtn || !chatWindow) return;

  // Toggle chat
  toggleBtn.addEventListener('click', () => {
    state.chatOpen = !state.chatOpen;
    if (state.chatOpen) {
      chatWindow.classList.remove('hidden');
      toggleBtn.classList.add('scale-0'); // Hide floating badge icon when open
      scrollToBottom();
    } else {
      chatWindow.classList.add('hidden');
      toggleBtn.classList.remove('scale-0');
    }
  });

  if (minimizeBtn) {
    minimizeBtn.addEventListener('click', () => {
      state.chatOpen = false;
      chatWindow.classList.add('hidden');
      toggleBtn.classList.remove('scale-0');
    });
  }

  // Predefined chip clicks
  chips.forEach(chip => {
    chip.addEventListener('click', () => {
      const text = chip.dataset.query;
      handleUserMessage(text);
    });
  });

  // User input message submissions
  if (sendBtn && chatInput) {
    sendBtn.addEventListener('click', () => {
      const text = chatInput.value.trim();
      if (text) {
        handleUserMessage(text);
        chatInput.value = '';
      }
    });

    chatInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        const text = chatInput.value.trim();
        if (text) {
          handleUserMessage(text);
          chatInput.value = '';
        }
      }
    });
  }

  function handleUserMessage(text) {
    const timeStr = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
    
    // Add user message to state & render
    state.chatMessages.push({ sender: 'user', text: text, time: timeStr });
    renderMessages();
    scrollToBottom();

    // Trigger BOT response with simulation delay
    setTimeout(() => {
      let replyText = BOT_RESPONSES.default;
      const lower = text.toLowerCase();
      
      if (lower.includes('enfoque') || lower.includes('quiénes') || lower.includes('filosofía')) {
        replyText = BOT_RESPONSES.enfoque;
      } else if (lower.includes('cotiza') || lower.includes('presupuesto') || lower.includes('precio')) {
        replyText = BOT_RESPONSES.cotizador;
      } else if (lower.includes('contacto') || lower.includes('correo') || lower.includes('teléfono')) {
        replyText = BOT_RESPONSES.contacto;
      } else if (lower.includes('hola') || lower.includes('buenos')) {
        replyText = BOT_RESPONSES.general;
      }

      state.chatMessages.push({ sender: 'assistant', text: replyText, time: timeStr });
      renderMessages();
      scrollToBottom();
    }, 850);
  }

  function renderMessages() {
    if (!messagesWrapper) return;
    messagesWrapper.innerHTML = state.chatMessages.map(m => {
      const isUser = m.sender === 'user';
      return `
        <div class="max-w-[85%] rounded p-2.5 ${
          isUser
            ? 'bg-cyber-blue/20 border border-cyber-blue/30 text-white self-end rounded-tr-none'
            : 'bg-white/[0.01] border border-white/5 text-gray-300 self-start rounded-tl-none'
        }">
          <p class="leading-relaxed tracking-wide text-[11px] whitespace-pre-wrap">${m.text}</p>
          <span class="font-mono text-[6px] text-gray-600 block mt-1.5 text-right uppercase tracking-wider">${m.time}</span>
        </div>
      `;
    }).join('');
  }

  function scrollToBottom() {
    if (messagesWrapper) {
      messagesWrapper.scrollTop = messagesWrapper.scrollHeight;
    }
  }

  renderMessages();
}

// SEARCH FUNCTIONALITY
function setupSearch() {
  const searchInput = document.querySelector('#search-container-box input');
  const clearSearchBtn = document.querySelector('#search-container-box button');
  const dropdown = document.getElementById('search-results-dropdown');

  if (!searchInput || !dropdown) return;

  function executeSearch(query) {
    state.searchQuery = query;
    
    // Automatically transition to Portafolio View if searching
    if (query.trim() && state.activeSection !== 'PORTAFOLIO') {
      navigateTo('PORTAFOLIO');
    }

    // Update Portafolio grid if it exists
    if (window.renderPortfolioGrid) {
      window.renderPortfolioGrid();
    }

    renderSearchDropdown(query);
  }

  function renderSearchDropdown(query) {
    if (!query.trim()) {
      dropdown.classList.add('hidden');
      return;
    }

    const q = query.toLowerCase();
    const results = PORTFOLIO_PROJECTS.filter(proj => {
      return (
        proj.title.toLowerCase().includes(q) ||
        proj.category.toLowerCase().includes(q) ||
        proj.description.toLowerCase().includes(q) ||
        proj.tags.some(tag => tag.toLowerCase().includes(q))
      );
    });

    if (results.length > 0) {
      dropdown.innerHTML = results.map(proj => `
        <div
          data-id="${proj.id}"
          class="search-dropdown-item p-3 hover:bg-cyber-cyan/10 flex items-center gap-3 cursor-pointer transition-colors group text-left"
        >
          <img src="${proj.imageUrl}" alt="${proj.title}" class="w-10 h-10 object-cover rounded border border-white/10 group-hover:border-cyber-cyan/30 transition-colors shrink-0" />
          <div class="flex-grow min-w-0">
            <div class="flex items-center justify-between gap-2">
              <span class="font-orbitron text-[10px] font-bold text-white group-hover:text-cyber-cyan transition-colors truncate">${proj.title}</span>
              <span class="font-mono text-[7px] bg-cyber-blue/80 text-white px-1 py-0.5 rounded-sm shrink-0">${proj.category}</span>
            </div>
            <p class="font-sans text-[9px] text-gray-400 truncate mt-0.5">${proj.description}</p>
          </div>
        </div>
      `).join('');

      // Dropdown card click events
      dropdown.querySelectorAll('.search-dropdown-item').forEach(item => {
        item.addEventListener('click', () => {
          const id = item.dataset.id;
          const project = PORTFOLIO_PROJECTS.find(p => p.id === id);
          if (project) {
            openProjectModal(project);
            searchInput.value = '';
            dropdown.classList.add('hidden');
            if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
          }
        });
      });

    } else {
      dropdown.innerHTML = `
        <div class="p-4 text-center font-mono text-[10px] text-gray-500">NO SE ENCONTRARON COINCIDENCIAS</div>
      `;
    }

    dropdown.classList.remove('hidden');
  }

  // Listeners
  searchInput.addEventListener('input', (e) => {
    const val = e.target.value;
    if (val) {
      if (clearSearchBtn) clearSearchBtn.classList.remove('hidden');
    } else {
      if (clearSearchBtn) clearSearchBtn.classList.add('hidden');
    }
    executeSearch(val);
  });

  if (clearSearchBtn) {
    clearSearchBtn.addEventListener('click', () => {
      searchInput.value = '';
      clearSearchBtn.classList.add('hidden');
      executeSearch('');
    });
  }

  // Close search dropdown on click outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('#search-container-box')) {
      dropdown.classList.add('hidden');
    }
  });
}

// FULLSCREEN MULTIMEDIA VIEWER MODAL
function openFullscreenMedia(type, url) {
  state.fullscreenMedia = { type, url };
  const modal = document.getElementById('fullscreen-media-modal');
  if (!modal) return;

  const topLabel = modal.querySelector('.fullscreen-mode-label');
  const imgElement = document.getElementById('fullscreen-image-element');
  const vidContainer = document.getElementById('fullscreen-video-container');
  const vidElement = document.getElementById('fullscreen-video-element');

  if (topLabel) {
    topLabel.innerText = type === 'video' ? 'MODE: VIDEO_STREAM' : 'MODE: IMG_RENDER';
  }

  if (type === 'image') {
    if (imgElement) {
      imgElement.src = url;
      imgElement.classList.remove('hidden');
    }
    if (vidContainer) vidContainer.classList.add('hidden');
    if (vidElement) vidElement.pause();
  } else {
    if (imgElement) imgElement.classList.add('hidden');
    if (vidContainer && vidElement) {
      vidElement.src = url;
      vidElement.load();
      vidElement.play().catch(()=>{});
      vidContainer.classList.remove('hidden');
    }
  }

  modal.classList.remove('hidden');
}

// GENERAL MODALS CONTROLS
function setupGeneralModals() {
  // Project detail modal return
  const projectReturnBtn = document.getElementById('project-detail-return-btn');
  const projectInquiryCta = document.getElementById('project-detail-inquiry-btn');
  const projectModal = document.getElementById('project-detail-modal');

  if (projectReturnBtn && projectModal) {
    projectReturnBtn.addEventListener('click', () => {
      projectModal.classList.add('hidden');
      state.selectedProject = null;
    });
  }

  if (projectInquiryCta && projectModal) {
    projectInquiryCta.addEventListener('click', () => {
      projectModal.classList.add('hidden');
      state.selectedProject = null;
      if (window.openInquiryModal) window.openInquiryModal();
    });
  }

  // Click close buttons on all modals
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.modal-backdrop').classList.add('hidden');
      
      // Stop video if fullscreen player closes
      const fsVideo = document.getElementById('fullscreen-video-element');
      if (fsVideo && btn.closest('#fullscreen-media-modal')) {
        fsVideo.pause();
      }
    });
  });

  // Click outside backdrop to close
  document.querySelectorAll('.modal-backdrop').forEach(backdrop => {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) {
        backdrop.classList.add('hidden');
        
        // Stop video if fullscreen player closes
        const fsVideo = document.getElementById('fullscreen-video-element');
        if (fsVideo && backdrop.id === 'fullscreen-media-modal') {
          fsVideo.pause();
        }
      }
    });
  });

  // Services view detail close
  const svcModal = document.getElementById('service-detail-modal');
  if (svcModal) {
    const closeBtn = svcModal.querySelector('button');
    if (closeBtn) {
      closeBtn.addEventListener('click', () => svcModal.classList.add('hidden'));
    }
    svcModal.addEventListener('click', (e) => {
      if (e.target === svcModal) svcModal.classList.add('hidden');
    });
  }

  // Secondary views video clicks
  const videoCards = document.querySelectorAll('.video-card-item');
  videoCards.forEach(card => {
    card.addEventListener('click', () => {
      const videoId = card.dataset.id;
      let videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-neon-light-from-a-tunnel-in-a-futuristic-city-41865-large.mp4';
      if (videoId === 'v2') {
        videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-cyberpunk-city-street-with-neon-lights-at-night-41846-large.mp4';
      } else if (videoId === 'v3') {
        videoUrl = 'https://assets.mixkit.co/videos/preview/mixkit-abstract-laser-lights-background-loop-41855-large.mp4';
      }
      openFullscreenMedia('video', videoUrl);
    });
  });
}

// ============================================================
// CUSTOM CYBERPUNK CURSOR
// ============================================================
function setupCursor() {
  const outer = document.getElementById('cyber-cursor-outer');
  const dot = document.getElementById('cyber-cursor-dot');
  if (!outer || !dot) return;

  let outerX = 0, outerY = 0;
  let targetX = 0, targetY = 0;

  document.addEventListener('mousemove', (e) => {
    targetX = e.clientX;
    targetY = e.clientY;
    dot.style.left = e.clientX + 'px';
    dot.style.top = e.clientY + 'px';
  });

  // Smooth lagging outer ring
  function animateOuter() {
    outerX += (targetX - outerX) * 0.12;
    outerY += (targetY - outerY) * 0.12;
    outer.style.left = outerX + 'px';
    outer.style.top = outerY + 'px';
    requestAnimationFrame(animateOuter);
  }
  animateOuter();

  document.addEventListener('mousedown', () => {
    outer.classList.add('clicking');
    dot.style.transform = 'translate(-50%, -50%) scale(0.6)';
  });
  document.addEventListener('mouseup', () => {
    outer.classList.remove('clicking');
    dot.style.transform = 'translate(-50%, -50%) scale(1)';
  });

  // Hover effect on interactive elements
  document.addEventListener('mouseover', (e) => {
    if (e.target.closest('button, a, [class*="cursor-pointer"], input, textarea, select, label')) {
      outer.classList.add('hovering');
    }
  });
  document.addEventListener('mouseout', (e) => {
    if (e.target.closest('button, a, [class*="cursor-pointer"], input, textarea, select, label')) {
      outer.classList.remove('hovering');
    }
  });
}

// ============================================================
// GLITCH EFFECT ON MOUSE MOVE
// ============================================================
function setupGlitch() {
  const overlay = document.getElementById('glitch-overlay');
  if (!overlay) return;

  let glitchTimer = null;
  let lastMoveTime = 0;

  document.addEventListener('mousemove', (e) => {
    const now = Date.now();
    if (now - lastMoveTime < 60) return;
    lastMoveTime = now;

    // Random chance to glitch on fast mouse movement
    const speed = Math.sqrt(e.movementX ** 2 + e.movementY ** 2);
    if (speed > 18 && Math.random() < 0.3) {
      overlay.classList.add('active');
      clearTimeout(glitchTimer);
      glitchTimer = setTimeout(() => overlay.classList.remove('active'), 120 + Math.random() * 80);
    }
  });
}

// ============================================================
// PERSISTENT MUSIC PLAYER BAR (BOTTOM)
// ============================================================
function setupMusicPlayerBar() {
  const bar = document.getElementById('music-player-bar');
  const audio = document.getElementById('music-audio-player');
  if (!bar || !audio) return;

  const barCover = document.getElementById('player-bar-cover');
  const barTitle = document.getElementById('player-bar-title');
  const barArtist = document.getElementById('player-bar-artist');
  const barPlayPause = document.getElementById('player-bar-playpause');
  const barPlayIcon = document.getElementById('player-bar-play-icon');
  const barPauseIcon = document.getElementById('player-bar-pause-icon');
  const barPrev = document.getElementById('player-bar-prev');
  const barNext = document.getElementById('player-bar-next');
  const barSeek = document.getElementById('player-bar-seek');
  const barVolume = document.getElementById('player-bar-volume');
  const barTimeCurrent = document.getElementById('player-bar-time-current');
  const barTimeTotal = document.getElementById('player-bar-time-total');
  const barClose = document.getElementById('player-bar-close');

  function formatTime(secs) {
    if (isNaN(secs)) return '0:00';
    const m = Math.floor(secs / 60);
    const s = Math.floor(secs % 60).toString().padStart(2, '0');
    return `${m}:${s}`;
  }

  function updateBarUI() {
    const track = state.currentMusicTrack;
    if (!track) { bar.classList.remove('visible'); return; }
    bar.classList.add('visible');
    if (barCover) barCover.src = track.cover || '';
    if (barTitle) barTitle.textContent = track.title;
    if (barArtist) barArtist.textContent = track.artist;

    if (state.isMusicPlaying) {
      if (barPlayIcon) barPlayIcon.classList.add('hidden');
      if (barPauseIcon) barPauseIcon.classList.remove('hidden');
    } else {
      if (barPlayIcon) barPlayIcon.classList.remove('hidden');
      if (barPauseIcon) barPauseIcon.classList.add('hidden');
    }
  }

  audio.addEventListener('timeupdate', () => {
    if (!audio.duration || isNaN(audio.duration)) return;
    const pct = (audio.currentTime / audio.duration) * 100;
    if (barSeek) barSeek.value = pct;
    if (barTimeCurrent) barTimeCurrent.textContent = formatTime(audio.currentTime);
    if (barTimeTotal) barTimeTotal.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('loadedmetadata', () => {
    if (barTimeTotal) barTimeTotal.textContent = formatTime(audio.duration);
  });

  audio.addEventListener('play', updateBarUI);
  audio.addEventListener('pause', () => {
    state.isMusicPlaying = false;
    updateBarUI();
  });

  if (barSeek) {
    barSeek.addEventListener('input', () => {
      if (!audio.duration) return;
      audio.currentTime = (parseFloat(barSeek.value) / 100) * audio.duration;
    });
  }

  if (barVolume) {
    barVolume.value = 0.8;
    audio.volume = 0.8;
    barVolume.addEventListener('input', () => {
      audio.volume = parseFloat(barVolume.value);
    });
  }

  if (barPlayPause) {
    barPlayPause.addEventListener('click', () => {
      if (state.isMusicPlaying) {
        audio.pause();
        state.isMusicPlaying = false;
      } else {
        audio.play().catch(() => {});
        state.isMusicPlaying = true;
      }
      updateBarUI();
      // Re-render playlist if open
      if (window.renderMusicPlaylist) window.renderMusicPlaylist();
    });
  }

  if (barPrev) {
    barPrev.addEventListener('click', () => {
      if (!state.currentMusicTrack) return;
      const idx = MUSIC_TRACKS.findIndex(t => t.id === state.currentMusicTrack.id);
      const prevIdx = (idx - 1 + MUSIC_TRACKS.length) % MUSIC_TRACKS.length;
      playBarTrack(MUSIC_TRACKS[prevIdx]);
    });
  }

  if (barNext) {
    barNext.addEventListener('click', () => {
      if (!state.currentMusicTrack) return;
      const idx = MUSIC_TRACKS.findIndex(t => t.id === state.currentMusicTrack.id);
      const nextIdx = (idx + 1) % MUSIC_TRACKS.length;
      playBarTrack(MUSIC_TRACKS[nextIdx]);
    });
  }

  if (barClose) {
    barClose.addEventListener('click', () => {
      audio.pause();
      state.isMusicPlaying = false;
      state.currentMusicTrack = null;
      bar.classList.remove('visible');
      if (window.renderMusicPlaylist) window.renderMusicPlaylist();
    });
  }

  // Auto play next track
  audio.addEventListener('ended', () => {
    if (!state.currentMusicTrack) return;
    const idx = MUSIC_TRACKS.findIndex(t => t.id === state.currentMusicTrack.id);
    const nextIdx = (idx + 1) % MUSIC_TRACKS.length;
    playBarTrack(MUSIC_TRACKS[nextIdx]);
  });

  window.playBarTrack = function(track) {
    state.currentMusicTrack = track;
    audio.src = track.url;
    audio.load();
    audio.play().catch(() => {});
    state.isMusicPlaying = true;
    updateBarUI();
    if (window.renderMusicPlaylist) window.renderMusicPlaylist();
  };

  window.updateMusicBarUI = updateBarUI;
}

// ============================================================
// GLOBAL IMAGE FULLSCREEN CLICK (any img tag that's clickable)
// ============================================================
function setupGlobalImageClicks() {
  // Carousel cards → open fullscreen image
  document.querySelectorAll('.carousel-card').forEach(card => {
    card.addEventListener('click', () => {
      const imgUrl = card.dataset.img;
      const title = card.dataset.title;
      if (imgUrl) {
        openFullscreenMedia('image', imgUrl);
      } else {
        // Fallback: navigate to section
        const category = card.dataset.category;
        if (category === 'ARQUITECTURA') navigateTo('ARQUITECTURA');
        else if (category === 'DISEÑO GRÁFICO') navigateTo('DISEÑO GRÁFICO');
        else navigateTo('PORTAFOLIO');
      }
    });
  });

  // Arquitectura and other section images with .section-img-clickable class
  document.addEventListener('click', (e) => {
    const img = e.target.closest('img.clickable-fullscreen');
    if (img && img.src) {
      openFullscreenMedia('image', img.src);
    }
  });
}
