let sumArriendos = '';
const arriendo1 = document.querySelector('.arriendos');

for (const arriendo of propiedades_arriendo) {
  const arriendoHtml = `
      <div class="col-md-4 mb-4">
        <div class="card">
          <img
            src="${arriendo.src}"
            class="card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">
              ${arriendo.nombre}
            </h5>
            <p class="card-text">
              ${arriendo.descripcion}
            </p>
            <p>
              <i class="fas fa-map-marker-alt"></i> ${arriendo.ubicacion}
            </p>
            <p>
              <i class="fas fa-bed"></i> ${arriendo.cuartos} Habitaciones |
              <i class="fas fa-bath"></i> ${arriendo.baños} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${arriendo.costo}</p>
            <p class="${arriendo.fumar ? 'text-success' : 'text-danger'}">
              <i class="fas fa-smoking${arriendo.fumar ? '' : ''}"></i> ${arriendo.fumar ? 'Puedes fumar' : 'No puedes fumar'
    }
            </p>
            <p class="${arriendo.mascotas ? 'text-success' : 'text-danger'}">
              <i class="fa-solid fa-${arriendo.mascotas ? 'paw' : 'ban'}"></i> ${arriendo.mascotas ? 'Se permiten mascotas' : 'No se permiten mascotas'
    }
            </p>
          </div>
        </div>
      </div>
              `;

  sumArriendos += arriendoHtml;
}

arriendo1.innerHTML = sumArriendos;


