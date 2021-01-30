// var notas = [5,6,7,9,3,10,2,3,6,5];

// for(let i=0;i<notas.length;i++)
// {
//     alert("tu nota es "+ notas[i]);
//     if(notas[i]<7)
//     {
//         alert("desaprobaste");
//     }else{
//         alert("aprobaste capo");
//     }
// }


var dias =[ "lunes", "Martes", "Miercoles","Jueves","Viernes","Sábado","Domingo"];

for(i=0;i<7;i++)
{
    if(i%2!=0)
    {
        alert( dias[i] +"   pertenece a un día par");
    }else if(i==6)
    {
        alert("Es domingooo");
    }
}