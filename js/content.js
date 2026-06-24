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
  { id:'p1', title:'TORRE CELESTE', category:'ARQUITECTURA', imageUrl:'./imagen1.png', description:'Complejo residencial y comercial inteligente de 45 pisos con jardines verticales, optimización bioclimática pasiva y fachada cinética.', tags:['Sostenible','Bioclimática','BIM'], location:'Medellín, COL', year:'2025' },
  { id:'p2', title:'CASA AEROCAFÉ', category:'ARQUITECTURA', imageUrl:'./imagen1.png', description:'Villa contemporánea de un solo nivel en madera laminada y concreto visto con cubierta verde integrada.', tags:['Madera','Cubierta Verde','Lujo'], location:'Manizales, COL', year:'2024' },
  { id:'p3', title:'CO-WORKING MATRIX', category:'DISEÑO 3D', imageUrl:'./imagen1.png', description:'Visualización fotorrealista en Unreal Engine 5 con iluminación volumétrica avanzada.', tags:['3D','Unreal','VR'], location:'Metaverso', year:'2025' },
  { id:'p4', title:'IDENTIDAD ALPHA', category:'DISEÑO GRÁFICO', imageUrl:'./imagen1.png', description:'Manual de identidad visual corporativa completo con tipografía exclusiva y sistema de color.', tags:['Branding','Tipografía','Packaging'], location:'Bogotá, COL', year:'2025' },
  { id:'p5', title:'CATHEDRAL RENDER', category:'DISEÑO 3D', imageUrl:'./imagen1.png', description:'Representación volumétrica de catedral futurista con materiales PBR y render 8K.', tags:['3D','V-Ray','Concept'], location:'París, FRA', year:'2024' },
  { id:'p6', title:'NEXUS BRANDING', category:'DISEÑO GRÁFICO', imageUrl:'./imagen1.png', description:'Reconstrucción de marca global con nueva narrativa visual y aplicaciones multiplataforma.', tags:['Rebranding','UI/UX'], location:'Miami, USA', year:'2025' },
  { id:'p7', title:'CORTOMETRAJE SENSIS', category:'VIDEO', imageUrl:'./imagen1.png', description:'Dirección de arte y post-producción audiovisual cinematográfica en 4K HDR.', tags:['Edición','Color','Audiovisual'], location:'Cali, COL', year:'2024' },
  { id:'p8', title:'ARTE GENERATIVO SOLIS', category:'OTROS', imageUrl:'./imagen1.png', description:'Criptoarte matemático con algoritmos p5.js y shaders GLSL en tiempo real.', tags:['Generativo','WebGL','NFT'], location:'Tokio, JPN', year:'2025' }
];

// ===== CARRUSEL (Proyectos Destacados) =====
// Se genera DINÁMICAMENTE cada día a la 1:00 AM (hora RD).
// Recoge automáticamente todas las imágenes disponibles en la página
// (portafolio, galerías, etc.) y selecciona 4 al azar por día.
// Si agregas más contenido, se reconoce y se incluye automáticamente.
const FEATURED_PROJECTS = [
  { title:'TORRE CELESTE', category:'ARQUITECTURA', location:'Bogotá, COL', image:'./imagen1.png' },
  { title:'CASA AEROCAFÉ', category:'ARQUITECTURA', location:'Manizales, COL', image:'./imagen1.png' },
  { title:'DISEÑO 3D SCOPE', category:'DISEÑO 3D', location:'Metaverso', image:'./imagen1.png' },
  { title:'IDENTIDAD ALPHA', category:'DISEÑO GRÁFICO', location:'Mundial', image:'./imagen1.png' }
];

// ===== MÚSICA / AUDIOS =====
const MUSIC_TRACKS = [
  { id:'t1', title:'Cyber Dawn', artist:'Daibel El Creativo', url:'./Musica1.mp3' },
  { id:'t2', title:'Neon Pulse', artist:'Daibel El Creativo', url:'./Musica1.mp3' },
  { id:'t3', title:'Digital Horizon', artist:'Daibel El Creativo', url:'./Musica1.mp3' },
  { id:'t4', title:'Quantum Beat', artist:'Daibel El Creativo', url:'./Musica1.mp3' },
  { id:'t5', title:'Midnight Circuit', artist:'Daibel El Creativo', url:'./Musica1.mp3' }
];

