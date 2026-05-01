// 1. Navegación por Pestañas (Tabs)
const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;

        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));

        tab.classList.add('active');
        const targetContent = document.getElementById(target);
        targetContent.classList.add('active');
        
        // Reset de animaciones de scroll
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

// 2. Typewriter Effect
const phrases = ["Full-Stack Developer", "Laravel & React Expert", "Blockchain Explorer"];
let phraseIndex = 0, charIndex = 0, isDeleting = false;
const typewriterEl = document.getElementById("typewriter");

function type() {
    const current = phrases[phraseIndex];
    typewriterEl.textContent = isDeleting ? current.substring(0, charIndex--) : current.substring(0, charIndex++);
    
    if (!isDeleting && charIndex > current.length) { isDeleting = true; setTimeout(type, 2000); }
    else if (isDeleting && charIndex === 0) { isDeleting = false; phraseIndex = (phraseIndex + 1) % phrases.length; setTimeout(type, 500); }
    else { setTimeout(type, isDeleting ? 50 : 100); }
}

// 3. Mouse Tracking (Gradient)
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});

// 4. Progress Bar
window.addEventListener('scroll', () => {
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
});

// 5. Theme Toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

// 6. Easter Egg
console.log("%c¡Hola reclutador! 👋", "color: #38bdf8; font-size: 20px; font-weight: bold;");

document.addEventListener('DOMContentLoaded', () => {
    type();
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.replace('dark-mode', 'light-mode');
    }
});
