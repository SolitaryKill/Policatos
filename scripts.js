// --- Menú móvil ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// --- Navegación dinámica ---
const sections = document.querySelectorAll('main section');
const links = document.querySelectorAll('#nav-links a');

function mostrarSeccion(id) {
  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.remove('hidden');
      sec.classList.add('visible');
    } else {
      sec.classList.remove('visible');
      sec.classList.add('hidden');
    }
  });
  navLinks.classList.remove('active'); // Cierra menú móvil al seleccionar
}

// Mostrar sección inicial
mostrarSeccion('empresa');

// Evento de clic para navegación
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    mostrarSeccion(link.dataset.section);
  });
});

// --- Formulario de contacto ---
document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const nombre = document.getElementById('nombre').value.trim();
  const email = document.getElementById('email').value.trim();
  const mensaje = document.getElementById('mensaje').value.trim();
  const respuesta = document.getElementById('respuesta');

  if (nombre && email && mensaje) {
    respuesta.style.color = 'green';
    respuesta.textContent = `Gracias por tu mensaje, ${nombre}. Te responderemos pronto.`;
    this.reset();
  } else {
    respuesta.style.color = 'red';
    respuesta.textContent = 'Por favor, completa todos los campos.';
  }
});
