// TODO  We are going to save all the data of the page Crear Usuario in the localStorage. Then if the user logs out, he only needs the password and the user to log in.//when the user changes to a page like index or carrito, the iniciar sesión data deletes itself and u have to login again, but the user doesn´t know that(or I hope it doesn´t)
// TODO usar funciones de array
// TODO  after we show a tick animation and then we delete the shopping cart.
// TODO  After we finished that we can add buttons to the step mentioned above for the user to travel between the form fields or to complete again the data loged in.
// TODO after the user logs in we need to delete all the  acess to the  create user and log in page
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
class ProductsForMercadoPago {
    constructor(title,description, quantity, currency_id, unit_price) {
        this.title = title;
        this.quantity = quantity;
        this.currency_id = currency_id;
        this.unit_price = unit_price;
        this.description = description;
    }
}
let producto1 = new Products(4999, 1, "imagenes/imagenesInicio/camara-destacada.webp", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono", "000000001", "none", 0);
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

        if (items[i].stock > 0) {
            let idi = items[i].id + "check";
            let idb = items[i].id + "button";
            card.innerHTML = card.innerHTML + `
            <div class="col-lg-3     col-md-6 box-gallery-item">
            <div id="">
            <img src="${items[i].image}"
                alt="${items[i].description}">
            <h6 class="item-name">${items[i].name}</h6>
            <h6 class="cardprice">$ ${items[i].price} </h6>
            <button id="${idb}"value="" class="agregarCarritoHover"  onclick='AddtoCart(${JSON.stringify(items[i])})'>agregar al carrito <i id="${idi}" class="fas fa-check normal"></i></button>
        </div>
        </div>
            `;
        }
    }
}

function addCheck(product) {
    let idi = document.getElementById(product.id + "check");
    idi.classList.remove("normal");
    idi.classList.add("animation-class");
    setTimeout(function () {
        idi.classList.remove("animation-class");
        idi.classList.add("normal");
    }, 2000);
}

function noMoreStock(product) {
    let idi = document.getElementById(product.id + "plusSign");
    idi.classList.remove("normal");
    idi.classList.add("nostock");

    setTimeout(function () {
        idi.classList.remove("nostock");
        idi.classList.add("normal");

    }, 2000);
}

function addCross(product) {
    let idi = document.getElementById(product.id + "cross");
    idi.classList.remove("normal");
    idi.classList.add("animation-class");
    setTimeout(function () {
        idi.classList.remove("animation-class");
        idi.classList.add("normal");
    }, 5000);
}

function addCrossCreateUser(id) {
    let idi = document.getElementById(id);
    idi.classList.remove("normalField");
    idi.classList.add("wrongField");
    setTimeout(function () {
        idi.classList.remove("wrongField");
        idi.classList.add("normalField");
    }, 5000);
}

function AddtoCart(product) {
    if (product.stock > 0) {
        //to know where Addtocart is been called from
        let flag = 0;
        for (let i = 0; i < shoppingCart.length; i++) {
            if (product.id == shoppingCart[i].id) {
                shoppingCart[i].cantidadAgregada = shoppingCart[i].cantidadAgregada + 1;
                shoppingCart[i].stock = shoppingCart[i].stock - 1;
                flag = 1;
            }
        }
        if (flag == 0) {
            product.cantidadAgregada = product.cantidadAgregada + 1;
            product.stock = product.stock - 1;
            shoppingCart.push(product);
        }
        localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
        if (imInIndex()) {
            addCheck(product);
        } else {
            showCarrito(shoppingCart);
        }
    } else if (!imInIndex()) {

        noMoreStock(product);


    }

    cardlength();
}

function deleteAll(product) {
    shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    for (let i = 0; i < shoppingCart.length; i++) {
        if (product.id == shoppingCart[i].id) {
            shoppingCart.splice(i, 1);
        }
    }
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    showCarrito(JSON.parse(localStorage.getItem("shoppingCart")));
}

function deleteProduct(product) {
    shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
    for (let i = 0; i < shoppingCart.length; i++) {
        if (product.id == shoppingCart[i].id) {
            if (product.cantidadAgregada > 1) {
                shoppingCart[i].cantidadAgregada = shoppingCart[i].cantidadAgregada - 1;
                shoppingCart[i].stock = shoppingCart[i].stock + 1;
            } else {
                shoppingCart.splice(i, 1);
            }
        }
    }
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
    showCarrito(JSON.parse(localStorage.getItem("shoppingCart")));
    cardlength();
}

function cardlength() {
    let aux = shoppingCart.length;
    $("#cart-icon-b").text("Carrito " + aux);
}

