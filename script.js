const tabs = document.querySelectorAll('.tab-btn');
const contents = document.querySelectorAll('.tab-content');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = tab.dataset.target;
        tabs.forEach(t => t.classList.remove('active'));
        contents.forEach(c => c.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(target).classList.add('active');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});

const phrases = ["Full-Stack Developer", "Blockchain Specialist", "Laravel & React Expert"];
let pIdx = 0, cIdx = 0, isDel = false;
const el = document.getElementById("typewriter");

function type() {
    const current = phrases[pIdx];
    el.textContent = isDel ? current.substring(0, cIdx--) : current.substring(0, cIdx++);
    if (!isDel && cIdx > current.length) { isDel = true; setTimeout(type, 2000); }
    else if (isDel && cIdx === 0) { isDel = false; pIdx = (pIdx + 1) % phrases.length; setTimeout(type, 500); }
    else { setTimeout(type, isDel ? 50 : 100); }
}

document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});

window.addEventListener('scroll', () => {
    const bar = document.getElementById("progress-bar");
    const pct = (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100;
    bar.style.width = pct + "%";
});

const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode', !isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
});

document.addEventListener('DOMContentLoaded', () => {
    type();
    if (localStorage.getItem('theme') === 'light') {
        document.body.classList.replace('dark-mode', 'light-mode');
    }
});
