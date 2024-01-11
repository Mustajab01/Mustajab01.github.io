const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links ul');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});