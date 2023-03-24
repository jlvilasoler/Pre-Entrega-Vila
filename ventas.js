/*

//FUNCION INGRESA PRECIO CON IVA Y NOS DA EL PRECIO SIN IVA
let precioSinIva = function(precioSinIva) {
    return precioSinIva / 1.22;
}
console.log("El total sin iva es: ")
console.log(precioSinIva(parseFloat(prompt("Ingresa Precio con Iva del Producto 1")))); //MENU PARA INDICAR EL PRECIO CON IVA DE UN PRODUCTO



function Producto(tipoOperacion, fecha, categoria, seccion,idProveedor, nombreProveedor,id, nombreDeProducto, cantidad, costoSinIva, costoConIva, precioSinIva, precioConIva){
    this.tipoOperacion=tipoOperacion;
    this.fecha=fecha;
    this.categoria=categoria;  
    this.seccion=seccion;    
    this.idProveedor=idProveedor; 
    this.nombreProveedor=nombreProveedor; 
    this.id=id;
    this.nombreDeProducto=nombreDeProducto;
    this.cantidad=cantidad;
    this.costoSinIva=costoSinIva;
    this.costoConIva=costoConIva;
    this.precioSinIva=precioSinIva;
    this.precioConIva=precioConIva;
    //mostrar producto
    this.mostrarProducto = function(){
        alert(this.tipoOperacion+","+this.fecha+","+this.categoria+","+this.seccion+","+this.idProveedor+","+this.id+","+this.nombreDeProducto+","+this.cantidad+","+this.costoSinIva+","+this.costoConIva+","+this.precioSinIva+","+precioConIva);
    }
}

const producto1 = new Producto("COMPRA",12032023,"BEBIDAS","REFRESCOS",99912,"MDEO REF",60120,"COCA COLA LIGHT 600ML",200,80.6234,98.36,120);
const producto2 = new Producto("COMPRA",10022023,"BEBIDAS","REFRESCOS",99913,"PEPSICO",60121,"POMELO PASO DE LOS TOROS BT.500ML",200,67.1862,81.97,100);
const producto3 = new Producto("COMPRA",08022023,"BEBIDAS","REFRESCOS",99913,"PEPSICO",60122,"AGUA SALUS CON GAS BT 600ML",50,47,57.38,57.38,70);
const producto4 = new Producto("COMPRA",08022023,"BEBIDAS","REFRESCOS",99913,"PEPSICO",60123,"COCA COLA BT 600ML",250,80.6234,98.36,120);
const producto5 = new Producto("COMPRA",03012023,"BEBIDAS","REFRESCOS",99920,"ALCOHOLES UY",60124,"WHISKY JOHNNIE WALKER-ETIQUETA NEGRA 1L",40,2687,3278,4000);

console.log(producto1);
console.log(producto2);
console.log(producto3);
console.log(producto4);
console.log(producto5);



*/

