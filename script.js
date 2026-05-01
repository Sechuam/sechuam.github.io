// 1. Efecto Typewriter (Escritura)
const text = "Full-Stack Developer";
const speed = 100; // milisegundos
let i = 0;

function typeWriter() {
    if (i < text.length) {
        document.getElementById("typewriter").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    }
}

// 2. Seguimiento del ratón para el degradado de fondo
document.addEventListener('mousemove', (e) => {
    document.documentElement.style.setProperty('--x', e.clientX + 'px');
    document.documentElement.style.setProperty('--y', e.clientY + 'px');
});

// Iniciar funciones al cargar la página
window.onload = () => {
    typeWriter();
};