function showCarrito(shoppingCart) {
    if (localStorage.getItem("shoppingCart") != null) {
        shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
        let divDeCompra = document.getElementById("contenedor-de-filas-carrito");
        let preciototal = 0;
        let aux = 0;

        for (let i = 0; i < shoppingCart.length; i++) {
            preciototal = preciototal + (shoppingCart[i].cantidadAgregada) * shoppingCart[i].price;
            aux = aux + `
            <div class="row justify-content-around align-items-center fila__producto ">
            <div class="col-lg-3 fila__producto__eliminar__ignorar">
                <img src="${shoppingCart[i].image}" alt=" AMD Radeon 6800XT">
            </div>
            <div class="col-lg-5">
                <h5 id="item-name"> ${shoppingCart[i].name} </h5>
            </div>
            <div class="col-lg-4 fila__producto__numero__precio">
                <div>
                    <button class="normal" onclick='deleteProduct(${JSON.stringify(shoppingCart[i])})'>
                        <i class="fas fa-minus"></i>
                    </button>
                    <h5 >${shoppingCart[i].cantidadAgregada} </h5>
                    <button id="${shoppingCart[i].id+"plusSign"}" class="normal" onclick='AddtoCart(${JSON.stringify(shoppingCart[i])})' ">
                        <i class="fas fa-plus"></i>
                    </button>
                </div>
                <strong class="price"> Precio: ${shoppingCart[i].cantidadAgregada * shoppingCart[i].price}$ </strong>
                <i id="deleteItemShoppingCart" class="fas fa-times" onclick='deleteAll(${JSON.stringify(shoppingCart[i])})'></i>
            </div>
            </div>
            `
        }
        divDeCompra.innerHTML = aux +
            `<div class="row justify-content-around align-items-center fila__confirmar__pago">
        <div class="col-lg-5">
        </div>
        <div class="col-lg-3">
            <h5>TOTAL: ${preciototal} .-</h5>
        </div>
        <div class="col-lg-3">
            <input onclick='confirmTransaction()' type="submit" value="Confirmar compra">
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
function imInCarrito() {
    return (document.getElementById("contenedor-de-filas-carrito") != null)
}

function imInIndex() {
    return (document.getElementById("gallery-products") != null)
}

function showCardsIndex() {
    if (imInIndex()) {
        cardCarusel('row-One', dataBaseMasVendidos);
        cardCarusel('row-Two', dataBaseDestacados);
    }
}

function logIn() {
    return (logInVariable == 1);
}


function imInCreateUser(){
   return  (document.getElementById("createUser") != null)
}
function initiateSesion(){
    console.log(dataUser);
    let userNickname=document.getElementById("userNicknameLogIn").value;
    let userPassword=document.getElementById("userPasswordLogIn").value;
    dataUser = JSON.parse(localStorage.getItem("dataUser"));
    console.log(dataUser);
    if (userNickname != dataUser[5] || userPassword != dataUser[6]) {
        console.log("usuario o contraseña erróneas")
    }else{
        document.getElementById("iniatiateSesion").innerHTML=` <h1>iniciaste sesion        <i class="fas fa-user-check"></i> <a href="index.html"></a></h1>`
    }
}
function takingDataUserAndCheck() {
    let newUser = document.getElementById("userName");
    let userSurname = document.getElementById("userSurname");
    let userDni = document.getElementById("userDni");
    let userEmail=document.getElementById("userEmail");
    let userAge=document.getElementById("userAge");
    let userNickname=document.getElementById("userNickname");
    let userPassword1=document.getElementById("userPassword1");
    let userPassword2=document.getElementById("userPassword2");
    let flag=0;
    if (!(newUser.value.length > 3 && newUser.value.length < 40)) {
        addCrossCreateUser("userNameI");
        flag=1;
    }
    if (!(userSurname.value.length > 3 && userSurname.value.length < 40)) {
        addCrossCreateUser("userSurnameI");
        flag=1;
    }
    if (!(userSurname.value.length > 3 && userSurname.value.length < 40)) {
        addCrossCreateUser("userSurnameI");
        flag=1;
    }
    if (userDni.value == "") {
        addCrossCreateUser("userDniI");
        flag=1;
    }
    if (userAge.value == "" || userAge.value>130 || userAge.value<0) {
        addCrossCreateUser("userAgeI");
        flag=1;
    }
    if(userEmail.value.indexOf("@gmail.com")==-1){
        console.log("no es una dirección de gmail.com")
        addCrossCreateUser("userEmailI");
        flag=1;
    }else{
        //to see if the email is pedro@gmail.com and not @gmail.compedro 
        let large=userEmail.value.length;
        let largeminusemail=large-10;
        let gmailpart=userEmail.value.slice(largeminusemail);
        if(gmailpart!= "@gmail.com")
        {
            addCrossCreateUser("userEmailI");
            flag=1;
        }
    }
    if (userNickname.value.length < 3) {
        addCrossCreateUser("userNicknameI");
        flag=1;
        
    }
    if (userPassword2.value.length <8) {
        flag=1;
        addCrossCreateUser("userPassword2I");
   }
   if(userPassword1.value !== userPassword2.value){
       addCrossCreateUser("userPassword1I")
       flag=1;
   }
   console.log(flag)
     if (flag==1) {
     document.getElementById("botondeCrearUsuario").style.background= "red";
    }else{
     document.getElementById("botondeCrearUsuario").style.background= "green";
     dataUser=[newUser.value,userSurname.value,userDni.value,userEmail.value,userAge.value,userNickname.value,userPassword1.value,userPassword2.value]
     localStorage.setItem("dataUser", JSON.stringify(dataUser) )
     console.log(dataUser);
     setTimeout(function userCreated(){
         document.getElementById("createUser").innerHTML= `<label>Ya podés iniciar sesión <a href="iniciodesesion.html">Iniciar sesión</a>`
     },3000);
    }
}

function shoppingCartForMercadoPago()
{
    let shoppingCartMercadoPago=[];
    for (let i = 0; i < shoppingCart.length; i++) {
            shoppingCartMercadoPago[i]= {title:shoppingCart[i].name,description:shoppingCart[i].description,quantity:shoppingCart[i].cantidadAgregada,currency_id:"ARS",unit_price:shoppingCart[i].price}
            }
            console.log(shoppingCartMercadoPago) 
            return (shoppingCartMercadoPago)
}
function checkCorrectTransaction(){
    var settings = {
        "url": "https://api.mercadopago.com/v1/payments/search",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer TEST-8185104588992061-031600-2309f6db3ee8a481ca32af989dba4a3c-207187455"
        },
      };
      
      $.ajax(settings).done(function (response) {
          console.log("esta me interesa")
          let paysQuantityMP=response.paging.total;
          let  paysQuantity=JSON.parse(localStorage.getItem("paysQuantityMP"))
          console.log(( paysQuantity === paysQuantityMP))
          if ( paysQuantity == paysQuantityMP) {
              console.log("compra no realizada")
          }
          
      });

} 
function confirmTransaction(){

    var settings = {
        "url": "https://api.mercadopago.com/v1/payments/search",
        "method": "GET",
        "timeout": 0,
        "headers": {
          "Authorization": "Bearer TEST-8185104588992061-031600-2309f6db3ee8a481ca32af989dba4a3c-207187455"
        },
      };
      
      $.ajax(settings).done(function (response) {
          console.log(response);
          let paysQuantityMP=response.paging.total
          localStorage.setItem("paysQuantityMP", JSON.stringify(paysQuantityMP));
          console.log("esta me interesa")
         console.log(localStorage.getItem("paysQuantityMP"))
      });

        var settings = {
            "url": "https://api.mercadopago.com/checkout/preferences?category=electronica&time=today",
            "method": "POST",
            "timeout": 0,
            "headers": {
              "Authorization": "Bearer TEST-8185104588992061-031600-2309f6db3ee8a481ca32af989dba4a3c-207187455",
              "Content-Type": "application/json"
            },
            // "data": JSON.stringify({"items":[{"title":"Disco sólido interno Kingston SA400S37/480G 480GB"}]    }),
            "data": JSON.stringify({"items":shoppingCartForMercadoPago()}), 
          };
          
          $.ajax(settings).done(function (response) {
            document.getElementById("contenedor-de-filas-carrito").innerHTML=  `<div> <h2> link para terminar la operación: <a href="${response.init_point}"> Mercado pago link </a> </h2>  <button onclick='checkCorrectTransaction()'>chequear si se realizó la compra </button> </div>`
        });
}
let usuario = []
let password = []
let shoppingCart = [];
let logInVariable = [];
let dataUser=[];
let paysQuantity=[0]

if (localStorage.getItem("dataUser") != null && imInCreateUser()) {
    dataUser = JSON.parse(localStorage.getItem("dataUser"));
    document.getElementById("createUser").innerHTML= `<label>Ya podés iniciar sesión <a href="iniciodesesion.html">Iniciar sesión</a>`;
}else if(localStorage.getItem("dataUser")!=null){
    dataUser = JSON.parse(localStorage.getItem("dataUser"));
}
if (localStorage.getItem("usuario") != null) {
    shoppingCart = JSON.parse(localStorage.getItem("usuario"));
}
if (localStorage.getItem("password") != null) {
    shoppingCart = JSON.parse(localStorage.getItem("password"));
}
if (localStorage.getItem("shoppingCart") != null) {
    shoppingCart = JSON.parse(localStorage.getItem("shoppingCart"));
}
showCardsIndex();
cardlength();
if (imInCarrito()) {
    showCarrito(shoppingCart);
}