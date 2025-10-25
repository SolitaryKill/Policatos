// --- MENÚ MÓVIL ---
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('mobile-menu');
  const navLinks = document.getElementById('nav-links');
  const links = document.querySelectorAll('#nav-links a');
  const sections = document.querySelectorAll('main section');

  // Mostrar solo la sección principal al inicio
  mostrarSeccion('empresa');

  // Función para abrir/cerrar el menú hamburguesa
  menuToggle.addEventListener('click', (e) => {
    e.stopPropagation(); // evita cierre inmediato al hacer clic
    navLinks.classList.toggle('active');
  });

  // Cierra el menú si haces clic fuera
  document.addEventListener('click', (e) => {
    if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
      navLinks.classList.remove('active');
    }
  });

  // --- FUNCIÓN PARA MOSTRAR SECCIONES ---
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

  // --- NAVEGACIÓN ENTRE SECCIONES ---
  links.forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const seccionId = link.dataset.section;
      mostrarSeccion(seccionId);
      navLinks.classList.remove('active'); // cerrar menú tras clic
    });
  });

  // --- FORMULARIO DE CONTACTO ---
  const form = document.getElementById('contactForm');
  const respuesta = document.getElementById('respuesta');

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nombre = document.getElementById('nombre').value.trim();
    const email = document.getElementById('email').value.trim();
    const mensaje = document.getElementById('mensaje').value.trim();

    if (nombre && email && mensaje) {
      respuesta.style.color = 'green';
      respuesta.textContent = `Gracias por tu mensaje, ${nombre}. Te responderemos pronto.`;
      form.reset();
    } else {
      respuesta.style.color = 'red';
      respuesta.textContent = 'Por favor, completa todos los campos.';
    }
  });
});
