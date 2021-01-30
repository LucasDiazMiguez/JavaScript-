alert("hola");
class Producto{

    constructor(marca,nombre,precio, cantidad,catidaddeventas,stock){
        this.marca=marca;
        this.nombre=nombre;
        this.precio=precio;
        this.cantidad=cantidad;
        this.catidaddeventas=catidaddeventas;
        this.stock=stock;
    }

}

let itemsencarrito;
let producto1=new Producto("Sentey","Gabinete Sentey z20 Lite-Led rgb",10999,1,20,5)
let producto2=new Producto("Nvidia","Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr",85000,1,30,5)
let producto3=new Producto("Gigabyte","Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4",20999,1,40,5)
let producto4=new Producto("xiaomi","Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film",4000,50,1,5)
let producto5=new Producto("nvidia","Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ",100999,60,1,5)
let carrito=[producto1,producto2,producto3,producto4,producto5];

console.log(carrito);