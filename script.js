// 1. Escritura Automática
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

// 2. Luz de fondo y Barra de progreso
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});

window.addEventListener('scroll', () => {
    // Barra de progreso
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    const pb = document.getElementById("progress-bar");
    if(pb) pb.style.width = scrolled + "%";

    // Reveal de secciones
    const reveals = document.querySelectorAll(".reveal");
    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;
        if (elementTop < window.innerHeight - 100) {
            el.classList.add("active");
        }
    });
});

// 3. Tema y Feedback
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

const contactForm = document.getElementById('contact-form');
const submitBtn = document.getElementById('submit-btn');

if(contactForm) {
    contactForm.addEventListener('submit', () => {
        submitBtn.classList.add('btn-loading');
        submitBtn.querySelector('.btn-text').textContent = 'Enviando';
    });
}

// 4. Easter Egg para Reclutadores
console.log("%c¡Hola reclutador! 👋", "color: #38bdf8; font-size: 20px; font-weight: bold;");
console.log("Este código ha sido optimizado para rendimiento y SEO.");

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    type();
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.replace('dark-mode', 'light-mode');
    }
});
