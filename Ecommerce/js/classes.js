class Products {
    constructor(price,stock,image,description,name,id,marca) {
      this.price = price;
      this.stock= stock;
      this.image=image;
      this.name=name;
      this.id=id;
      this.marca=marca;
      this.description=description;
    }
  }

console.log("ola");

let producto1= new Products(4999,30,"imagenes/imagenesInicio/camara-destacada.webp","Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono","Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono","000000001","none");

let producto2= new Products(15999,20,"imagenes/imagenesInicio/gabinetegamer.webp","Gabinete Sentey Z20 Lite - Led Rgb","Gabinete Sentey Z20 Lite - Led Rgb","000000002","sentey");

let producto3= new Products(150999,10,"imagenes/imagenesInicio/GPU.webp","Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr","Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr","000000003","nvidia");
 
let producto4= new Products(26999,16,"imagenes/imagenesInicio/motherboardbarata-destacado.webp","Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4","Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4","000000004","gigabyte");
 

let dataBase=[producto1,producto2,producto3,producto4];

export default dataBase;