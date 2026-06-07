// Menu toggle with JavaScript
var navLinks = document.getElementById('navLinks');
var menuOverlay = document.getElementById('menuOverlay');
var menuBtn = document.getElementById('menuBtn');
var closeBtn = document.getElementById('closeBtn');

// Open menu
menuBtn.addEventListener('click', function() {
    navLinks.style.right = '0';
    menuOverlay.classList.add('active');
});

// Close menu function
function hideMenu() {
    navLinks.style.right = '-20rem';
    menuOverlay.classList.remove('active');
}

// Close via X button
closeBtn.addEventListener('click', hideMenu);

// Close via overlay click
menuOverlay.addEventListener('click', hideMenu);

// Hide loader when page is ready
window.addEventListener('load', () => {
  const loader = document.getElementById('page-loader');
  const content = document.getElementById('main-content');
  
  setTimeout(() => {
    loader.classList.add('hidden');
    content.style.opacity = '1';
  }, 500); // minimum display time so it doesn't flash
});