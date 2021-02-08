import dataBase from './classes.js';
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
function cardCarusel(id, items) {
    let card = document.getElementById(id);
    console.log(items);
    for (let i = 0; i < 4; i++) {
        // console.log(items.length);

        if (items[i].stock > 0) {
            document.getElementById(id).innerHTML =card.innerHTML + `
            <div class="col-lg-3 col-md-6 galeria-caja-de-item">
            <a href="">
            <div class="galeria-foto-titulo">
            <img src="${items[i].image}"
            alt="${items[i].description}">
            <h6 class="flotante">${items[i].name}</h6>
            </div>
            <div class="price-shop">
            <h6 class="galeria-precio"> ${items[i].price} </h6>
            <button value="" onclick='AddtoCart(${JSON.stringify(items[i])})'>agregar al carrito</button>
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
