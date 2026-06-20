/**
 * PATUJU SRL - Global Script
 * Handles: Sticky Header, Mobile Drawer, Scroll Animations, and WhatsApp Integration
 */

document.addEventListener('DOMContentLoaded', () => {
  initHeaderScroll();
  initMobileMenu();
  initScrollAnimations();
  initWhatsAppFloating();
  initEmptyLinks();
});

/**
 * Adjust header styles when page is scrolled
 */
function initHeaderScroll() {
  const header = document.querySelector('.header-wrapper');
  if (!header) return;

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.style.boxShadow = '0 4px 20px rgba(0, 0, 0, 0.1)';
      header.style.padding = '4px 0';
    } else {
      header.style.boxShadow = 'var(--shadow-sm)';
      header.style.padding = '0';
    }
  });
}

/**
 * Mobile Hamburguer Menu and Drawer Navigation
 */
function initMobileMenu() {
  const hamburgerBtn = document.getElementById('hamburger-btn');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerOverlay = document.getElementById('drawer-overlay');

  if (!hamburgerBtn || !mobileDrawer || !drawerOverlay) return;

  function toggleMenu() {
    const isOpen = mobileDrawer.classList.contains('open');
    if (isOpen) {
      mobileDrawer.classList.remove('open');
      drawerOverlay.classList.remove('visible');
      hamburgerBtn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
      document.body.style.overflow = '';
    } else {
      mobileDrawer.classList.add('open');
      drawerOverlay.classList.add('visible');
      hamburgerBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
      document.body.style.overflow = 'hidden';
    }
  }

  hamburgerBtn.addEventListener('click', toggleMenu);
  drawerOverlay.addEventListener('click', toggleMenu);
  
  // Close drawer when clicking a link inside it
  const links = mobileDrawer.querySelectorAll('.mobile-nav-link');
  links.forEach(link => {
    link.addEventListener('click', () => {
      mobileDrawer.classList.remove('open');
      drawerOverlay.classList.remove('visible');
      hamburgerBtn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
      document.body.style.overflow = '';
    });
  });
}

/**
 * Intersection Observer for scroll-fade animations
 */
function initScrollAnimations() {
  const animatedElements = document.querySelectorAll('.scroll-fade');
  if (animatedElements.length === 0) return;

  const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate-fade-in');
        observer.unobserve(entry.target);
      }
    });
  }, observerOptions);

  animatedElements.forEach(el => {
    // Hide initially
    el.style.opacity = '0';
    observer.observe(el);
  });
}

/**
 * Floating WhatsApp Widget Click Action
 */
function initWhatsAppFloating() {
  const waBtn = document.getElementById('whatsapp-btn');
  if (!waBtn) return;

  waBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const phone = '59170000000'; // Target phone from screenshots
    const text = encodeURIComponent('Hola PATUJU SRL, me gustaría solicitar asesoría y cotización para mis operaciones logísticas.');
    const waUrl = `https://wa.me/${phone}?text=${text}`;
    window.open(waUrl, '_blank');
  });
}

/**
 * Handles all empty links to prevent page jumps and show a friendly alert
 */
function initEmptyLinks() {
  document.body.addEventListener('click', (e) => {
    // Find the closest anchor tag
    const link = e.target.closest('a');
    if (!link) return;

    const href = link.getAttribute('href');
    if (href === '#') {
      // Ignore specific handled links
      if (link.id === 'whatsapp-btn' || link.id === 'faq-link') return;

      e.preventDefault();

      if (link.classList.contains('news-card-link')) {
        alert('Este artículo estará disponible próximamente.');
      } else {
        alert('Esta función estará disponible próximamente.');
      }
    }
  });
}
