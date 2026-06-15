function enviarFormulario(event) {
    event.preventDefault();
    const form = event.target;
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
    form.reset();
}