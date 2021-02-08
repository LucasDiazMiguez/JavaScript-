// import dataBase from './classes.js';
class Products {
    constructor(price,stock,image,description,name,id,marca) {
      this.price = price;
      this.stock= stock;
      this.image=image;
      this.name=name;
      this.id=id;
      this.marca=marca;
      this.description=description;
    }
  }

// console.log("ola");

let producto1= new Products(4999,30,"imagenes/imagenesInicio/camara-destacada.webp","Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono","Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono","000000001","none");

let producto2= new Products(15999,20,"imagenes/imagenesInicio/gabinetegamer.webp","Gabinete Sentey Z20 Lite - Led Rgb","Gabinete Sentey Z20 Lite - Led Rgb","000000002","sentey");

let producto3= new Products(150999,10,"imagenes/imagenesInicio/GPU.webp","Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr","Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr","000000003","nvidia");
 
let producto4= new Products(26999,16,"imagenes/imagenesInicio/motherboardbarata-destacado.webp","Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4","Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4","000000004","gigabyte");

let producto5= new Products(3999,3,"imagenes/imagenesInicio/motherboardbarata-destacado.webp","Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4","Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4","000000004","gigabyte");
 

let dataBase=[producto1,producto2,producto3,producto4];
function AddtoCart(product)
{
    // for (let i = 0; i < shoppingCart.length; i++) {
    //     if (producto== shoppingCart[i]) {
            
    //     }
    // }
    if (producto.stock>0) {
        shoppingCart.push(product);
        console.log(shoppingCart);
        localStorage.setItem("shoppingCart",JSON.stringify(shoppingCart));
    }
}
function saludosaloscoders(){
    alert("hola");
}
function cardCarusel(id, items) {
    let card = document.getElementById(id).innerHTML;
    console.log(card);
    for (let i = 0; i < 4; i++) {
        // console.log(items.length);

        if (items[i].stock > 0) {
            card.innerHTML =card.innerHTML + `
            <div class="col-lg-3 col-md-6 galeria-caja-de-item">
            <a href="">
            <div class="galeria-foto-titulo">
            <img src="${items[i].image}"
            alt="${items[i].description}">
            <h6 class="flotante">${items[i].name}</h6>
            </div>
            <div class="price-shop">
            <h6 class="galeria-precio"> ${items[i].price} </h6>
           
            <button value=""   onclick="saludosaloscoders()">agregar al carrito</button>
            
            </div>
            </a>
            </div>`
         ;   
        }
    }
}
let cardItems = dataBase;
cardCarusel('filaUno',cardItems);
cardCarusel('filaDos',cardItems);
// function showCarrito(shoppingCart){
//     let divDeCompra= document.getElementById("contenedor-de-filas-carrito");
//     for (let i = 0; i < shoppingCart.length; i++) {
//         const element = shoppingCart[i];
//         divDeCompra.innerHTML=+divDeCompra.innerHTML+`
//         <div class="row justify-content-around align-items-center fila__producto ">        
//         <div class="col-lg-3 fila__producto__eliminar__ignorar">
//           <img src="${shoppingCart[i].image}" alt=" AMD Radeon 6800XT">
//             <div class="checkboxes">
//                 <div class="checkbox-sub">
//                     <label for="eliminar">Eliminar</label>
//                     <input type="checkbox" name="eliminar">
//                 </div>
//                 <div class="checkbox-sub">
//                     <label for="ignorar">Ignorar</label>
//                     <input type="checkbox" name="ignorar">
//                 </div>
//             </div>
//         </div>
//         <div class="col-lg-5">
//             <h5> ${shoppingCart[i].name} </h5>
//         </div>
//         <div class="col-lg-3 fila__producto__numero__precio">
//             <input type="number" name="cantidad" id="cantidad--de--productos">
//             <!-- <div class="button-minus-plus">
//                 <button>
//                     <i class="fas fa-minus"></i>
//                 </button>
//                 <button>
//                     <i class="fas fa-plus"></i>
//                 </button>
//             </div> -->
//             <strong class="price"> Precio: ${shoppingCart[i].price}$ </strong>
//         </div>

//     </div>`
//     }
// }

let shoppingCart = [];
if (localStorage.getItem("shoppingCart")!=null) {
    shoppingCart=JSON.parse(localStorage.getItem("shoppingCart"));
} 
// showCarrito(shoppingCart);
