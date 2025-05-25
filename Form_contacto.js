// Inicializa EmailJS con tu Public Key
(function() {
  emailjs.init("fe48kYhUP6GyZmD2N");
})();

document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Obtención de valores del formulario
  let nombre = this.nombre.value.trim();
  let apellido1 = this.apellido1.value.trim();
  let apellido2 = this.apellido2.value.trim();
  let email = this.email.value.trim();
  let telefono = this.telefono.value.trim();
  let msg = '';

  // Validación básica
  if (!nombre || !apellido1 || !email) {
    msg = 'Por favor, rellena los campos obligatorios marcados con *';
    document.getElementById('formMsg').textContent = msg;
    document.getElementById('formMsg').style.color = '#ff3333';
    return;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    msg = 'Por favor, introduce un email válido.';
    document.getElementById('formMsg').textContent = msg;
    document.getElementById('formMsg').style.color = '#ff3333';
    return;
  }

  // Lógica para destinatario dinámico
  // Sustituye 'correo_especial@ejemplo.com' y 'correo_habitual@ejemplo.com' por los que tú quieras
  let destinatario = (email === "correo_especial@ejemplo.com")
    ? "correo_destino_especial@ejemplo.com"
    : "correo_habitual@ejemplo.com";

  // Envío con EmailJS
  emailjs.send("service_1v4n1u5", "template_og1who8", {
      nombre: nombre,
      apellido1: apellido1,
      apellido2: apellido2,
      email: email,
      telefono: telefono,
      destinatario: destinatario
    })
    .then(function(response) {
      msg = '¡Formulario enviado correctamente!';
      document.getElementById('contactForm').reset();
      document.getElementById('formMsg').style.color = '#00ff00';
      document.getElementById('formMsg').textContent = msg;
    }, function(error) {
      msg = 'Error al enviar el formulario. Inténtalo de nuevo.';
      document.getElementById('formMsg').style.color = '#ff3333';
      document.getElementById('formMsg').textContent = msg;
    });
});
