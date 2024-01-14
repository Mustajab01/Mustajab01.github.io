const menuIcon = document.querySelector('.menu-icon');
const navLinks = document.querySelector('.nav-links ul');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('show');
});

function showCard(cardType) {
    if (cardType === 'languages') {
        document.querySelector('.languages-card').style.display = 'flex';
        document.querySelector('.tools-card').style.display = 'none';
        document.querySelector('#languages-btn').style.borderBottom = '2px solid black';
        document.querySelector('#tools-btn').style.borderBottom = '2px solid #d2d2d2';
    } else if (cardType === 'tools') {
        document.querySelector('.languages-card').style.display = 'none';
        document.querySelector('.tools-card').style.display = 'flex';
        document.querySelector('#languages-btn').style.borderBottom = '2px solid #d2d2d2';
        document.querySelector('#tools-btn').style.borderBottom = '2px solid black';
    }
}
