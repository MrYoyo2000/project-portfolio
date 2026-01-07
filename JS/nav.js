function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const body = document.body;
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
}

document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-menu').classList.remove('active');
        document.body.classList.remove('menu-open');
    });
});

const themeSwitch = document.getElementById('theme-switch');
const body = document.body;

const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'light') {
    body.classList.add('light-mode');
    themeSwitch.checked = true;
}

themeSwitch.addEventListener('change', () => {
    if (themeSwitch.checked) {
        body.classList.add('light-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.remove('light-mode');
        localStorage.setItem('theme', 'dark');
    }
});

function toggleMenu() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('menu-open');
    overlay.classList.toggle('active'); // Ajout overlay
}

// Fermer le menu quand on clique sur un lien
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        document.querySelector('.hamburger').classList.remove('active');
        document.querySelector('.nav-menu').classList.remove('active');
        document.body.classList.remove('menu-open');
        document.querySelector('.menu-overlay').classList.remove('active'); // Ajout overlay
    });
});
let linesTarget = 5868;
let projectsTarget = 4;

let lines = 0;
let projectsDone = 0;

const linesEl = document.getElementById("lines");
const projectsEl = document.getElementById("projectsCount");

const counter = setInterval(() => {
if (lines < linesTarget) {
    lines += 250;
    linesEl.textContent = lines;
}

if (projectsDone < projectsTarget) {
    projectsDone += 1;
    projectsEl.textContent = projectsDone;
}

if (lines >= linesTarget && projectsDone >= projectsTarget) {
    clearInterval(counter);
}
}, 50);
