
function sumar(n1: number, n2: number): number {
    let res: number = n1 + n2;
    return res;
}
 
const resultado = sumar(3, 4);
console.log(resultado);
 
function multiplicar(n1: number = 2, n2: number = 4): number {
    return n1 * n2;
}
 
console.log(multiplicar());
console.log(multiplicar(3));
console.log(multiplicar(3, 2));
 
function multiplicar2(
    n1: number = 2,
    n2: number = 4,
    base?: number
): number {
    return n1 * n2 * (base ?? 1);
}
 console.log("Esta multiplicacion es con el Base?")
console.log(multiplicar2());
console.log(multiplicar2(3));
console.log(multiplicar2(3, 2));
 
interface Mascotas {
    nombre: string;
    edad: number;
    raza: string;
    sexo?: string;
    vacunado: boolean;
    mostrarEdad(): void;
}
 
function mostrarMascota(mascota: Mascotas, x: number): void {
    mascota.edad = x+mascota.edad;
    console.log(mascota);
    mascota.mostrarEdad();
}
 
const nuevaMascota: Mascotas = {
    nombre: "Firulais",
    edad: 5,
    raza: "Pastor Aleman",
    vacunado: true,
 
    mostrarEdad() {
        console.log(`La edad de ${this.nombre} es ${this.edad}`);
    }
};
 
mostrarMascota(nuevaMascota, 3);
 