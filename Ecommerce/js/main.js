
import dataBase from './classes.js';

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
            <button value="">agregar al carrito</button>
            </div>
            </a>
            </div>`
            
        }
    }
}
let cardItems = dataBase;
// console.log(cardItems);

// // let carrito=[];

// if (localStorage.getItem("carrito"!=null)) {
//     carrito=JSON.parse(localStorage.getItem("carrito"));
// }

// //loading the data into the "carusel"

// let card='';
// for (let i = 0; i < cardItems.length; i++) {
//     // console.log(dataBase[i]);
//     console.log(cardItems.length);   
//     let card=document.getElementsByClassName("cardCarusel");
//     console.log(card);
//     if (cardItems[i].stock>0) {

//         card[0].innerHTML= card+`
//         <div class="col-lg-3 col-md-6 galeria-caja-de-item">
//         <a href="">
//         <div class="galeria-foto-titulo">
//         <img src="${cardItems[i].image}"
//         alt="${cardItems[i].description}">
//         <h6 class="flotante">${cardItems[i].name}</h6>
//         </div>
//         <div class="price-shop">
//         <h6 class="galeria-precio"> ${cardItems[i].price} </h6>
//         <button value="">agregar al carrito</button>
//         </div>
//         </a>
//         </div>`

//     }

// }

cardCarusel('filaUno',cardItems);
cardCarusel('filaDos',cardItems);
//ahora hay que hacerlo para el otro