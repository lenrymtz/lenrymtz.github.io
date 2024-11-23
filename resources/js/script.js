let button = document.getElementById('back-button');
let menuButton = document.getElementById('menu-button')
let menu = document.getElementById('hid-menu')

function topFunction() {
    document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

function displayMenu() {
  menu.style.display = 'block';
  document.addEventListener('click', closeMenuOnClickOutside);
}

function closeMenuOnClickOutside(event) {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.style.display = 'none';
    document.removeEventListener('click', closeMenuOnClickOutside);
  }
}

menuButton.addEventListener('click', (event) => {
  event.stopPropagation();
});