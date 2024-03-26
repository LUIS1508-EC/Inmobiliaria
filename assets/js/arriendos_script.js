let contenidoArriendos = '';
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
              <i class="fas fa-bed"></i> ${arriendo.habitaciones} Habitaciones |
              <i class="fas fa-bath"></i> ${arriendo.banos} Baños
            </p>
            <p><i class="fas fa-dollar-sign"></i> ${arriendo.costo}</p>
            <p class="${arriendo.smoke ? 'text-success' : 'text-danger'}">
              <i class="fas fa-smoking${arriendo.smoke ? '' : '-ban'}"></i> ${
          arriendo.smoke ? 'Puedes fumar' : 'No puedes fumar'
        }
            </p>
            <p class="${arriendo.pets ? 'text-success' : 'text-danger'}">
              <i class="fa-solid fa-${arriendo.pets ? 'paw' : 'ban'}"></i> ${
          arriendo.pets ? 'Se permiten mascotas' : 'No se permiten mascotas'
        }
            </p>
          </div>
        </div>
      </div>
              `;

        contenidoArriendos += arriendoHtml;
      }

      arriendo1.innerHTML = contenidoArriendos;

      
