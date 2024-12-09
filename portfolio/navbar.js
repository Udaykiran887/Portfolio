// Get the hamburger menu and the menu items
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('nav > div:last-child'); // Assuming the menu is the last div in the nav

// Toggle menu visibility on hamburger click
hamburger.addEventListener('click', () => {
    menu.classList.toggle('active');
});

// Close the menu when a menu item is clicked
menu.addEventListener('click', () => {
    menu.classList.remove('active');
});

// Optional: Close the menu when clicking outside of it
document.addEventListener('click', (event) => {
    if (!nav.contains(event.target) && menu.classList.contains('active')) {
        menu.classList.remove('active');
    }
});
