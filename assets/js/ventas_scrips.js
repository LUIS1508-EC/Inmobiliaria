let sumVentas = '';
const venta1 = document.querySelector('.ventas');

for (const venta2 of propiedades_venta) {
  const ventaHtml = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${venta2.src}"
            class="card-img-top"
            alt="Imagen del departamento"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${venta2.nombre}
            </h5>
            <p class="card-text">
              ${venta2.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${venta2.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${venta2.cuartos} Habitaciones |
              <i class="fas fa-bath"></i> ${venta2.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${venta2.costo}</p>
            <p class="${venta2.fumar ? 'text-success' : 'text-danger'}">
              <i class="fas fa-smoking${venta2.fumar ? '' : ''}"></i> ${venta2.fumar ? 'Puedes fumar' : 'No puedes fumar'
    }
            </p>
            <p class="${venta2.mascotas ? 'text-success' : 'text-danger'}">
              <i class="fa-solid fa-${venta2.mascotas ? 'paw' : 'ban'}"></i> ${venta2.mascotas ? 'Se permiten mascotas' : 'No se permiten mascotas'
    }
            </p>
          </div>
        </div>
      </div>
              `;

  sumVentas += ventaHtml;
}

venta1.innerHTML = sumVentas;