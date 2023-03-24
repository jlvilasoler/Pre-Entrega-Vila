
class Producto{
    constructor(idProveedor,seccion,id,nombreDeProducto,costoConIva,cantidad,plazoDePago){
        this.idProveedor = idProveedor;
        this.seccion = seccion;
        this.id = id;
        this.nombreDeProducto = nombreDeProducto;
        this.costoConIva = costoConIva;
        this.cantidad = cantidad;
        this.plazoDePago = plazoDePago;
        this.precioDeVenta = this.agregarGanancia();
    }
    costoSinIva(){
        this.costoConIva = this.costoConIva / 1.22;
}
    agregarGanancia() {
        this.costoConIva = this.costoConIva * 1.4;
    }

}

const producto1 = new Producto(9991,"BEBIDAS",60001,"COCA COLA LIGHT 600ML",1,5,"120 DIAS",99);
const producto2 = new Producto(9992,"BEBIDAS",60002,"POMELO PASO DE LOS TOROS BT.500ML",1,5,"120 DIAS",99);
const producto3 = new Producto(9993,"BEBIDAS",60003,"COCA COLA BT 600ML",1,5,"120 DIAS",99);
const producto4 = new Producto(9994,"BEBIDAS",60004,"WHISKY JOHNNIE WALKER-ETIQUETA NEGRA 1L",1,5,"120 DIAS",99);

const productos = [producto1,producto2,producto3,producto4];
console.log(productos)




//FUNCION PARA AGREGAR PRODUCTOS:
function agregarProductos(){
    let idProveedor = prompt("Ingrese el número de proveedor:");
    let seccion = prompt("Ingrese sección:");
    let id = parseInt(prompt("Ingrese el id del producto:"));
    let nombreDeProducto = prompt("Ingrese el nombre del producto:");
    let costoSinIva = parseFloat(prompt("Ingrese el precio con iva que compramos la mercaderia:"));
    let cantidad = parseInt(prompt("Ingrese la cantidad comprada:"));
    let plazoDePago = prompt("Ingrese plazo de pago:");
    let nuevoProd = new Producto(idProveedor,seccion,id,nombreDeProducto,costoSinIva,cantidad,plazoDePago);

    nuevoProd.costoSinIva();
    productos.push(nuevoProd);

    nuevoProd.agregarGanancia();
    productos[productos.length - 1].precioDeVenta = nuevoProd.costoConIva; // actualizar el precio de venta del último producto agregado
    }

agregarProductos();
console.log(productos);


//ORDENAR EL LISTADO DE PRODUCTOS QUE TENGO EN LA LISTA
for(const prod of productos){
    console.log(prod.idProveedor + " " + prod.seccion + " " + prod.id + " " + prod.nombreDeProducto + " " + prod.costoConIva + " " + prod.cantidad + " " + prod.plazoDePago + " " +  prod.precioDeVenta);}
