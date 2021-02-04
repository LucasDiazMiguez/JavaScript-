import  dataBase from './classes.js';

let cardItems=dataBase;
// console.log(cardItems);

// // let carrito=[];

// if (localStorage.getItem("carrito"!=null)) {
//     carrito=JSON.parse(localStorage.getItem("carrito"));
// }

// //loading the data into the "carusel"

let card='';
for (let i = 0; i < cardItems.length; i++) {
    // console.log(dataBase[i]);
    console.log(cardItems.length);   
    let card=document.getElementById("cardCarusel").innerHTML;
    // console.log(card);
    if (cardItems[i].stock>0) {

        document.getElementById("cardCarusel").innerHTML= card+`
        <div class="col-lg-3 col-md-6 galeria-caja-de-item">
        <a href="">
        <div class="galeria-foto-titulo">
        <img src="${cardItems[i].image}"
        alt="${cardItems[i].description}">
        <h6 class="flotante">${cardItems[i].name}</h6>
        </div>
        <div class="price-shop">
        <h6 class="galeria-precio"> ${cardItems[i].price} </h6>
        <button value="">agregar al carrito</button>
        </div>
        </a>
        </div>`
        
    }
    
}

//ahora hay que hacerlo para el otro