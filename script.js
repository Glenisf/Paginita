const memories = [
    { img: 'im1.jpeg', text: 'Tu sonrisa es lo que más amo en el mundo.' },
    { img: 'im2.jpeg', text: 'El día es lindo si tú estás en él.' },
    { img: 'im3.jpeg', text: 'Eres la persona más especial.' },
    { img: 'im4.jpeg', text: 'Me encanta cómo brillas.' },
    { img: 'im5.jpeg', text: 'Siempre estás en mi mente.' },
    { img: 'im6.jpeg', text: 'Te amo mil millones!' },
    { img: 'im7.jpeg', text: 'Gracias por ser tú.' },
    { img: 'im8.jpeg', text: 'Cada momento contigo vale oro.' },
    { img: 'im9.jpeg', text: 'Eres arte en cada detalle mi niña.' },
    { img: 'im10.jpeg', text: 'Sos la mejor del mundo entero mi pequeño ángel.' }
];

const heartsLayer = document.getElementById('hearts-layer');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalText = document.getElementById('modal-text');

// Posiciones optimizadas para que quepan en pantalla vertical
const positions = [
    {top: '15%', left: '42%'}, {top: '25%', left: '20%'},
    {top: '28%', left: '65%'}, {top: '42%', left: '10%'},
    {top: '45%', left: '75%'}, {top: '35%', left: '45%'},
    {top: '55%', left: '30%'}, {top: '52%', left: '55%'},
    {top: '10%', left: '30%'}, {top: '20%', left: '60%'}
];

memories.forEach((memory, index) => {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.innerHTML = '❤️';
    heart.style.top = positions[index].top;
    heart.style.left = positions[index].left;
    heart.style.animationDelay = `${Math.random() * 2}s`;

    // "touchstart" es más rápido en cel, pero "onclick" funciona bien en ambos
    heart.onclick = (e) => {
        e.preventDefault(); // Evita comportamientos extraños en cel
        modalImg.src = memory.img;
        modalText.innerText = memory.text;
        modal.style.display = 'block';
    };

    heartsLayer.appendChild(heart);
});

// Cerrar al tocar fuera o en el botón (mejorado para cel)
modal.onclick = (event) => {
    if (event.target == modal || event.target.className === 'close-btn') {
        modal.style.display = 'none';
    }
};