// --- MENÚ MÓVIL ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Abrir/cerrar menú con el botón hamburguesa
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// --- NAVEGACIÓN ENTRE SECCIONES ---
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('main section');
  const links = document.querySelectorAll('#nav-links a');

  function mostrarSeccion(id) {
    sections.forEach(sec => {
      if (sec.id === id) {
        sec.style.display = 'block';
        sec.classList.add('visible');
        sec.classList.remove('hidden');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        sec.style.display = 'none';
        sec.classList.remove('visible');
        sec.classList.add('hidden');
      }
    });
  }

  // Mostrar solo la sección "empresa" al inicio
  mostrarSeccion('empresa');

  // Detectar clics en el menú
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const seccionId = link.getAttribute('data-section');
      mostrarSeccion(seccionId);
    });
  });
});

// --- FORMULARIO DE CONTACTO ---
document.getElementById('contactForm').addEventListener('submit', function (event) {
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
