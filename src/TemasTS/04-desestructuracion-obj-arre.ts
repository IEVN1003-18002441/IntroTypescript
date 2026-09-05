interface Reproductor {
    volumen: number;
    segundo: number;
    cancion: string;
    detalles: Detalles;
}
 
interface Detalles {
    autor: string;
    anio: number;
}
 
const reproductor: Reproductor = {
    volumen: 3,
    segundo: 4,
    cancion: "sss",
    detalles: {
        autor: "ddd",
        anio: 11
    }
};
 
console.log(`El volumen actual es`, reproductor.volumen);
console.log(`El segundo actual es`, reproductor.segundo);
console.log(`La cancion actual es`, reproductor.cancion);
console.log(`El autor es`, reproductor.detalles.autor);
console.log(`El año es`, reproductor.detalles.anio);



const dbz:string[]=["Goku","Vegeta","Trunks"];
const[p1,p2,p3]= dbz;

console.log("------------------------------------")

console.log("El personaje numero 1 es "+p1)
console.log("El personaje numero 2 es "+p2)
console.log("El personaje numero 3 es "+p3)


