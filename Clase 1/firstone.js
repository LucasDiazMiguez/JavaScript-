 var x = prompt("ingrese su nombre");
 var y = prompt("ingrese su apellido");

console.log("su nombre es %s %s",x,y);
alert("su nombre es"+"  "+ x +"  "+y);
alert("Calculadora");

x = prompt("ingrese el digito 1");
//Así podría corroborar si lo que ingreso es un numero?
// if(typeof(Number(x))!='Number')
// {
//     alert(no es un digito)    
// }
ope = prompt("ingrese la operación que desea realizar ( +,-,*,%)");
y = prompt("ingrese el digito 2");
var resultado;
console.log(ope);
switch (ope) {
    case '*':
        resultado = Number(x) * Number(y);
        break;
    case '/':
        resultado = Number(x) / Number(y);
        break;
    case '+':
        resultado = Number(x) + Number(y);
        break;
    case '-':
        resultado = Number(x) - Number(y);
        break;
    default:
        alert("metiste otra opcion");
}
console.log(resultado);
alert(resultado);