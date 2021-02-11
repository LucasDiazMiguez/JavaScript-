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

// console.log("ola");

let producto1= new Products(4999,30,"imagenes/imagenesInicio/camara-destacada.webp","Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono","Camara Web Webcam Usb Pc Full Hd 1080p Plug & Play Microfono","000000001","none");

let producto2= new Products(15999,20,"imagenes/imagenesInicio/gabinetegamer.webp","Gabinete Sentey Z20 Lite - Led Rgb","Gabinete Sentey Z20 Lite - Led Rgb","000000002","sentey");

let producto3= new Products(150999,10,"imagenes/imagenesInicio/GPU.webp","Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr","Placa Video Msi Geforce Rtx2070 Super Ventus Gp Oc 8gb Gddr","000000003","nvidia");
 
let producto4= new Products(26999,16,"imagenes/imagenesInicio/motherboardbarata-destacado.webp","Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4","Motherboard Gigabyte Ga-b365m Elite Intel 1151 9na 4","000000004","gigabyte");

let producto5= new Products(3999,16,"imagenes/imagenesInicio/reloj-destacado.webp","Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film","Xiaomi Mi Band 5 Global Smart Watch Reloj Inteligente + Film","000000005","xiaomi");

let producto6= new Products(180999,26,"imagenes/imagenesInicio/rtx 2080ti.webp","Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ","Placa Video Geforce Strix Gaming 2080ti Ddr6 11gb Rog ","000000006","nvidia");

let producto7= new Products(5999,26,"imagenes/imagenesInicio/ssd.webp","Disco sólido interno Kingston SA400S37/480G 480GB","Disco sólido interno Kingston SA400S37/480G 480GB","000000007","kingston");

let producto8= new Products(85099,26,"imagenes/imagenesInicio/indice.webp","Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10","Notebook Hp 14-cf3047la I3-1005g1 4gb 256gb Ssd Windows 10","000000008","hp");

let dataBase=[producto1,producto2,producto3,producto4,producto5,producto6,producto7,producto8];

export default dataBase;