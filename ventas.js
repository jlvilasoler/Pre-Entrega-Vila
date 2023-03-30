let descuento = 0; // Descuento del 0% (por defecto)
let cupones = {
    "FIDELITY": 0.1, // Descuento del 10%
    "VIP": 0.3 // Descuento del 30%
};


class Producto{
    constructor(idProveedor,seccion,id,nombreDeProducto,costoConIva,cantidad){
        this.idProveedor = idProveedor;
        this.seccion = seccion;
        this.id = id;
        this.nombreDeProducto = nombreDeProducto;
        this.costoConIva = costoConIva;
        this.cantidad = cantidad;
    }
    costoSinIva(){
        this.costoSinIva = this.costoConIva / 1.22;
    }
    precioVentaSinIva(){
        this.precioVentaSinIva = this.costoConIva * 1.25; //YA TIENE EL MARGEN INCLUIDO DE 25%
}
    precioVentaConIva(){
    this.precioVentaConIva = this.precioVentaSinIva * 1.22;
}
precioVentaConIvaConDescuento(){
    this.precioVentaConIvaConDescuento = this.precioVentaConIva  * descuento{if("")};
}
}

const producto1 = new Producto(9991,"BEBIDAS",60001,"COCA COLA LIGHT 600ML",1,2,5,"120 DIAS");
const producto2 = new Producto(9992,"BEBIDAS",60002,"POMELO PASO DE LOS TOROS BT.500ML",1,2,5,"120 DIAS");
const producto3 = new Producto(9993,"BEBIDAS",60003,"COCA COLA BT 600ML",1,2,5,"120 DIAS");
const producto4 = new Producto(9994,"BEBIDAS",60004,"WHISKY JOHNNIE WALKER-ETIQUETA NEGRA 1L",1,2,5,"120 DIAS");

const productos = [producto1,producto2,producto3,producto4];
console.log(productos)



//FUNCION PARA AGREGAR PRODUCTOS:
function agregarProductos(){
    let idProveedor = prompt("Ingrese el número de proveedor:");
    let seccion = prompt("Ingrese sección:");
    let id = parseInt(prompt("Ingrese el id del producto:"));
    let nombreDeProducto = prompt("Ingrese el nombre del producto:");
    let costoConIva = parseFloat(prompt("Ingrese el precio con iva que compramos la mercaderia:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad comprada:"));

    productos.push(new Producto(idProveedor,seccion,id,nombreDeProducto,costoConIva,cantidad));
}
agregarProductos();
console.log(productos);

//ORDENAR EL LISTADO DE PRODUCTOS QUE TENGO EN LA LISTA
for(const prod of productos){
    prod.costoSinIva();
    prod.precioVentaSinIva();
    prod.precioVentaConIva();
    prod.precioVentaConIvaConDescuento();
    console.table(prod.seccion + " " + prod.idProveedor + " " + prod.plazoDePago + " " + prod.id + " " + prod.nombreDeProducto + " " + prod.costoSinIva + " " + prod.costoConIva+ " " + prod.precioVentaSinIva + " " + prod.precioVentaConIva + " " + prod.precioVentaConIvaConDescuento + " " + prod.cantidad);
}
