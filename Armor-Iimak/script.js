const slides = document.querySelectorAll('.slide');
let index = 0;

function showNextSlide() {
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');

  const currentSlide = slides[index].querySelector('video');
  if (currentSlide) {
    currentSlide.currentTime = 0;
    currentSlide.play();
    currentSlide.onended = () => showNextSlide();
  } else {
    setTimeout(showNextSlide, 30000);
  }
}

// 🕒 Mostrar fecha y hora (formato 12 horas)
function actualizarFechaHora() {
  const fechaElemento = document.getElementById('fecha-hora');
  const ahora = new Date();

  const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const fecha = ahora.toLocaleDateString('es-CO', opcionesFecha);
  const hora = ahora.toLocaleTimeString('es-CO', { hour12: true }); // 👈 aquí el cambio

  fechaElemento.textContent = `${fecha} | ${hora}`;
}

setInterval(actualizarFechaHora, 1000); // actualizar cada segundo
actualizarFechaHora(); // mostrar de inmediato

setTimeout(showNextSlide, 30000);
