function llenarvector(){
    let array=[0];
    for (let i = 0; i < largo; i++) {
        //hacerlo con función
       array[i] = Number(prompt("ingresa el valor que querés"));
        if(isNaN(array[i]))
        {
            corroborar=0;
            alert("valor ingresado no es válido");
            return 0;
        }
    }
    return array;
}
function sum(vector1,vector2,operacion) {
    let resultado=[0]
    switch (ope) {
                case '*':
                    for (let i = 0; i <largo; i++) {
                        resultado[i] = vector1[i]*vector2[i];
                    }                            alert(resultado);
                            console.log(resultado);
                    break;
                case '/':
                    for (let i = 0; i <largo; i++) {
                        resultado[i] = vector1[i]/vector2[i];
                    }
                            alert(resultado);
                            console.log(resultado);
                    break;
                case '+':
                    for (let i = 0; i <largo; i++) {
                        resultado[i] = vector1[i]+vector2[i];
                    }
                            console.log(resultado);
                            alert(resultado);
                    break;
                case '-':
                    for (let i = 0; i <largo; i++) {
                        resultado[i] = vector1[i]-vector2[i];
                    }
                            console.log(resultado);
                            alert(resultado);
                    break;
                default:
                    alert("metiste otra opcion");
            }
       return resultado;
        }

var x = prompt("ingrese su nombre");
var y = prompt("ingrese su apellido");

var seguir;
let array1,array2,array3,corroborar=1;

alert("Bienvenido "+x+"   "+y+" a la Calculadora  de vectores ");
do{
    do{
        largo= prompt("ingrese el largo del array");
        if (isNaN(largo)) {
            corroborar=0;
            alert("caracter inválido")
        } else {
            corroborar=1;
            alert("Ingrese los valores del primer vector")
            array1=llenarvector();
            alert("Ingrese los valores del segundo vector")
            array2=llenarvector();
        }
}while(corroborar==0)
    
    ope = prompt("ingrese la operación que desea realizar ( +,-,*,%)");
    array3=sum(array1,array2,ope);   
    console.log(array3);
seguir = prompt("si desea realizar otro calculo, ingrese y. Sino ingrese cualquier otra tecla ");
}while(seguir=="y")


