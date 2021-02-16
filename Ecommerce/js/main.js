
// import dataBase from './classes.js';
class Products {
    constructor(price, stock, image, description, name, id, marca, cantidad) {
        this.price = price;
        this.stock = stock;
        this.image = image;
        this.name = name;
        this.id = id;
        this.marca = marca;
        this.description = description;
        this.cantidad = cantidad;
    }
}

// console.log("ola");
let producto1 = new Products(4999, 30, "imagenes/imagenesInicio/camara-destacada.webp", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "000000001", "none");

let producto2 = new Products(15999, 20, "imagenes/imagenesInicio/gabinetegamer.webp", "Gabinete Sentey Z20 Lite - Led Rgb", "Gabinete Sentey Z20 Lite - Led Rgb", "000000002", "sentey");

let producto3 = new Products(150999, 10, "imagenes/imagenesInicio/GPU.webp", "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr", "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr", "000000003", "nvidia");

let producto4 = new Products(26999, 16, "imagenes/imagenesInicio/motherboardbarata-destacado.webp", "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4", "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4", "000000004", "gigabyte");

let producto5 = new Products(3999, 16, "imagenes/imagenesInicio/reloj-destacado.webp", "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film", "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film", "000000005", "xiaomi");

let producto6 = new Products(180999, 26, "imagenes/imagenesInicio/rtx 2080ti.webp", "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ", "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ", "000000006", "nvidia");

let producto7 = new Products(5999, 26, "imagenes/imagenesInicio/ssd.webp", "Disco sólido interno Kingston SA400S37/480G 480GB", "Disco sólido interno Kingston SA400S37/480G 480GB", "000000007", "kingston");

let producto8 = new Products(85099, 26, "imagenes/imagenesInicio/indice.webp", "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10", "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10", "000000008", "hp");

let dataBaseMasVendidos = [producto1, producto2, producto3, producto4];
let dataBaseDestacados = [producto5, producto6, producto7, producto8];


function cardCarusel(id, items) {
    let card = document.getElementById(id);
    for (let i = 0; i < 4; i++) {
        console.log(items.length);

        if (items[i].stock > 0) {
            card.innerHTML = card.innerHTML + `
            <div class="col-lg-3 col-md-6 galeria-caja-de-item">
            <a href="">
            <div class="galeria-foto-titulo">
            <img src="${items[i].image}"
            alt="${items[i].description}">
            <h6 class="flotante">${items[i].name}</h6>
            </div>
            <div class="price-shop">
            <h6 class="galeria-precio"> ${items[i].price}$ </h6>
           
            <button value=""   onclick='AddtoCart(${JSON.stringify(items[i])})'>agregar al carrito</button>
            
            </div>
            </a>
            </div>`;
        }
    }
}
//estoyenindex es una variable flag, o sea si está en  el html carrito es NULL y no ejecuta las dos funciones, si esta en index si las ejecuta
let estoyenindex = document.getElementById("galeria-de-productos");
console.log(estoyenindex);
if ((estoyenindex) != null) {
    cardCarusel('filaUno', dataBaseMasVendidos);
    cardCarusel('filaDos', dataBaseDestacados);
}

function addAnotherOne(producto) {
    if (producto.cantidad <= producto.stock)
        producto.cantidad = producto.cantidad + 1;
    return producto;
}

function AddtoCart(product) {
    if (product.stock > 0) {
        console.log("im in");
        product.stock = product.stock - 1;

        console.log("yo soy shopping cart" + shoppingCart)
        shoppingCart.push(product);
        console.log(shoppingCart.length);
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        //como la página se carga de nuevo se muestra solito el shoppingcart por el llamado que está abajo del todo
    }
}
function deleteProduct(product) {
    let newShoppingCart = [];
    let variabledeayuda = 0;
    shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

    for (let i = 0; i < shoppingCart.length; i++) {
        console.log("yo soy producto")
        console.log(product);
        console.log("yo soy shoppingcart")
        console.log(shoppingCart[i]);
        if (product.id == shoppingCart[i].id) {
            console.log("no hago nada")
            variabledeayuda = 1;
        } else {
            console.log("toy aka");
            newShoppingCart[i - variabledeayuda] = shoppingCart[i];
        }
    }
    console.log("dsps de eliminar");
    console.log(newShoppingCart);
    localStorage.setItem("shoppingCart", JSON.stringify(newShoppingCart));
    showCarrito(JSON.parse(localStorage.getItem("shoppingCart")));
}


function showCarrito(shoppingCart) {
    let aux=shoppingCart.length; 
    $("#cart-icon-b").text("Carrito "+aux);
    if (localStorage.getItem("shoppingCart") != null) {
        shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
        console.log(shoppingCart);
        let divDeCompra = document.getElementById("contenedor-de-filas-carrito");
        let preciototal = 0;
        let aux = 0;
        
        for (let i = 0; i < shoppingCart.length; i++) {
            preciototal = preciototal + shoppingCart[i].price;
            aux = aux + `
            <div class="row justify-content-around align-items-center fila__producto ">        
            <div class="col-lg-3 fila__producto__eliminar__ignorar">
            <img src="${shoppingCart[i].image}" alt=" AMD Radeon 6800XT">
                <div class="checkboxes">
                    <div class="checkbox-sub">
                        <button name="eliminar" onclick='deleteProduct(${JSON.stringify(shoppingCart[i])})'>eliminar</button>
                    </div>
                    <div class="checkbox-sub">
                        <label for="ignorar">Ignorar</label>
                        <input type="checkbox" name="eliminar">

                    </div>
                </div>
            </div>
            <div class="col-lg-5">
                <h5> ${shoppingCart[i].name} </h5>
            </div>
            <div class="col-lg-3 fila__producto__numero__precio">
                <input type="number" name="cantidad" id="cantidad--de--productos">
                <!-- <div class="button-minus-plus">
                    <button>
                        <i class="fas fa-minus"></i>
                    </button>
                    <button>
                        <i class="fas fa-plus"></i>
                    </button>
                </div> -->
                <strong class="price"> Precio: ${shoppingCart[i].price}$ </strong>
            </div>
        </div>`
        }
        console.log(aux);
        divDeCompra.innerHTML = aux +
            `<div class="row justify-content-around align-items-center fila__confirmar__pago">
        <div class="col-lg-5">
        </div>
        <div class="col-lg-3">
            <h5>TOTAL: ${preciototal} .-</h5>
        </div>
        <div class="col-lg-3">
            <input type="submit" value="Confirmar compra">
        </div>

        </div>`
        console.log("entre al if del showcarrito")
    }
    if (shoppingCart.length == 0) {
        // console.log("entre al else del showcarrito")
        let divDeCompra = document.getElementById("contenedor-de-filas-carrito");
        divDeCompra.innerHTML = `<div class="row justify-content-around align-items-center fila__producto ">        
        <div class="col-lg-8 fila__producto__eliminar__ignorar">
        </div>
        <div class="col-lg-7">
            <h5> No hay ningún producto en el carrito. </h5>
        </div>
    </div>`
    }
}
let shoppingCart = [];
if (localStorage.getItem("shoppingCart") != null) {
    shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
}

showCarrito(shoppingCart);
















// const baseDatos = [
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