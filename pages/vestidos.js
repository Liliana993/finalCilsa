const contenedor = document.getElementById("productosVestidos");
// arreglo objs productos
const vestidos = [
  {
    titulo: "Vestido entallado",
    descripcion: "Vestido verde, con tajo al frente.",
    costo: 44999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido1.jpg"
  },
  {
    titulo: "Vestido de tul",
    descripcion: "Vestido largo azul noche, corte princesa, elegante.",
    costo: 72999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido2.jpg"
  },
  {
    titulo: "Vestido entallado",
    descripcion: "Vestido midi floral, estilo casual y fresco.",
    costo: 53999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido3.jpg"
  },
  {
    titulo: "Vestido con brillo",
    descripcion: "Vestido corte princesa con transparencia escote en V, formal.",
    costo: 61999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido4.jpg"
  },
  {
    titulo: "Vestido clásico",
    descripcion: "Vestido clásico con toques mediavales.",
    costo: 49999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido5.jpg"
  },
  {
    titulo: "Vestido entallado",
    descripcion: "Vestido largo verde con abertura lateral, elegante.",
    costo: 74999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido6.jpg"
  },
  {
    titulo: "Vestido entallado",
    descripcion: "Vestido corto rosa pastel, estilo romántico.",
    costo: 46999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido7.jpg"
  },
  {
    titulo: "Vestido entallado",
    descripcion: "Vestido midi azul celeste con estampado discreto.",
    costo: 51999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido8.jpg"
  },
  {
    titulo: "Vestido formal",
    descripcion: "Vestido recto negro con detalles de encaje.",
    costo: 59999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido9.jpg"
  },
  {
    titulo: "Vestido formal",
    descripcion: "Vestido largo estampado multicolor, estilo bohemio.",
    costo: 67999,
    ruta: "\\src\\assets\\img\\vestidos\\vestido10.jpg"
  }
];



//limpio contenido de la seccion
contenedor.innerHTML = "";
let i;
for (i = 0; i < vestidos.length; i++) {
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
        <img src="${vestidos[i].ruta}" class="card-img-top" alt="Abrigo ${i + 1}">
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
                <h1 class="modal-title fs-5" id="${labelId}">${vestidos[i].titulo}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><i class="fa-solid fa-tag"></i> ${vestidos[i].descripcion}</p>
                <p><i class="fa-solid fa-dollar-sign"></i> ${vestidos[i].costo}</p>
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

