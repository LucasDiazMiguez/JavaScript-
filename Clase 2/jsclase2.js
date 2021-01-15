var x = prompt("ingrese su nombre");
var y = prompt("ingrese su apellido");

alert("Bienvenido a la Calculadora " +x+"   "+y);

a = prompt("ingrese el digito 1");
var x;
x = Number(a);
if (isNaN(x)) {
    alert("No es un digito");
} else {
    ope = prompt("ingrese la operación que desea realizar ( +,-,*,%)");
    console.log(ope);
    var b,y;
    switch (ope) {
        case '*':
            b = prompt("ingrese el digito 2");
            y = Number(b);
            if (isNaN(y)) 
                {
                alert("No es un digito");
                }else{
                    resultado = x*y;
                    console.log(resultado);
                    alert(resultado);
                }
            break;
        case '/':
            b = prompt("ingrese el digito 2");
            y = Number(b);
            if (isNaN(y)) 
                {
                alert("No es un digito");
                }else{
                    resultado = x/y;
                    console.log(resultado);
                    alert(resultado);
                }
            break;
        case '+':
            b = prompt("ingrese el digito 2");
            y = Number(b);
            if (isNaN(y)) 
                {
                alert("No es un digito");
                }else{
                    resultado = x+y;
                    console.log(resultado);
                    alert(resultado);
                }
            break;
        case '-':
            b = prompt("ingrese el digito 2");
            y = Number(b);
            if (isNaN(y)) 
                {
                alert("No es un digito");
                }else{
                    resultado = x-y;
                    console.log(resultado);
                    alert(resultado);
                }
            break;
        default:
            alert("metiste otra opcion");
    }
}


