const hamburger = document.querySelector('.bi-list');
const close = document.querySelector('.bi-x-lg');
const navmenu = document.querySelector('nav ul')



hamburger.addEventListener('click', () => {
    navmenu.style.display = 'block';
    hamburger.style.display = 'none';
    close.style.display = 'block';
});


close.addEventListener('click', () => {
    navmenu.style.display = 'none';
    hamburger.style.display = 'block';
    close.style.display = 'none';
});