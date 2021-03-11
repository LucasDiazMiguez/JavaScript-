"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Products = function Products(price, stock, image, description, name, id, marca, cantidadAgregada) {
  _classCallCheck(this, Products);

  this.price = price;
  this.stock = stock;
  this.image = image;
  this.name = name;
  this.id = id;
  this.marca = marca;
  this.description = description;
  this.cantidadAgregada = cantidadAgregada;
};

var producto1 = new Products(4999, 30, "imagenes/imagenesInicio/camara-destacada.webp", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "000000001", "none", 0);
var producto2 = new Products(15999, 20, "imagenes/imagenesInicio/gabinetegamer.webp", "Gabinete Sentey Z20 Lite - Led Rgb", "Gabinete Sentey Z20 Lite - Led Rgb", "000000002", "sentey", 0);
var producto3 = new Products(150999, 10, "imagenes/imagenesInicio/GPU.webp", "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr", "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr", "000000003", "nvidia", 0);
var producto4 = new Products(26999, 16, "imagenes/imagenesInicio/motherboardbarata-destacado.webp", "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4", "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4", "000000004", "gigabyte", 0);
var producto5 = new Products(3999, 16, "imagenes/imagenesInicio/reloj-destacado.webp", "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film", "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film", "000000005", "xiaomi", 0);
var producto6 = new Products(180999, 26, "imagenes/imagenesInicio/rtx 2080ti.webp", "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ", "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ", "000000006", "nvidia", 0);
var producto7 = new Products(5999, 26, "imagenes/imagenesInicio/ssd.webp", "Disco sólido interno Kingston SA400S37/480G 480GB", "Disco sólido interno Kingston SA400S37/480G 480GB", "000000007", "kingston", 0);
var producto8 = new Products(85099, 26, "imagenes/imagenesInicio/indice.webp", "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10", "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10", "000000008", "hp", 0);
var dataBaseMasVendidos = [producto1, producto2, producto3, producto4];
var dataBaseDestacados = [producto5, producto6, producto7, producto8];
fetch('../json/productos.json').then(function (response) {
  return response.json();
}).then(function (data) {
  console.log("los datos se cargaron correctamente");
  console.log(data);
});

function cardCarusel(id, items) {
  var card = document.getElementById(id);

  for (var i = 0; i < 4; i++) {
    console.log(items.length);

    if (items[i].stock > 0) {
      var idi = items[i].id + "check";
      var idb = items[i].id + "button";
      console.log(idi);
      card.innerHTML = card.innerHTML + "\n            <div class=\"col-lg-3     col-md-6 box-gallery-item\">\n            <div id=\"\">\n            <img src=\"".concat(items[i].image, "\"\n                alt=\"").concat(items[i].description, "\">\n            <h6 class=\"item-name\">").concat(items[i].name, "</h6>\n            <h6 class=\"cardprice\">$ ").concat(items[i].price, " </h6>\n            <button id=\"").concat(idb, "\"value=\"\"   onclick='AddtoCart(").concat(JSON.stringify(items[i]), ")'>agregar al carrito <i id=\"").concat(idi, "\" class=\"fas fa-check normal\"></i></button>\n        </div>\n        </div>\n            ");
    }
  }
}

function addCheck(product) {
  var idi = document.getElementById(product.id + "check");
  console.log(idi);
  console.log("asjdflsdkf");
  idi.classList.remove("normal");
  idi.classList.add("animation-class");
  setTimeout(function () {
    idi.classList.remove("animation-class");
    idi.classList.add("normal");
  }, 2000);
}

function AddtoCart(product) {
  if (product.stock > 0) {
    console.log("im in");
    product.stock = product.stock - 1;
    var flag = 0;

    for (var i = 0; i < shoppingCart.length; i++) {
      if (product.id == shoppingCart[i].id) {
        shoppingCart[i].cantidadAgregada = shoppingCart[i].cantidadAgregada + 1;
        flag = 1;
      }
    }

    if (flag == 0) {
      product.cantidadAgregada = product.cantidadAgregada + 1;
      console.log("entro acá");
      console.log(product.cantidadAgregada);
      shoppingCart.push(product);
    }

    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }

  var index = document.getElementById("gallery-products");

  if (index != null) {
    addCheck(product);
  }

  showCarrito(shoppingCart);
  cardlength();
}

function deleteProduct(product) {
  var newShoppingCart = [];
  var variabledeayuda = 0;
  shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

  for (var i = 0; i < shoppingCart.length; i++) {
    console.log(product);
    console.log(shoppingCart[i]);

    if (product.id == shoppingCart[i].id) {
      if (product.cantidadAgregada > 1) {
        shoppingCart[i].cantidadAgregada = shoppingCart[i].cantidadAgregada - 1;
        newShoppingCart[i] = shoppingCart[i];
      } else {
        variabledeayuda = 1;
      }
    } else {
      console.log("toy aka");
      newShoppingCart[i - variabledeayuda] = shoppingCart[i];
    }
  }

  console.log("dsps de eliminar");
  console.log(newShoppingCart);
  shoppingCart = newShoppingCart;
  localStorage.setItem("shoppingCart", JSON.stringify(newShoppingCart));
  showCarrito(JSON.parse(localStorage.getItem("shoppingCart")));
  cardlength();
}

function cardlength() {
  var aux = shoppingCart.length;
  $("#cart-icon-b").text("Carrito " + aux);
}

