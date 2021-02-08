let carrito = [];
if (localStorage.getItem("carrito") != null) {
  carrito = JSON.parse(localStorage.getItem("carrito"));
  document.getElementById("contador").innerHTML = carrito.length;
}

class Producto {
  constructor(nombreMarca, precioProducto, stockProducto, imagenProducto) {
    this.nombre = nombreMarca;
    this.precio = precioProducto;
    this.stock = stockProducto;
    this.imagen = imagenProducto;
  }
}

let producto1 = new Producto(
  "Zapatillas Airmax",
  750,
  3,
  "https://soyunperro.com/wp-content/uploads/perrocontento.jpg"
);
let producto2 = new Producto(
  "Zapatillas Jagguar",
  7500,
  "3",
  "https://www.hola.com/imagenes/estar-bien/20190517141961/secretos-felicidad-perros-cs/0-678-903/xxx-m.jpg"
);
let producto3 = new Producto(
  "Zapatillas Adidas",
  700,
  "3",
  "https://cdn.redcanina.es/wp-content/uploads/2019/03/04122838/happy-dog-750x375.jpg"
);
let producto4 = new Producto(
  "Zapatillas Mercurial",
  830,
  "3",
  "https://www.caninosbogotanos.com/wp-content/uploads/2020/04/perro-feliz.jpg"
);
let producto5 = new Producto(
  "Changlas Atr OFERTA",
  10,
  "3",
  "https://soyunperro.com/wp-content/uploads/2019/10/perro-feliz.jpg"
);
let producto6 = new Producto(
  "Changlas Atr OFERTA",
  10,
  0,
  "https://soyunperro.com/wp-content/uploads/2019/10/perro-feliz.jpg"
);

let baseDeDatos = [
  producto1,
  producto2,
  producto3,
  producto4,
  producto5,
  producto6,
];

let aux = ``;
for (let i = 0; i < baseDeDatos.length; i++) {
  if (baseDeDatos[i].stock > 0) {
    aux += `
    <div class="col-lg-4 col-md-6 mb-4">
    <div class="card h-100">
    <a href="#"><img class="card-img-top" src="${
      baseDeDatos[i].imagen
    }" alt=""></a>
    <div class="card-body d-flex" style="align-items:flex-end">
    <div>
    <h4 class="card-title">
    <a href="#">${baseDeDatos[i].nombre}</a>
    </h4>
    <h5>$${baseDeDatos[i].precio}</h5>
    </div>
    </div>
    <div class="card-footer">
    <button class="btn btn-primary" style="width:100%" 
    onclick='agregarAlCarrito(${JSON.stringify(
      baseDeDatos[i]
    )})'>Agregar al carrito</button>
    </div>
    </div>
    </div>
    `;
  } else {
    aux += `
    <h2>No tenemos stock</h2>`;
  }
}

document.getElementById("productos").innerHTML = aux;

// TODO Funcionamiento de carrito

function agregarAlCarrito(producto) {
  carrito.push(producto);
  localStorage.setItem("carrito", JSON.stringify(carrito));

  let aux = 0;
  for (let i = 0; i < carrito.length; i++) {
    aux += carrito[i].precio;
  }

  // document.getElementById("precio-total").innerHTML = "U$S" +aux;
  document.getElementById("contador").innerHTML = carrito.length;
}

function borrarUnProducto() {
  const nuevoCarrito = [];
  for (let i = 0; i < carrito.length; i++) {
    if (i != 1) {
      nuevoCarrito.push(carrito[i]);
    }
  }
  localStorage.setItem("carrito", JSON.stringify(nuevoCarrito));
  carrito = nuevoCarrito;
  document.getElementById("contador").innerHTML = carrito.length;
}

document
  .getElementById("boton-toto")
  .addEventListener("click", saludarALosCoders);

function saludarALosCoders(event) {
  if(event.target.value.length < 4){
    alert("La contraseña debe tener mas de 3 caracteres");
  }
  // console.log("funciona");
  // document
  //   .getElementById("boton-toto")
  //   .removeEventListener("click", saludarALosCoders, false);
}


Math.random(123132131231);