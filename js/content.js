/* ============================================================
   CREATIVO DIGITAL - CONTENIDO EDITABLE
   ============================================================
   👉 EDITA AQUÍ TODO EL CONTENIDO DE LA PÁGINA.
   Para añadir más recursos: copia un bloque {...} y agrega uno nuevo.
   Todo se actualiza automáticamente al recargar.
   ============================================================ */

// ===== NAVEGACIÓN =====
const SECTIONS = ['INICIO','EXPLORAR','SERVICIOS','ARQUITECTURA','DISEÑO GRÁFICO','VIDEO','MÚSICA','OTROS'];

// ===== PROYECTOS DEL PORTAFOLIO =====
const PORTFOLIO_PROJECTS = [
  { id:'p1', title:'TORRE CELESTE', category:'ARQUITECTURA', imageUrl:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80', description:'Complejo residencial y comercial inteligente de 45 pisos con jardines verticales, optimización bioclimática pasiva y fachada cinética.', tags:['Sostenible','Bioclimática','BIM'], location:'Medellín, COL', year:'2025' },
  { id:'p2', title:'CASA AEROCAFÉ', category:'ARQUITECTURA', imageUrl:'./img/luxury_villa_1781381880840.jpg', description:'Villa contemporánea de un solo nivel en madera laminada y concreto visto con cubierta verde integrada.', tags:['Madera','Cubierta Verde','Lujo'], location:'Manizales, COL', year:'2024' },
  { id:'p3', title:'CO-WORKING MATRIX', category:'DISEÑO 3D', imageUrl:'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=700&q=80', description:'Visualización fotorrealista en Unreal Engine 5 con iluminación volumétrica avanzada.', tags:['3D','Unreal','VR'], location:'Metaverso', year:'2025' },
  { id:'p4', title:'IDENTIDAD ALPHA', category:'DISEÑO GRÁFICO', imageUrl:'./img/design_mockup_1781381899975.jpg', description:'Manual de identidad visual corporativa completo con tipografía exclusiva y sistema de color.', tags:['Branding','Tipografía','Packaging'], location:'Bogotá, COL', year:'2025' },
  { id:'p5', title:'CATHEDRAL RENDER', category:'DISEÑO 3D', imageUrl:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80', description:'Representación volumétrica de catedral futurista con materiales PBR y render 8K.', tags:['3D','V-Ray','Concept'], location:'París, FRA', year:'2024' },
  { id:'p6', title:'NEXUS BRANDING', category:'DISEÑO GRÁFICO', imageUrl:'https://images.unsplash.com/photo-1611532736597-de2d4265fba3?auto=format&fit=crop&w=700&q=80', description:'Reconstrucción de marca global con nueva narrativa visual y aplicaciones multiplataforma.', tags:['Rebranding','UI/UX'], location:'Miami, USA', year:'2025' },
  { id:'p7', title:'CORTOMETRAJE SENSIS', category:'VIDEO', imageUrl:'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=700&q=80', description:'Dirección de arte y post-producción audiovisual cinematográfica en 4K HDR.', tags:['Edición','Color','Audiovisual'], location:'Cali, COL', year:'2024' },
  { id:'p8', title:'ARTE GENERATIVO SOLIS', category:'OTROS', imageUrl:'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=700&q=80', description:'Criptoarte matemático con algoritmos p5.js y shaders GLSL en tiempo real.', tags:['Generativo','WebGL','NFT'], location:'Tokio, JPN', year:'2025' }
];

// ===== CARRUSEL (Proyectos Destacados) =====
const FEATURED_PROJECTS = [
  { title:'TORRE CELESTE', category:'ARQUITECTURA', location:'Bogotá, COL', image:'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=700&q=80' },
  { title:'CASA AEROCAFÉ', category:'ARQUITECTURA', location:'Manizales, COL', image:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=700&q=80' },
  { title:'DISEÑO 3D SCOPE', category:'DISEÑO 3D', location:'Metaverso', image:'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=700&q=80' },
  { title:'IDENTIDAD ALPHA', category:'DISEÑO GRÁFICO', location:'Mundial', image:'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=700&q=80' }
];

// ===== MÚSICA / AUDIOS =====
// URLs .mp3 directas y estables (SoundHelix - dominio público de demo)
const MUSIC_TRACKS = [
  { id:'t1', title:'Cyber Dawn', artist:'Daibel El Creativo', url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3' },
  { id:'t2', title:'Neon Pulse', artist:'Daibel El Creativo', url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3' },
  { id:'t3', title:'Digital Horizon', artist:'Daibel El Creativo', url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3' },
  { id:'t4', title:'Quantum Beat', artist:'Daibel El Creativo', url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3' },
  { id:'t5', title:'Midnight Circuit', artist:'Daibel El Creativo', url:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-9.mp3' }
];

// ===== VIDEO (archivos .mp4 reales) =====
const VIDEOS_LIST = [
  { id:'v1', title:'CINEMÁTICA BRUTALISTA', duration:'2:34', cover:'https://images.unsplash.com/photo-1536440136628-849c177e76a1?auto=format&fit=crop&w=400&q=80', url:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4' },
  { id:'v2', title:'SINFONÍA DE ACERO', duration:'1:53', cover:'https://images.unsplash.com/photo-1478760329108-5c3ed9d495a0?auto=format&fit=crop&w=400&q=80', url:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4' },
  { id:'v3', title:'ECOS DEL TIEMPO', duration:'0:15', cover:'https://images.unsplash.com/photo-1509198397868-475647b2a1e5?auto=format&fit=crop&w=400&q=80', url:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4' },
  { id:'v4', title:'RECORRIDO VIRTUAL 360°', duration:'3:10', cover:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80', url:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/Sintel.mp4' }
];

// ===== SERVICIOS =====
const PRIMARY_SERVICES = [
  { id:'s1', title:'ARQUITECTURA', description:'Diseño de espacios funcionales, bioclimáticos y excepcionales.', longDescription:'Planificación integral de proyectos que balancea estética audaz, eficiencia energética pasiva, sostenibilidad certificada y optimización estructural avanzada mediante flujos BIM integrales.', iconName:'building-2', benefits:['Modelado BIM LOD 400','Diseño Bioclimático','Coordinación de Ingenierías','Permisos & Viabilidad'] },
  { id:'s2', title:'DISEÑO GRÁFICO', description:'Identidades visuales sofisticadas que comunican y conectan.', longDescription:'Estudios exhaustivos de semiótica visual para diseñar marcas atemporales, sistemas tipográficos, papelerías y empaques ecológicos.', iconName:'palette', benefits:['Identidad Corporativa','Diseño Tipográfico','Editorial','Packaging'] },
  { id:'s3', title:'VIDEO', description:'Producción audiovisual cinematográfica de alta calidad.', longDescription:'Simulación física de iluminación y texturas para proyectos, recorridos VR y animaciones promocionales cinemáticas en 4K HDR.', iconName:'video', benefits:['Edición Profesional','VR','Animación 4K','Color Grading'] },
  { id:'s4', title:'MÚSICA', description:'Composiciones sonoras y diseño de audio profesional.', longDescription:'Composiciones originales, análisis de mercado, definición de arquetipos y manuales de tono de voz de marca con Foley y mezcla Dolby.', iconName:'music', benefits:['Composición Original','Foley','Mezcla Dolby','Logo Sonoro'] }
];

// ===== COTIZADOR =====
const CURRENCY = 'USD';
const BASE_RATES = {
  ARQUITECTURA:   { base:0, metricLabel:'Área del lote (m²)' },
  'DISEÑO GRÁFICO':{ base:0, metricLabel:'Cantidad de piezas' },
  VIDEO:          { base:0, metricLabel:'Segundos de video' },
  MÚSICA:         { base:0, metricLabel:'Canales sonoros' },
  OTROS:          { base:0, metricLabel:'Nivel (1-10)' }
};

// ===== ARQUITECTURA (galería) =====
const ARQUITECTURA_ITEMS = [
  { type:'image', title:'CASA AEROCAFÉ', tag:'VIVIENDA', src:'./img/luxury_villa_1781381880840.jpg', span:7, big:true, subtitle:'Vivienda contemporánea' },
  { type:'image', title:'EDIFICIO ORIGAMI', tag:'COMERCIAL', src:'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=400&q=80', span:5 },
  { type:'image', title:'PABELLÓN ZENITH', tag:'VIVIENDAS', src:'https://images.unsplash.com/photo-1513694203232-719a280e022f?auto=format&fit=crop&w=400&q=80', span:5 },
  { type:'image', title:'CAMPUS VERDE', tag:'INSTITUCIONAL', src:'https://images.unsplash.com/photo-1504297050568-910d24c426d3?auto=format&fit=crop&w=400&q=80', span:5 },
  { type:'image', title:'PORTUARIO', tag:'URBANISMO', src:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=400&q=80', span:5 }
];

// ===== DISEÑO GRÁFICO (galería) =====
const DISENO_ITEMS = [
  { type:'image', title:'IDENTIDAD ALPHA', tag:'BRANDING', src:'./img/design_mockup_1781381899975.jpg', span:7, big:true, subtitle:'Branding & Narrative' },
  { type:'image', title:'MANUAL ALPHA', tag:'IDENTIDAD', src:'https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=400&q=80', span:5 },
  { type:'image', title:'LÚMEN', tag:'EDITORIAL', src:'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&w=400&q=80', span:5 },
  { type:'image', title:'NEXUS', tag:'PUBLICIDAD', src:'https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=400&q=80', span:5 },
  { type:'image', title:'SOLIS', tag:'DIGITAL', src:'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=400&q=80', span:5 }
];

// ===== OTROS: CONTENIDO VARIADO =====
// type puede ser: 'image' | 'video' | 'youtube' | 'link' | 'audio'
const OTROS_ITEMS = [
  { type:'youtube', title:'Daibel El Creativo - Canal Oficial', youtubeId:'dQw4w9WgXcQ', desc:'Suscríbete al canal y descubre contenido creativo, tutoriales y process de arte digital.' },
  { type:'youtube', title:'Making Of - Render Arquitectónico', youtubeId:'ScMzIvxBSi4', desc:'Timelapse completo de modelado 3D desde cero hasta el render final.' },
  { type:'link', title:'Instagram - Daibel El Creativo', url:'https://www.instagram.com/daibelelcreativo?igsh=NjlsNnR4MnlsZ3Bq', desc:'Portafolio visual y contenido detrás de escena en tiempo real.' },
  { type:'link', title:'YouTube - Daibel El Creativo', url:'https://www.youtube.com/@daibelelcreativo', desc:'Videos de procesos creativos, renders, diseño y más.' },
  { type:'link', title:'WhatsApp - Contacto Directo', url:'https://wa.me/18297527990', desc:'Comunícate directamente para consultas rápidas y cotizaciones.' },
  { type:'video', title:'Demo Reel 2025', src:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4', desc:'Reel con los mejores proyectos del año: arquitectura, branding, 3D y motion.' },
  { type:'video', title:'Animación de Marca - Identidad Alpha', src:'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4', desc:'Motion graphics para la presentación de marca completa de Identidad Alpha.' },
  { type:'image', title:'Arte Generativo Solis', src:'https://images.unsplash.com/photo-1549490349-8643362247b5?auto=format&fit=crop&w=400&q=80', desc:'Colección de arte algorítmico con patrones fractales y geometría computacional.' },
  { type:'image', title:'Fotografía Urbana Nocturna', src:'https://images.unsplash.com/photo-1519501025264-65ba15a82390?auto=format&fit=crop&w=400&q=80', desc:'Serie fotográfica de arquitectura nocturna con iluminación artificial.' },
  { type:'audio', title:'Muestra Sonora - Cyber Dawn', src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3', desc:'Pista original de ambient electrónico para proyectos de video.' },
  { type:'audio', title:'Logo Sonoro - Creativo Digital', src:'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-2.mp3', desc:'Identidad de sonido de marca: firma auditiva única.' }
];

// ===== CONFIGURACIÓN GENERAL =====
const CONFIG = {
  email: 'daibelelcreativo1@gmail.com',
  currency: 'USD',
  whatsapp: '+1 (829) 752-7990',
  whatsappLink: 'https://wa.me/18297527990',
  socials: {
    youtube: 'https://www.youtube.com/@daibelelcreativo',
    instagram: 'https://www.instagram.com/daibelelcreativo?igsh=NjlsNnR4MnlsZ3Bq',
    whatsapp: 'https://wa.me/18297527990'
  }
};
