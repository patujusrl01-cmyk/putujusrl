/**
 * PATUJU SRL - Client Resources Page Script
 * Handles FAQ Accordion toggle and Resource Cards text search filtering
 */

document.addEventListener('DOMContentLoaded', () => {
  initFAQAccordion();
  initResourceSearch();
});

/**
 * FAQ Collapsible Accordion logic
 */
function initFAQAccordion() {
  const faqHeaders = document.querySelectorAll('.faq-header');

  faqHeaders.forEach(header => {
    header.addEventListener('click', () => {
      const item = header.parentElement;
      const isActive = item.classList.contains('active');

      // Close all other FAQ items for a clean accordion effect
      const allItems = document.querySelectorAll('.faq-item');
      allItems.forEach(i => {
        i.classList.remove('active');
        const body = i.querySelector('.faq-body');
        if (body) body.style.maxHeight = null;
      });

      if (!isActive) {
        item.classList.add('active');
        const body = item.querySelector('.faq-body');
        if (body) {
          // Slide down transition
          body.style.maxHeight = body.scrollHeight + 'px';
        }
      }
    });
  });
}

/**
 * Searches and filters resource cards dynamically
 */
function initResourceSearch() {
  const searchInput = document.getElementById('resource-search');
  const cards = document.querySelectorAll('.card-grid .card');

  if (!searchInput || cards.length === 0) return;

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();

    cards.forEach(card => {
      const title = card.querySelector('.card-title').textContent.toLowerCase();
      const desc = card.querySelector('.card-text').textContent.toLowerCase();

      if (title.includes(query) || desc.includes(query)) {
        card.style.display = '';
        card.style.opacity = '1';
        card.style.transform = 'scale(1)';
      } else {
        card.style.display = 'none';
        card.style.opacity = '0';
        card.style.transform = 'scale(0.95)';
      }
    });
  });
}