// ===== VIDEO (archivos .mp4 reales) =====
const VIDEOS_LIST = [
  { id:'v1', title:'CINEMÁTICA BRUTALISTA', duration:'2:34', cover:'./imagen1.png', url:'./video1.mp4' },
  { id:'v2', title:'SINFONÍA DE ACERO', duration:'1:53', cover:'./imagen1.png', url:'./video1.mp4' },
  { id:'v3', title:'ECOS DEL TIEMPO', duration:'0:15', cover:'./imagen1.png', url:'./video1.mp4' },
  { id:'v4', title:'RECORRIDO VIRTUAL 360°', duration:'3:10', cover:'./imagen1.png', url:'./video1.mp4' }
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
  { type:'image', title:'CASA AEROCAFÉ', tag:'VIVIENDA', src:'./imagen1.png', span:7, big:true, subtitle:'Vivienda contemporánea' },
  { type:'image', title:'EDIFICIO ORIGAMI', tag:'COMERCIAL', src:'./imagen1.png', span:5 },
  { type:'image', title:'PABELLÓN ZENITH', tag:'VIVIENDAS', src:'./imagen1.png', span:5 },
  { type:'image', title:'CAMPUS VERDE', tag:'INSTITUCIONAL', src:'./imagen1.png', span:5 },
  { type:'image', title:'PORTUARIO', tag:'URBANISMO', src:'./imagen1.png', span:5 }
];

// ===== DISEÑO GRÁFICO (galería) =====
const DISENO_ITEMS = [
  { type:'image', title:'IDENTIDAD ALPHA', tag:'BRANDING', src:'./imagen1.png', span:7, big:true, subtitle:'Branding & Narrative' },
  { type:'image', title:'MANUAL ALPHA', tag:'IDENTIDAD', src:'./imagen1.png', span:5 },
  { type:'image', title:'LÚMEN', tag:'EDITORIAL', src:'./imagen1.png', span:5 },
  { type:'image', title:'NEXUS', tag:'PUBLICIDAD', src:'./imagen1.png', span:5 },
  { type:'image', title:'SOLIS', tag:'DIGITAL', src:'./imagen1.png', span:5 }
];

// ===== OTROS: CONTENIDO VARIADO =====
// type puede ser: 'image' | 'video' | 'youtube' | 'link' | 'audio'
const OTROS_ITEMS = [
  { type:'youtube', title:'Daibel El Creativo - Canal Oficial', youtubeId:'dQw4w9WgXcQ', desc:'Suscríbete al canal y descubre contenido creativo, tutoriales y process de arte digital.' },
  { type:'youtube', title:'Making Of - Render Arquitectónico', youtubeId:'ScMzIvxBSi4', desc:'Timelapse completo de modelado 3D desde cero hasta el render final.' },
  { type:'link', title:'Instagram - Daibel El Creativo', url:'https://www.instagram.com/daibelelcreativo?igsh=NjlsNnR4MnlsZ3Bq', desc:'Portafolio visual y contenido detrás de escena en tiempo real.' },
  { type:'link', title:'YouTube - Daibel El Creativo', url:'https://www.youtube.com/@daibelelcreativo', desc:'Videos de procesos creativos, renders, diseño y más.' },
  { type:'link', title:'WhatsApp - Contacto Directo', url:'https://wa.me/18297527990', desc:'Comunícate directamente para consultas rápidas y cotizaciones.' },
  { type:'video', title:'Demo Reel 2025', src:'./video1.mp4', desc:'Reel con los mejores proyectos del año: arquitectura, branding, 3D y motion.' },
  { type:'video', title:'Animación de Marca - Identidad Alpha', src:'./video1.mp4', desc:'Motion graphics para la presentación de marca completa de Identidad Alpha.' },
  { type:'image', title:'Arte Generativo Solis', src:'./imagen1.png', desc:'Colección de arte algorítmico con patrones fractales y geometría computacional.' },
  { type:'image', title:'Fotografía Urbana Nocturna', src:'./imagen1.png', desc:'Serie fotográfica de arquitectura nocturna con iluminación artificial.' },
  { type:'audio', title:'Muestra Sonora - Cyber Dawn', src:'./Musica1.mp3', desc:'Pista original de ambient electrónico para proyectos de video.' },
  { type:'audio', title:'Logo Sonoro - Creativo Digital', src:'./Musica1.mp3', desc:'Identidad de sonido de marca: firma auditiva única.' }
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
