const menu = document.querySelector('.header__menu');
const btn = document.getElementById('btn');
const header = document.getElementById('header');
const headerBtn = document.querySelector('.header-btn')


btn.addEventListener('click', () => {
    active()
})

function active() {
    menu.classList.toggle('active');
    header.classList.toggle('fixed');
    headerBtn.classList.toggle('active');
    btn.classList.toggle('close');
}