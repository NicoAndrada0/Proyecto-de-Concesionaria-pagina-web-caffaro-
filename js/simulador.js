function actualizarSimulador() {
    const monto = parseFloat(document.getElementById('montoSlider').value);
    const cuotas = parseInt(document.getElementById('cuotasSelect').value);
    const tasa = parseFloat(document.getElementById('tasaSelect').value);

    const tasaMensual = tasa / 100 / 12;
    const cuotaMensual = monto * (tasaMensual * Math.pow(1 + tasaMensual, cuotas)) / (Math.pow(1 + tasaMensual, cuotas) - 1);
    const totalPagar = cuotaMensual * cuotas;
    const interesTotal = totalPagar - monto;

    document.getElementById('montoValor').textContent = monto.toLocaleString('es-AR', {maximumFractionDigits: 0});
    document.getElementById('cuotaMensual').textContent = cuotaMensual.toLocaleString('es-AR', {maximumFractionDigits: 0});
    document.getElementById('totalPagar').textContent = totalPagar.toLocaleString('es-AR', {maximumFractionDigits: 0});
    document.getElementById('interesTotal').textContent = interesTotal.toLocaleString('es-AR', {maximumFractionDigits: 0});
}

document.addEventListener('DOMContentLoaded', () => actualizarSimulador());