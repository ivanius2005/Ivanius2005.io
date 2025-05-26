const menuBtn = document.getElementById('menuBtn');
const sideMenu = document.getElementById('sideMenu');
const logo = document.getElementById('logo');

menuBtn.addEventListener('click', function(e) {
  e.stopPropagation();
  const isOpen = sideMenu.classList.toggle('open');
  sideMenu.setAttribute('aria-hidden', !isOpen);

  // Añade o quita la clase que mueve el logo
  if (isOpen) {
    logo.classList.add('logo-shift');
  } else {
    logo.classList.remove('logo-shift');
  }
});

// Cerrar menú al hacer click fuera y volver logo a su sitio
document.addEventListener('click', function(event) {
  if (!sideMenu.contains(event.target) && !menuBtn.contains(event.target)) {
    sideMenu.classList.remove('open');
    sideMenu.setAttribute('aria-hidden', true);
    logo.classList.remove('logo-shift');
  }
});
