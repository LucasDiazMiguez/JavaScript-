
class Products {
    constructor(price, stock, image, description, name, id, marca, cantidadAgregada) {
        this.price = price;
        this.stock = stock;
        this.image = image;
        this.name = name;
        this.id = id;
        this.marca = marca;
        this.description = description;
        this.cantidadAgregada = cantidadAgregada;
    }
}

let producto1 = new Products(4999, 30, "imagenes/imagenesInicio/camara-destacada.webp", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "000000001", "none", 0);

let producto2 = new Products(15999, 20, "imagenes/imagenesInicio/gabinetegamer.webp", "Gabinete Sentey Z20 Lite - Led Rgb", "Gabinete Sentey Z20 Lite - Led Rgb", "000000002", "sentey", 0);

let producto3 = new Products(150999, 10, "imagenes/imagenesInicio/GPU.webp", "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr", "Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr", "000000003", "nvidia", 0);

let producto4 = new Products(26999, 16, "imagenes/imagenesInicio/motherboardbarata-destacado.webp", "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4", "Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4", "000000004", "gigabyte", 0);

let producto5 = new Products(3999, 16, "imagenes/imagenesInicio/reloj-destacado.webp", "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film", "Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film", "000000005", "xiaomi", 0);

let producto6 = new Products(180999, 26, "imagenes/imagenesInicio/rtx 2080ti.webp", "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ", "Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ", "000000006", "nvidia", 0);

let producto7 = new Products(5999, 26, "imagenes/imagenesInicio/ssd.webp", "Disco sólido interno Kingston SA400S37/480G 480GB", "Disco sólido interno Kingston SA400S37/480G 480GB", "000000007", "kingston", 0);

let producto8 = new Products(85099, 26, "imagenes/imagenesInicio/indice.webp", "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10", "Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10", "000000008", "hp", 0);

let dataBaseMasVendidos = [producto1, producto2, producto3, producto4];
let dataBaseDestacados = [producto5, producto6, producto7, producto8];
fetch('../json/productos.json')
    .then(function (response) {
        return response.json();
    })
    .then(function (data) {
        console.log("los datos se cargaron correctamente");
        console.log(data);
    })

function cardCarusel(id, items) {
    let card = document.getElementById(id);
    for (let i = 0; i < 4; i++) {
        console.log(items.length);

        if (items[i].stock > 0) {
            card.innerHTML = card.innerHTML + `
            <div class="col-lg-3     col-md-6 box-gallery-item">
            <div id="cardtick">
            <img src="${items[i].image}"
                alt="${items[i].description}">
            <h6 class="item-name">${items[i].name}</h6>
            <h6 class="cardprice">$ ${items[i].price} </h6>
            <button id="${items[i].id}"value=""   onclick='AddtoCart(${JSON.stringify(items[i])})'>agregar al carrito</button>
        </div>
        </div>
            `;
        }
    }
}
function AddtoCart(product) {
    if (product.stock > 0) {
        console.log("im in");
        product.stock = product.stock - 1;
        let flag = 0;
        console.log("yo soy shopping cart" + shoppingCart)
        for (let i = 0; i < shoppingCart.length; i++) {
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
        let  inicio = document.getElementById("gallery-products");

        if (inicio!=null) {
            let bottonCheck = document.getElementById(product.id);//this is the same Id as the card object
            bottonCheck.innerHTML = bottonCheck.innerHTML + `<i class="fas fa-check"></i>`;
        }

    }
    showCarrito(shoppingCart);
    cardlength();
}
function deleteProduct(product) {
    let newShoppingCart = [];
    let variabledeayuda = 0;

    shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));

    for (let i = 0; i < shoppingCart.length; i++) {
        console.log(product);
        console.log(shoppingCart[i]);
        if (product.id == shoppingCart[i].id) {
            if (product.cantidadAgregada>1) {
                shoppingCart[i].cantidadAgregada=shoppingCart[i].cantidadAgregada-1;
                newShoppingCart[i] = shoppingCart[i];
            }else{
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
    let aux = shoppingCart.length;
    $("#cart-icon-b").text("Carrito " + aux);
}
function showCarrito(shoppingCart) {
    cardlength();
    if (localStorage.getItem("shoppingCart") != null) {
        shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
        console.log(shoppingCart);
        let divDeCompra = document.getElementById("contenedor-de-filas-carrito");
        let preciototal = 0;
        let aux = 0;

        for (let i = 0; i < shoppingCart.length; i++) {
            preciototal = preciototal + (shoppingCart[i].cantidadAgregada) * shoppingCart[i].price;
            aux = aux + `
            <div class="row justify-content-around align-items-center fila__producto ">
            <div class="col-lg-3 fila__producto__eliminar__ignorar">
                <img src="${shoppingCart[i].image}" alt=" AMD Radeon 6800XT">
                <div class="checkboxes">
                    <div class="checkbox-sub">
                        <button name="eliminar"
                            onclick='deleteProduct(${JSON.stringify(shoppingCart[i])})'>eliminar</button>
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
            <div class="col-lg-4 fila__producto__numero__precio">
                <div>
                    <button onclick='deleteProduct(${JSON.stringify(shoppingCart[i])})'>
                        <i class="fas fa-minus"></i>
                    </button>
                    <input type="number" value="${shoppingCart[i].cantidadAgregada}" name="cantidad"
                        id="cantidad--de--productos">
                    <button onclick='AddtoCart(${JSON.stringify(shoppingCart[i])})'>
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <strong class="price"> Precio: ${shoppingCart[i].cantidadAgregada * shoppingCart[i].price}$ </strong>
            </div>
            </div>
            `
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
//index its a flag variable, if it isnt in index html, index=null,else  equals something different than null

let index = document.getElementById("gallery-products");
console.log(index);
if ((index) != null) {
    cardCarusel('row-One', dataBaseMasVendidos);
    cardCarusel('row-Two', dataBaseDestacados);
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