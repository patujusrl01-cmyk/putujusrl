/**
 * PATUJU SRL - News and Articles Filter & Pagination
 */

document.addEventListener('DOMContentLoaded', () => {
  initNewsSystem();
});

// Sample news data to provide interactive pagination and filtering
const newsData = [
  // Page 1 Articles
  {
    id: 1,
    title: "Nuevas Regulaciones Aduaneras en Bolivia para el Segundo Semestre",
    category: "aduanas",
    date: "15 Oct, 2026",
    summary: "Detalle completo sobre las modificaciones en los aranceles de importación de bienes de capital y su impacto en la industria local.",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: 2,
    title: "Optimización de Rutas en el Corredor Bioceánico",
    category: "logistica",
    date: "12 Oct, 2026",
    summary: "Análisis del impacto de las recientes mejoras en la infraestructura vial que conectan puertos del Pacífico con el territorio nacional.",
    image: "https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 3,
    title: "PATUJÚ SRL Obtiene Certificación OEA Nivel Avanzado",
    category: "corporativo",
    date: "05 Oct, 2026",
    summary: "Un hito en nuestro compromiso continuo con la seguridad de la cadena de suministro y la excelencia en el agenciamiento aduanero.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 4,
    title: "Tendencias de Exportación Agrícola Boliviana",
    category: "mercados",
    date: "28 Sep, 2026",
    summary: "Proyecciones y desafíos logísticos para el sector agroindustrial boliviano frente a la demanda internacional en constante evolución.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 5,
    title: "Implementación de Sistemas de Monitoreo Satelital en Carga Crítica",
    category: "innovacion",
    date: "20 Sep, 2026",
    summary: "Aseguramos la trazabilidad en tiempo real de mercancías sensibles con tecnología de geolocalización avanzada.",
    image: "https://images.unsplash.com/photo-1524522173746-f628baad3644?auto=format&fit=crop&q=80&w=800",
    isFeatured: true
  },
  {
    id: 6,
    title: "Nuevas Rutas de Carga Aérea Express",
    category: "aereo",
    date: "15 Sep, 2026",
    summary: "Ampliamos nuestra red de aliados estratégicos para reducir tiempos de tránsito en mercancía perecedera y de alta prioridad.",
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 7,
    title: "Capacitación en Manejo de Mercancías Peligrosas",
    category: "equipo",
    date: "02 Sep, 2026",
    summary: "Nuestro personal actualiza sus certificaciones IATA y OMI para garantizar la seguridad operativa y el estricto cumplimiento legal.",
    image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  
  // Page 2 Articles
  {
    id: 8,
    title: "Acuerdo CAN: Beneficios Tributarios para Importadores de la Región",
    category: "aduanas",
    date: "28 Ago, 2026",
    summary: "Cómo aprovechar las liberaciones arancelarias suscritas en el Acuerdo de Cartagena para potenciar la competitividad de sus compras.",
    image: "https://images.unsplash.com/photo-1541872703-74c5e44368f9?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 9,
    title: "Logística Inversa: Reduciendo Costos y Huella Ecológica",
    category: "logistica",
    date: "15 Ago, 2026",
    summary: "Estrategias modernas para la gestión de devoluciones y embalajes reutilizables en las empresas exportadoras.",
    image: "https://images.unsplash.com/photo-1530587191325-3db32d826c18?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 10,
    title: "Apertura de Nuevas Oficinas en la Frontera con Brasil (Puerto Suárez)",
    category: "corporativo",
    date: "10 Ago, 2026",
    summary: "Expandimos nuestra presencia física para brindar soporte directo e inmediato en uno de los puntos fronterizos de mayor flujo comercial.",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 11,
    title: "Comercio de Minerales: Desafíos Aduaneros Actuales",
    category: "mercados",
    date: "01 Ago, 2026",
    summary: "Guía práctica para cumplir con las regulaciones de control de exportación y liquidación de regalías mineras en Bolivia.",
    image: "https://images.unsplash.com/photo-1518364538800-6bcb3f25da49?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 12,
    title: "Digitalización de Documentación: Expediente Electrónico Aduanero",
    category: "innovacion",
    date: "25 Jul, 2026",
    summary: "Reducción del uso de papel y agilización de consultas históricas con nuestra nueva plataforma interna para clientes.",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 13,
    title: "Transporte Multimodal: Aéreo-Terrestre como Alternativa de Ahorro",
    category: "logistica",
    date: "18 Jul, 2026",
    summary: "Casos prácticos donde la combinación de modos de transporte reduce los costos operativos en hasta un 30%.",
    image: "https://images.unsplash.com/photo-1508962914676-134849a727f0?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  
  // Page 3 Articles
  {
    id: 14,
    title: "Incoterms 2020: Errores Comunes en la Negociación de Fletes",
    category: "aduanas",
    date: "05 Jul, 2026",
    summary: "Evite sobrecostos y malentendidos de responsabilidad legal con la correcta interpretación de los términos FOB, CIF y DDP.",
    image: "https://images.unsplash.com/photo-1568992687947-868a62a9f521?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 15,
    title: "Seguro de Transporte: Coberturas que Todo Exportador Debe Conocer",
    category: "logistica",
    date: "20 Jun, 2026",
    summary: "Análisis de cláusulas inglesas A, B y C. Cómo proteger la inversión ante avería gruesa o pérdida total en alta mar.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  },
  {
    id: 16,
    title: "Alianza Estratégica con Operadores Portuarios del Pacífico",
    category: "corporativo",
    date: "15 Jun, 2026",
    summary: "Establecemos acuerdos preferenciales en Arica e Iquique para agilizar la descarga y despacho de mercancías hacia Bolivia.",
    image: "https://images.unsplash.com/photo-1574259392081-dbe3c19cd15e?auto=format&fit=crop&q=80&w=800",
    isFeatured: false
  }
];

function initNewsSystem() {
  const newsContainer = document.getElementById('news-container');
  const paginationContainer = document.getElementById('pagination-container');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const newsSearchInput = document.getElementById('news-search');

  if (!newsContainer) return;

  let currentCategory = 'all';
  let searchQuery = '';
  let currentPage = 1;
  const itemsPerPage = 6;

  function renderNews() {
    // Filter data
    let filtered = newsData.filter(item => {
      const matchesCategory = currentCategory === 'all' || item.category === currentCategory;
      const matchesSearch = item.title.toLowerCase().includes(searchQuery) || 
                            item.summary.toLowerCase().includes(searchQuery) ||
                            item.category.toLowerCase().includes(searchQuery);
      return matchesCategory && matchesSearch;
    });

    const totalItems = filtered.length;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Clamp current page
    if (currentPage > totalPages) currentPage = Math.max(1, totalPages);

    // Slice for page
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const pageItems = filtered.slice(startIndex, endIndex);

    // Render HTML
    if (pageItems.length === 0) {
      newsContainer.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 40px; color: var(--outline);">
          <span class="material-symbols-outlined" style="font-size: 48px; margin-bottom: 16px;">search_off</span>
          <p class="body-lg">No se encontraron noticias que coincidan con la búsqueda.</p>
        </div>
      `;
      if (paginationContainer) paginationContainer.innerHTML = '';
      return;
    }

    newsContainer.innerHTML = pageItems.map(item => {
      // If it's a featured item style it slightly differently if on page 1, or keep standard card grid structure for clean look
      const isAltCard = item.isFeatured;
      
      if (isAltCard) {
        return `
          <div class="news-main-card scroll-fade animate-fade-in" style="grid-column: 1 / -1; margin-bottom: 8px;">
            <div class="news-main-bg" style="background-image: url('${item.image}')"></div>
            <div class="news-main-overlay">
              <span class="news-badge">${item.category}</span>
              <h3 class="news-main-title">${item.title}</h3>
              <p style="margin-bottom: 20px; opacity: 0.9; max-width: 800px;" class="body-md">${item.summary}</p>
              <div class="news-main-meta">
                <span><span class="material-symbols-outlined" style="font-size: 16px; vertical-align: middle; margin-right: 4px;">calendar_month</span>${item.date}</span>
                <a href="noticias.html" class="news-card-link" style="color: white; display: inline-flex; align-items: center; gap: 4px;">Leer artículo <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span></a>
              </div>
            </div>
          </div>
        `;
      }

      return `
        <div class="news-card scroll-fade animate-fade-in">
          <div class="news-card-image">
            <img src="${item.image}" alt="${item.title}" loading="lazy">
          </div>
          <div class="news-card-content">
            <span class="news-card-eyebrow">${item.category}</span>
            <h3 class="news-card-title">${item.title}</h3>
            <p class="news-card-desc">${item.summary}</p>
            <div class="news-card-footer">
              <span><span class="material-symbols-outlined" style="font-size: 16px; vertical-align: middle; margin-right: 4px;">calendar_month</span>${item.date}</span>
              <a href="noticias.html" class="news-card-link" style="display: inline-flex; align-items: center; gap: 4px;">Leer más <span class="material-symbols-outlined" style="font-size: 16px;">arrow_forward</span></a>
            </div>
          </div>
        </div>
      `;
    }).join('');

    renderPagination(totalPages);
  }

  function renderPagination(totalPages) {
    if (!paginationContainer) return;
    if (totalPages <= 1) {
      paginationContainer.innerHTML = '';
      return;
    }

    let buttonsHtml = '';
    
    // Left arrow
    buttonsHtml += `
      <button class="page-btn ${currentPage === 1 ? 'disabled' : ''}" data-page="${currentPage - 1}" ${currentPage === 1 ? 'disabled style="opacity:0.5; cursor:default;"' : ''}>
        <span class="material-symbols-outlined" style="vertical-align: middle;">chevron_left</span>
      </button>
    `;

    for (let i = 1; i <= totalPages; i++) {
      buttonsHtml += `
        <button class="page-btn ${currentPage === i ? 'active' : ''}" data-page="${i}">${i}</button>
      `;
    }

    // Right arrow
    buttonsHtml += `
      <button class="page-btn ${currentPage === totalPages ? 'disabled' : ''}" data-page="${currentPage + 1}" ${currentPage === totalPages ? 'disabled style="opacity:0.5; cursor:default;"' : ''}>
        <span class="material-symbols-outlined" style="vertical-align: middle;">chevron_right</span>
      </button>
    `;

    paginationContainer.innerHTML = buttonsHtml;

    // Attach listeners
    const pageButtons = paginationContainer.querySelectorAll('.page-btn:not([disabled])');
    pageButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        currentPage = parseInt(btn.dataset.page);
        renderNews();
        // Scroll to news section
        const sectionHeader = document.querySelector('.news-layout');
        if (sectionHeader) {
          sectionHeader.scrollIntoView({ behavior: 'smooth' });
        }
      });
    });
  }

  // Category Filter clicks
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active', 'btn-primary'));
      filterButtons.forEach(b => b.classList.add('btn-white'));
      
      btn.classList.remove('btn-white');
      btn.classList.add('active', 'btn-primary');

      currentCategory = btn.dataset.filter;
      currentPage = 1;
      renderNews();
    });
  });

  // Search input typing
  if (newsSearchInput) {
    newsSearchInput.addEventListener('input', (e) => {
      searchQuery = e.target.value.toLowerCase().trim();
      currentPage = 1;
      renderNews();
    });
  }

  // Initial render
  renderNews();
}
