const header = document.getElementById('nav');
const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    header.classList.toggle('active');
    btn.classList.toggle('close');
});