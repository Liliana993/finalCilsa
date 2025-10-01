const contenedor = document.getElementById("productosRemeras");
// arreglo objs productos
const remeras = [
  {
    descripcion: "Remera básica blanca de algodón, cuello redondo.",
    costo: 12999,
    ruta: "\\src\\assets\\img\\remeras\\remera1.jpg"
  },
  {
    descripcion: "Remera negra ajustada, ideal para uso diario.",
    costo: 13999,
    ruta: "\\src\\assets\\img\\remeras\\remera2.jpg"
  },
  {
    descripcion: "Remera estampada con diseño floral en tonos pastel.",
    costo: 15999,
    ruta: "\\src\\assets\\img\\remeras\\remera3.jpg"
  },
  {
    descripcion: "Remera oversize gris claro, estilo urbano.",
    costo: 14999,
    ruta: "\\src\\assets\\img\\remeras\\remera4.jpg"
  },
  {
    descripcion: "Remera celeste con bolsillo frontal pequeño.",
    costo: 13499,
    ruta: "\\src\\assets\\img\\remeras\\remera5.jpg"
  },
  {
    descripcion: "Remera deportiva rosa con tela respirable.",
    costo: 16999,
    ruta: "\\src\\assets\\img\\remeras\\remera6.jpg"
  },
  {
    descripcion: "Remera beige manga corta con corte clásico.",
    costo: 13999,
    ruta: "\\src\\assets\\img\\remeras\\remera7.jpg"
  },
  {
    descripcion: "Remera rayada blanco y negro, estilo marinero.",
    costo: 15499,
    ruta: "\\src\\assets\\img\\remeras\\remera8.jpg"
  },
  {
    descripcion: "Remera verde oliva holgada, 100% algodón.",
    costo: 14499,
    ruta: "\\src\\assets\\img\\remeras\\remera9.jpg"
  },
  {
    descripcion: "Remera roja con cuello en V, cómoda y fresca.",
    costo: 14999,
    ruta: "\\src\\assets\\img\\remeras\\remera10.jpg"
  }
];

//limpio contenido de la seccion
contenedor.innerHTML = "";
let i;
for (i = 0; i < remeras.length; i++) {
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
        <img src="${remeras[i].ruta}" class="card-img-top" alt="Abrigo ${i + 1}">
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
                <h1 class="modal-title fs-5" id="${labelId}">${remeras[i].descripcion}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">
                <p><i class="fa-solid fa-tag"></i> ${remeras[i].descripcion}</p>
                <p><i class="fa-solid fa-dollar-sign"></i> ${remeras[i].costo}</p>
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
