const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links ul');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function showCard(cardType) {
    if (cardType === 'languages') {
        document.querySelector('.languages-card').style.display = 'flex';
        document.querySelector('.tools-card').style.display = 'none';
    } else if (cardType === 'tools') {
        document.querySelector('.languages-card').style.display = 'none';
        document.querySelector('.tools-card').style.display = 'flex';
    }
}
