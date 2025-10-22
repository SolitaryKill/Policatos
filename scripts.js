// --- MENÚ MÓVIL (para celulares y tablets) ---
const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.getElementById('nav-links');

// Abrir/cerrar menú con el botón hamburguesa
menuToggle.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

// Cerrar menú automáticamente al hacer clic en un enlace
document.querySelectorAll('#nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('active');
  });
});

// Cerrar menú si se hace clic fuera de él (opcional pero útil en móviles)
document.addEventListener('click', (event) => {
  if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
    navLinks.classList.remove('active');
  }
});


// --- NAVEGACIÓN DINÁMICA (solo una sección visible) ---
const sections = document.querySelectorAll('main section');
const links = document.querySelectorAll('#nav-links a');

// Función para mostrar una sola sección con animación
function mostrarSeccion(id) {
  sections.forEach(sec => {
    if (sec.id === id) {
      sec.classList.remove('hidden');
      sec.classList.add('visible', 'fade-in');
      // eliminar clase fade-in tras animación
      setTimeout(() => sec.classList.remove('fade-in'), 400);
    } else {
      sec.classList.remove('visible');
      sec.classList.add('hidden');
    }
  });
  // Cierra el menú en móviles
  navLinks.classList.remove('active');
}

// Mostrar solo la sección "empresa" al iniciar
mostrarSeccion('empresa');

// Detectar clics en los enlaces del menú
links.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const seccionId = link.dataset.section;
    mostrarSeccion(seccionId);
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
