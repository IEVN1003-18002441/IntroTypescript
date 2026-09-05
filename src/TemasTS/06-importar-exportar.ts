
import {type Producto, calcularISV2} from "./05-desestructuracion-funciones"

const carrito:Producto[]=[
    {
        desc: "Telefono 1",
        precio:5
    },

    {
        desc: "Telefono 2",
        precio:4
    },

    {
        desc: "Telefono 3",
        precio:1
    }
]
const[total,isv2] = calcularISV2(carrito);

console.log("Total: ", total);
console.log("ISV2 ", isv2);