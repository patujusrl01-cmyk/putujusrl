/**
 * PATUJU SRL - Contact Page Logic
 * Handles Form Validation, Storage Simulation, and Interactive Leaflet.js Dark Map
 */

document.addEventListener('DOMContentLoaded', () => {
  initContactForm();
  initContactMap();
});

/**
 * Validates and simulates submission of the contact form
 */
function initContactForm() {
  const form = document.getElementById('contact-form');
  const toast = document.getElementById('toast-notification');

  if (!form || !toast) return;

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Fetch values
    const name = document.getElementById('form-name').value.trim();
    const company = document.getElementById('form-company').value.trim();
    const phone = document.getElementById('form-phone').value.trim();
    const subject = document.getElementById('form-subject').value;
    const message = document.getElementById('form-message').value.trim();

    // Basic Validation
    if (!name || !phone || !message) {
      alert('Por favor complete los campos obligatorios (*) antes de enviar.');
      return;
    }

    // Save to localStorage to simulate a functional backend database log
    const contactRequest = {
      name,
      company,
      phone,
      subject,
      message,
      submittedAt: new Date().toISOString()
    };

    // Get current log
    let requests = [];
    try {
      requests = JSON.parse(localStorage.getItem('patuju_contact_requests') || '[]');
    } catch(err) {
      requests = [];
    }
    requests.push(contactRequest);
    localStorage.setItem('patuju_contact_requests', JSON.stringify(requests));

    // Show Success Toast Notification
    showToast();

    // Trigger mailto redirect
    const mailtoSubject = encodeURIComponent(`Contacto Web PATUJÚ SRL - ${subject}`);
    const mailtoBody = encodeURIComponent(`Nombre Completo: ${name}\nEmpresa: ${company}\nTeléfono: ${phone}\nMensaje: ${message}`);
    window.location.href = `mailto:geovannyluciano83@gmail.com?subject=${mailtoSubject}&body=${mailtoBody}`;

    // Reset Form
    form.reset();
  });

  function showToast() {
    toast.classList.add('show');
    
    // Hide toast after 5 seconds
    setTimeout(() => {
      toast.classList.remove('show');
    }, 5000);
  }
}

/**
 * Initializes Leaflet Map with Dark Tiles (CartoDB Dark Matter)
 */
function initContactMap() {
  const mapElement = document.getElementById('map');
  if (!mapElement) return;

  // Coordinates for Santa Cruz, Bolivia (around the office area on Av. Soberania)
  // Let's place it near a central logistics location
  const officeCoords = [-17.7818, -63.1670]; 

  // Initialize Map
  const map = L.map('map', {
    center: officeCoords,
    zoom: 15,
    zoomControl: true,
    scrollWheelZoom: false // Disable scroll wheel to avoid trapping users scrolling down
  });

  // Dark Mode CartoDB Tile Layer
  L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
    subdomains: 'abcd',
    maxZoom: 20
  }).addTo(map);

  // Custom Icon matching brand colors
  const greenIcon = L.divIcon({
    html: `
      <div style="
        background-color: var(--secondary); 
        width: 16px; 
        height: 16px; 
        border-radius: 50%; 
        border: 3px solid white;
        box-shadow: 0 0 10px var(--secondary);
      "></div>
    `,
    className: 'custom-map-marker',
    iconSize: [16, 16],
    iconAnchor: [8, 8]
  });

  // Add Marker
  const marker = L.marker(officeCoords, { icon: greenIcon }).addTo(map);

  // Add Popup
  marker.bindPopup(`
    <a href="https://maps.app.goo.gl/9SG8AZ3uUWmzRQrz8" target="_blank" style="text-decoration: none; color: inherit;">
      <div style="font-family: var(--font-body); font-size: 13px; color: var(--primary); cursor: pointer;">
        <strong style="font-family: var(--font-display); font-size: 14px; display: block; margin-bottom: 4px; text-decoration: underline;">PATUJÚ SRL</strong>
        Av. Soberanía entre calle 4 y 5, N° 150.<br>
        Santa Cruz, Bolivia.
      </div>
    </a>
  `).openPopup();
}
