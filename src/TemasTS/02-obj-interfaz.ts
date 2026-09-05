interface Alumno{
    nombre: string;
    apellido: string;
    edad:number;
    email: string;
    nota: number
}

const alumno:Alumno={
nombre: "Luis",
apellido:"ss",
edad: 22,
email: 'a@s.com',
}

console.table(alumno)


let mascotas=['perro','gato','perico']

mascotas[1]='nuevo gato'
mascotas.push("leon")
console.log(mascotas)
