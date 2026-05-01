// 1. Configuración del Typewriter
const phrases = ["Full-Stack Developer", "Laravel Enthusiast", "Web3 Explorer", "UI/UX Driven"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typewriterEl = document.getElementById("typewriter");

function type() {
    const currentPhrase = phrases[phraseIndex];
    if (isDeleting) {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterEl.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 40 : 80;
    if (!isDeleting && charIndex === currentPhrase.length) {
        isDeleting = true;
        typeSpeed = 2500;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
        typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
}

// 2. Luz de fondo dinámica
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});

// 3. Scroll Reveal (Aparición de secciones)
function reveal() {
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const windowHeight = window.innerHeight;
        const elementTop = el.getBoundingClientRect().top;
        const elementVisible = 150;
        if (elementTop < windowHeight - elementVisible) {
            el.classList.add("active");
        }
    });
}

// 4. Gestión de Temas
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// Al cargar la página
window.addEventListener("scroll", reveal);
document.addEventListener('DOMContentLoaded', () => {
    type();
    reveal(); // Para chequear secciones visibles al inicio
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.replace('dark-mode', 'light-mode');
    }
});
