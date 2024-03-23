let nombre = prompt ("Ingrese su nombre aquí!")
alert ("Bienvenido/a " + nombre );

let pedir = prompt ("¿Estas lista para comenzar tu paseo? Ingrese SI o NO ");

if ((pedir === "no") || (pedir === "No")|| (pedir === "NO") || (pedir === "nO")){
    alert ("Te esperamos para un nuevo paseo de compras");
} else {
    let totalCarrito = 0

class Producto{
    constructor(nombre, precio){
        this.nombre = nombre
        this.precio = precio
    }
}

let limas = new Producto("Limas", 900)
let cortacuticulas = new Producto("Corta Cuticulas", 750)
let esmaltes = new Producto("Esmaltes", 600)
let cabinas = new Producto("Cabinas", 500)
let lamparas = new Producto("Lamparas", 380)

const arrayEstetica = [limas,cortacuticulas,esmaltes,cabinas,lamparas]

function comprar(){
    let opciones = parseInt(prompt(`Pulse 1 si desea ${arrayEstetica[0].nombre} por $${arrayEstetica[0].precio}\nPulse 2 si desea ${arrayEstetica[1].nombre} por $${arrayEstetica[1].precio}\nPulse 3 si desea ${arrayEstetica[2].nombre} por $${arrayEstetica[2].precio}\nPulse 4 si desea ${arrayEstetica[3].nombre} por $${arrayEstetica[3].precio}\nPulse 5 si desea ${arrayEstetica[4].nombre} por $${arrayEstetica[4].precio}\nPulse 6 si desea filtrar por precio más bajo`))
    
    while (opciones < 1 || opciones > 6){
        opciones = parseInt(prompt(`Pulse 1 si desea ${arrayEstetica[0].nombre} por $${arrayEstetica[0].precio}\nPulse 2 si desea ${arrayEstetica[1].nombre} por $${arrayEstetica[1].precio}\nPulse 3 si desea ${arrayEstetica[2].nombre} por $${arrayEstetica[2].precio}\nPulse 4 si desea ${arrayEstetica[3].nombre} por $${arrayEstetica[3].precio}\nPulse 5 si desea ${arrayEstetica[4].nombre} por $${arrayEstetica[4].precio}\nPulse 6 si desea filtrar por precio más bajo`))
    }
    let productoElegido;
    if (opciones == 1){
        productoElegido = arrayEstetica[0]
        totalCarrito += arrayEstetica[0].precio 
    }
    else if (opciones == 2){
        productoElegido = arrayEstetica[1]
        totalCarrito += arrayEstetica[1].precio
    }
    else if (opciones == 3){
        productoElegido = arrayEstetica[2]
        totalCarrito += arrayEstetica[2].precio
    }
    else if (opciones == 4){
        productoElegido = arrayEstetica[3]
        totalCarrito += arrayEstetica[3].precio
    }
    else if (opciones == 5){
        productoElegido = arrayEstetica[4]
        totalCarrito += arrayEstetica[4].precio
    }
    else if (opciones == 6){
        arrayEstetica.sort((a,b) => a.precio - b.precio)
        opciones = parseInt(prompt(`Pulse 1 si desea  ${arrayEstetica[0].nombre} por $${arrayEstetica[0].precio}\nPulse 2 si desea  ${arrayEstetica[1].nombre} por $${arrayEstetica[1].precio}\nPulse 3 si desea  ${arrayEstetica[2].nombre} por $${arrayEstetica[2].precio}\nPulse 4 si desea  ${arrayEstetica[3].nombre} por $${arrayEstetica[3].precio}\nPulse 5 si desea ${arrayEstetica[4].nombre} por $${arrayEstetica[4].precio}`))
        while (opciones < 1 || opciones > 6){
            opciones = parseInt(prompt(`Pulse 1 si desea ${arrayEstetica[0].nombre} por $${arrayEstetica[0].precio}\nPulse 2 si desea  ${arrayEstetica[1].nombre} por $${arrayEstetica[1].precio}\nPulse 3 si desea  ${arrayEstetica[2].nombre} por $${arrayEstetica[2].precio}\nPulse 4 si desea  ${arrayEstetica[3].nombre} por $${arrayEstetica[3].precio}\nPulse 5 si desea ${arrayEstetica[4].nombre} por $${arrayEstetica[4].precio}`))
        }
        if (opciones == 1){
            productoElegido = arrayEstetica[0]
            totalCarrito += arrayEstetica[0].precio
        }
        else if (opciones == 2){
            productoElegido = arrayEstetica[1]
            totalCarrito += arrayEstetica[1].precio
        }
        else if (opciones == 3){
            productoElegido = arrayEstetica[2]
            totalCarrito += arrayEstetica[2].precio
        }
        else if (opciones == 4){
            productoElegido = arrayEstetica[3]
            totalCarrito += arrayEstetica[3].precio
        }
        else if (opciones == 5){
            productoElegido = arrayEstetica[4]
            totalCarrito += arrayEstetica[4].precio
    }
    }
    let confirmacion = confirm(`Usted eligió ${productoElegido.nombre} y sale $${productoElegido.precio}, desea agregarlo al carrito?`)
    if (confirmacion == true){
        let confirmacion2 = confirm("El producto se agregó al carrito, desea comprar algo más?")
        if (confirmacion2 == true){
            comprar()
        } else{
            let confirmacion3 = confirm(`El total es de ${totalCarrito}, desea pagar?`)
            if (confirmacion3 == true){
                alert("MUCHAS GRACIAS por su compra!")
            } else{
                alert("Te esperamos!")
            }
        }
    } else{
        let confirmacion4 = confirm("Va a seguir comprando?")
        if (confirmacion4 == true){
            comprar()
        } else{
            alert("Te esparamos!")
        }
    }
}

comprar()


}