function showCarrito(shoppingCart) {
  cardlength();

  if (localStorage.getItem("shoppingCart") != null) {
    shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(shoppingCart);
    var divDeCompra = document.getElementById("contenedor-de-filas-carrito");
    var preciototal = 0;
    var aux = 0;

    for (var i = 0; i < shoppingCart.length; i++) {
      preciototal = preciototal + shoppingCart[i].cantidadAgregada * shoppingCart[i].price;
      aux = aux + "\n            <div class=\"row justify-content-around align-items-center fila__producto \">\n            <div class=\"col-lg-3 fila__producto__eliminar__ignorar\">\n                <img src=\"".concat(shoppingCart[i].image, "\" alt=\" AMD Radeon 6800XT\">\n                <div class=\"checkboxes\">\n                    <div class=\"checkbox-sub\">\n                        <button name=\"eliminar\"\n                            onclick='deleteProduct(").concat(JSON.stringify(shoppingCart[i]), ")'>eliminar</button>\n                    </div>\n                    <div class=\"checkbox-sub\">\n                        <label for=\"ignorar\">Ignorar</label>\n                        <input type=\"checkbox\" name=\"eliminar\">\n                    </div>\n                </div>\n            </div>\n            <div class=\"col-lg-5\">\n                <h5> ").concat(shoppingCart[i].name, " </h5>\n            </div>\n            <div class=\"col-lg-4 fila__producto__numero__precio\">\n                <div>\n                    <button onclick='deleteProduct(").concat(JSON.stringify(shoppingCart[i]), ")'>\n                        <i class=\"fas fa-minus\"></i>\n                    </button>\n                    <input type=\"number\" value=\"").concat(shoppingCart[i].cantidadAgregada, "\" name=\"cantidad\"\n                        id=\"cantidad--de--productos\">\n                    <button onclick='AddtoCart(").concat(JSON.stringify(shoppingCart[i]), ")'>\n                        <i class=\"fas fa-plus\"></i>\n                    </button>\n                </div>\n                <strong class=\"price\"> Precio: ").concat(shoppingCart[i].cantidadAgregada * shoppingCart[i].price, "$ </strong>\n            </div>\n            </div>\n            ");
    }

    console.log(aux);
    divDeCompra.innerHTML = aux + "<div class=\"row justify-content-around align-items-center fila__confirmar__pago\">\n        <div class=\"col-lg-5\">\n        </div>\n        <div class=\"col-lg-3\">\n            <h5>TOTAL: ".concat(preciototal, " .-</h5>\n        </div>\n        <div class=\"col-lg-3\">\n            <input type=\"submit\" value=\"Confirmar compra\">\n        </div>\n\n        </div>");
  }

  if (shoppingCart.length == 0) {
    // console.log("entre al else del showcarrito")
    var _divDeCompra = document.getElementById("contenedor-de-filas-carrito");

    _divDeCompra.innerHTML = "<div class=\"row justify-content-around align-items-center fila__producto \">        \n        <div class=\"col-lg-8 fila__producto__eliminar__ignorar\">\n        </div>\n        <div class=\"col-lg-7\">\n            <h5> No hay ning\xFAn producto en el carrito. </h5>\n        </div>\n    </div>";
  }
} //index its a flag variable, if it isnt in index html, index=null,else  equals something different than null


var index = document.getElementById("gallery-products");

if (index != null) {
  cardCarusel('row-One', dataBaseMasVendidos);
  cardCarusel('row-Two', dataBaseDestacados);
}

var shoppingCart = [];

if (localStorage.getItem("shoppingCart") != null) {
  shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
}

showCarrito(shoppingCart); // const baseDatos = [
//     { imagen: "23232", tipo: "banner", precio: 900 },
//     { imagen: "23232", tipo: "poster", precio: 900 },
//   ];
//   let acumuladorDeBanners = ``;
//   let acumuladorDePosters = ``;
//   for (i = 0; i < baseDatos.length; i++) {
//     if (baseDatos[i].tipo === "banner") {
//       acumuladorDeBanners += `
//       <div>    
//       <div class="card" style="width: 30rem">
//       <img
//       src="${baseDatos[i].imagen}"
//       class="card-img-top"
//       alt="..."
//       />
//       <div class="card-body">
//       <h3>${baseDatos[i].tipo}</h3>
//       <p class="card-text"><h5>$${baseDatos[i].precio}</h5></p>
//       <button href="#!" class="btn btn-primary" onclick='sumar(${JSON.stringify(
//         baseDatos[i]
//       )})'>  :carrito_de_compras: Agregar</button>  
//       <button href="#" class="btn btn-primary" onclick='borrarProd(${JSON.stringify(
//         baseDatos[i]
//       )})'>  :x:Quitar del carrito</button>
//       </div>
//       </div>
//       `;
//     } else if (baseDatos[i].tipo === "poster") {
//       acumuladorDePosters += `
//       <div>    
//       <div class="card" style="width: 30rem">
//       <img
//       src="${baseDatos[i].imagen}"
//       class="card-img-top"
//       alt="..."
//       />
//       <div class="card-body">
//       <h3>${baseDatos[i].tipo}</h3>
//       <p class="card-text"><h5>$${baseDatos[i].precio}</h5></p>
//       <button href="#!" class="btn btn-primary" onclick='sumar(${JSON.stringify(
//         baseDatos[i]
//       )})'>  :carrito_de_compras: Agregar</button>  
//       <button href="#" class="btn btn-primary" onclick='borrarProd(${JSON.stringify(
//         baseDatos[i]
//       )})'>  :x:Quitar del carrito</button>
//       </div>
//       </div>
//       `;
//     }
//   }
//   console.log(acumuladorDeCuardernos);
//   document.getElementById("productos").innerHTML = acumuladorDeBanners;
//   document.getElementById("producto-posters").innerHTML = acumuladorDePosters;