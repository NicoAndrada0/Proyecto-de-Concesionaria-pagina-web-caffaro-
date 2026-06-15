const vehiculos = [
    {id: 1, modelo: 'Peugeot 208', tipo: 'sedan', estado: '0km', precio: 4850000, precioOriginal: 5700000, especificaciones: {motor: '1.6L 16v', potencia: '120cv'}, caracteristicas: ['Aire Acondicionado', 'Dirección Asistida', 'Frenos ABS', 'Airbags']},
    {id: 2, modelo: 'Peugeot 2008', tipo: 'suv', estado: '0km', precio: 6500000, precioOriginal: 7200000, especificaciones: {motor: '1.6L Turbo', potencia: '165cv'}, caracteristicas: ['Techo Panorámico', 'Pantalla Táctil', 'Cámara Trasera']},
    {id: 3, modelo: 'Peugeot Partner', tipo: 'comercial', estado: 'usado', precio: 3900000, precioOriginal: 4100000, especificaciones: {motor: '1.6L Diesel', potencia: '75cv'}, caracteristicas: ['Carga Máxima 800kg', 'Volumen 200L']},
    {id: 4, modelo: 'Peugeot Expert', tipo: 'comercial', estado: '0km', precio: 5200000, precioOriginal: 5900000, especificaciones: {motor: '2.0L Diesel', potencia: '130cv'}, caracteristicas: ['Carga Máxima 1200kg', 'GPS Integrado']},
    {id: 5, modelo: 'Peugeot Boxer', tipo: 'comercial', estado: '0km', precio: 7800000, precioOriginal: 8500000, especificaciones: {motor: '2.3L Diesel', potencia: '160cv'}, caracteristicas: ['Carga Máxima 2000kg', 'Aire Acondicionado']},
    {id: 6, modelo: 'Peugeot 3008', tipo: 'suv', estado: '0km', precio: 7200000, precioOriginal: 8000000, especificaciones: {motor: '1.6L Turbo', potencia: '180cv'}, caracteristicas: ['Techo Panorámico', 'Cámara 360°']}
];

function cargarVehiculos() {
    const grid = document.getElementById('gridAutos');
    if (!grid) return;

    grid.innerHTML = vehiculos.map(v => `
        <div class="card-auto">
            <div class="img-box">
                <img src="https://via.placeholder.com/400x250/0057ff/ffffff?text=${v.modelo}" alt="${v.modelo}">
                <span class="badge ${v.estado === '0km' ? 'nuevo' : 'usado'}">${v.estado === '0km' ? 'NUEVO' : 'USADO'}</span>
            </div>
            <div class="contenido">
                <h3>${v.modelo}</h3>
                <div class="info">${v.caracteristicas.map(c => `<span>${c}</span>`).join('')}</div>
                ${v.precioOriginal > v.precio ? `<span class="precio-original">$${v.precioOriginal.toLocaleString()}</span>` : ''}
                <h4>$${v.precio.toLocaleString()}</h4>
                <button onclick="mostrarDetalles(${v.id})">Ver Detalles</button>
            </div>
        </div>
    `).join('');
}

function mostrarDetalles(id) {
    const vehiculo = vehiculos.find(v => v.id === id);
    if (vehiculo) {
        alert(`${vehiculo.modelo}\n\nMotor: ${vehiculo.especificaciones.motor}\nPotencia: ${vehiculo.especificaciones.potencia}\n\n¡Contacta con nosotros para más información!`);
    }
}

function filtrarVehiculos() {
    const tipo = document.getElementById('tipoVehiculo').value;
    const estado = document.getElementById('estado').value;
    const filtrados = vehiculos.filter(v => (!tipo || v.tipo === tipo) && (!estado || v.estado === estado));
    const grid = document.getElementById('gridAutos');
    
    if (filtrados.length === 0) {
        grid.innerHTML = '<p style="text-align:center; grid-column: 1/-1; padding: 50px; color: #666;">No hay vehículos que coincidan</p>';
    } else {
        grid.innerHTML = filtrados.map(v => `
            <div class="card-auto">
                <div class="img-box">
                    <img src="https://via.placeholder.com/400x250/0057ff/ffffff?text=${v.modelo}" alt="${v.modelo}">
                    <span class="badge ${v.estado === '0km' ? 'nuevo' : 'usado'}">${v.estado === '0km' ? 'NUEVO' : 'USADO'}</span>
                </div>
                <div class="contenido">
                    <h3>${v.modelo}</h3>
                    <div class="info">${v.caracteristicas.map(c => `<span>${c}</span>`).join('')}</div>
                    ${v.precioOriginal > v.precio ? `<span class="precio-original">$${v.precioOriginal.toLocaleString()}</span>` : ''}
                    <h4>$${v.precio.toLocaleString()}</h4>
                    <button onclick="mostrarDetalles(${v.id})">Ver Detalles</button>
                </div>
            </div>
        `).join('');
    }
}