var countDownDate = new Date("Dec 5, 2026 18:30:00").getTime();

var x = setInterval(function() {

  var now = new Date().getTime();

  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  document.getElementById("day").innerHTML = days;
  document.getElementById("hour").innerHTML = hours;
  document.getElementById("min").innerHTML = minutes;
  document.getElementById("sec").innerHTML = seconds;
  

  if (distance < 0) {
    clearInterval(x);  
  }
}, 1000);

const formulario = document.getElementById("sendConfirmation");

formulario.addEventListener("submit", function(event) {
    event.preventDefault();

    correo();
    formulario.style.display = 'none';
});

function correo(){
  let familia = document.getElementById("nombre").value;
  let telefono = document.getElementById("telefono").value;
  let asistencia = "";

  const chkSi = document.getElementById("si");
  const chkNo = document.getElementById("no");
  
  const pSubtitle = document.getElementById("pSubtitle");
  const pConfirm = document.getElementById("pConfirm");

  if (chkSi.checked){
    asistencia = "Si";
  }

  if (chkNo.checked){
    asistencia = "No";
  }

  var templateParams = {
    familia: familia,
    telefono: telefono,
    asistencia: asistencia
  };

emailjs.send('service_lxy6r4q', 'template_886tl1s', templateParams).then(
  (response) => {
    console.log('SUCCESS!', response.status, response.text);
  },
  (error) => {
    console.log('FAILED...', error);
  },
);

  pConfirm.style.removeProperty("display");
  pSubtitle.style.display = "none";
}

// Abre el modal al cargar la página
window.onload = function() {
  const modal = document.getElementById("mi-modal");
  modal.showModal(); // Método nativo que abre el modal y bloquea el fondo
  document.body.classList.add('no-scroll');
};

// Función para cerrar el modal
function cerrarModal() {
  const modal = document.getElementById("mi-modal");
  modal.close();

  const audio = document.getElementById("bgAudio");
  audio.volume = 0.3; // por si no lo seteaste ya en otro lado
  audio.play().catch((err) => {
    console.log('No se pudo reproducir el audio:', err);
  });

  document.body.classList.remove('no-scroll');
}
