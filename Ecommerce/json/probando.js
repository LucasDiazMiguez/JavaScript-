
//  $.ajax({
//     url: 'https://api.mercadopago.com/checkout/preferences ',
//     type: 'post',
//     data: {
//             "items": [
//                 {
//                 "title": "adklfj",
//                 "description": "Multicolor Item",
//                 "quantity": 1,
//                 "currency_id": "ARS",
//                 "unit_price": 10.0
//                 }
//             ]
//         },
//     headers: {
//         'content-type':'application/json',
//         'Authorization': 'Bearer APP_USR-1079783023308128-030901-2e29a8690251a5eec3cbbeaa280fbbe9-207187455'   //for object property name, use quoted notation shown in second
//     },
//     success: function (data) {
//         console.info(data);
//     },
//     error: function(error){
//         console.log(error);   
//     }
// });

// // $.post('https://api.mercadopago.com/checkout/preferences ',{
// //     "items":[
// //         {
// //             "title": "asldkfj",
// //             "description": "hola mundo",
// //             "quantity": 3,
// //             "currency_id": "ARS",
// //             "unit_price": 10.0
// //         }
// //     ]
// // },function(datos,status){
// //     console.log(status);
// //     console.log(datos);

// // })


async function start(){
    try{

        const response= await fetch("https://dog.ceo/api/breeds/list/all")
        const data= await response.json()
        createBreedList(data.message)
    }catch(e){
        console.log("fail");
    }
}


start()
function createBreedList(breedList){ //breedlist is an object,  we can make an array of an object with the object.key() method
    document.getElementById("breed").innerHTML=`  
    <select onchange="loadByBreed(this.value)">
    <option>Choose a dog breed</option>
       ${Object.keys(breedList).map(function(breed) {
        return `<option>${breed}</option>`
    }).join('')} 
    </select>
`
}

async function loadByBreed(breed){
    if (breed != "Choose a dog breed") {
      const response= await fetch(`https://dog.ceo/api/breed/${breed}/images`)
      const data= await response.json()
      createSlideShow(data.message)
    }
alert(breed)
}

function createSlideShow(imageUrls){


}

