
export interface Producto{
desc:string,
precio:number
}



const Telefono:Producto={
desc: "Iphone 17",
precio:1200
}

const Tablet:Producto={
    desc: "Ipad Air",
    precio: 2500
}

 function calularISv(productos:Producto[]) :number{
let total=0

for  (const producto of productos) {
    total+=producto.precio

}
     return total*0.15
}

const articulos = [Telefono, Tablet]
const isv= calularISv(articulos)
console.log("ISV ",isv)


//Aqui comienza con la desestructuracion de funcioes 
export function calcularISV2 (productos:Producto[]):[number,number]{
    let total = 0;
    for(const producto of productos){
        total += producto.precio
    }
    return [total,total*0.15];
}

const[total,isv2] = calcularISV2(articulos);
console.log("Total: ", total);
console.log("ISV2 ", isv2);