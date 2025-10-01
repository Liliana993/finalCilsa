const contenedor = document.getElementById("productosJeans");
// arreglo objs productos
const jeans = [
  {
    descripcion: "Jean skinny azul clásico, tiro medio.",
    costo: 28999,
    ruta: "\\src\\assets\\img\\jeans\\jean1.jpg"
  },
  {
    descripcion: "Jean mom fit celeste claro, estilo retro.",
    costo: 31999,
    ruta: "\\src\\assets\\img\\jeans\\jean2.jpg"
  },
  {
    descripcion: "Jean recto negro con acabado deslavado.",
    costo: 29999,
    ruta: "\\src\\assets\\img\\jeans\\jean3.jpg"
  },
  {
    descripcion: "Jean wide leg azul oscuro con bolsillos amplios.",
    costo: 33999,
    ruta: "\\src\\assets\\img\\jeans\\jean4.jpg"
  },
  {
    descripcion: "Jean chupín gris con detalles desgastados.",
    costo: 27999,
    ruta: "\\src\\assets\\img\\jeans\\jean5.jpg"
  },
  {
    descripcion: "Jean bootcut azul medio, corte clásico.",
    costo: 32999,
    ruta: "\\src\\assets\\img\\jeans\\jean6.jpg"
  },
  {
    descripcion: "Jean boyfriend azul claro con efecto gastado.",
    costo: 30999,
    ruta: "\\src\\assets\\img\\jeans\\jean7.jpg"
  },
  {
    descripcion: "Jean cropped azul oscuro con ruedo deshilachado.",
    costo: 28999,
    ruta: "\\src\\assets\\img\\jeans\\jean8.jpg"
  },
  {
    descripcion: "Jean recto celeste desgastado estilo vintage.",
    costo: 31999,
    ruta: "\\src\\assets\\img\\jeans\\jean9.jpg"
  },
  {
    descripcion: "Jean wide leg negro con corte moderno.",
    costo: 34999,
    ruta: "\\src\\assets\\img\\jeans\\jean10.jpg"
  }
];


//limpio contenido de la seccion
contenedor.innerHTML = "";
let i;
for (i = 0; i < jeans.length; i++) {
  let cardModal = document.createElement("div");
  cardModal.setAttribute("class", "col-12 col-sm-6 col-md-4 d-flex justify-content-center mb-4");

  // ids únicos
  const modalId = `modal${i}`;
  const labelId = `modalLabel${i}`;
  const titulo =`Producto ${i+1}:`;

  cardModal.innerHTML = `
    <div class="card text-center mb-3" style="width: 15rem;">
      <div class="card-body">
        <h5 class="card-title">${titulo}</h5>
        <img src="${jeans[i].ruta}" class="card-img-top" alt="Abrigo ${i + 1}">
        <!-- Botón despliega modal -->
        <button type="button" class="btn btn-primary mt-3" data-bs-toggle="modal" data-bs-target="#${modalId}">
          Ver más
        </button>
        <!-- Modal -->
        <div class="modal fade" id="${modalId}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
          aria-labelledby="${labelId}" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h1 class="modal-title fs-5" id="${labelId}">${jeans[i].descripcion}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><i class="fa-solid fa-tag"></i> ${jeans[i].descripcion}</p>
                <p><i class="fa-solid fa-dollar-sign"></i> ${jeans[i].costo}</p>
              </div>
              <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Cerrar</button>
                <button class="btn btn-primary"><i class="fa-solid fa-cart-shopping"></i> Comprar</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  contenedor.appendChild(cardModal);
}
