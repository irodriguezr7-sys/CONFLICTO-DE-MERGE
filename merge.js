document.getElementById("titulo").textContent = "Texto combinado de RAMA 1 y RAMA 2";

const prompt = require("prompt-sync")();
/*
 class suma {modelo}

let celular = [{Marca: 'Iphone', Modelo: '16 Pro max', Año: 2006}]
console.log(celular)


function Persona(nombre,edad){
    this.nombre=nombre
    this.edad=edad
}
let persona1= new Persona ('Pedro',20)
console.log(persona1)
persona1.edad=18
persona1.nombre= 'Ivan'
console.log(persona1)


function Computadora(marca,modelo,color,ram){
    this.marca = marca
    this.modelo = modelo
    this.color = color
    this.ram = ram
    this.accesorios = ['Mouse','Teclado','Parlante']
}
    let compus=[]
    let i=0
    let cantidad = parseInt(prompt("Ingrese la cantidad de computadoras que quiere crear: "));
    while (i < cantidad){
        let marca = prompt (`Ingrese la marca de la Computadora N°${i+1}: `)
        let modelo = prompt (`Ingrese el modelo de la Computadora N°${i+1}: `)
        let color = prompt (`Ingrese el color de la Computadora N°${i+1}: `)
        let ram = parseInt(prompt (`Ingrese la RAM de la Computadora N°${i+1}: `))
        let pc =  new Computadora(
            marca,
            modelo,
            color,
            ram,
        )
            compus.push(pc)
        i++
    }

    compus.forEach((pc,indice)=>{
        console.log(`\n La Computadora ${indice+1}` )
        console.log(`La Marca es: ${pc.marca}` )
        console.log(`El Modelo es: ${pc.modelo}` )
        console.log(`El color es: ${pc.color}` )
        console.log(`La RAM es: ${pc.ram}` )
        console.log(`Los Accesorios que tiene son: \n${pc.accesorios}` )
    })
 


    let numeros = [1,2,3,4,5,6,7]
     numeros.forEach((numero,contador,arreglo)=>{
        if (numero % 2 === 0){
        console.log(numero)
        console.log(contador+1)
    }
    console.log(arreglo)
     }
)
*/
    let estudiantes = [
    { nombre: "Pedro", notas: [8, 10, 7] },
    { nombre: "Ana", notas: [9, 9, 10] },
    { nombre: "Luis", notas: [5, 6, 7] }
];

estudiantes.forEach((datos, posicion) => {
    console.log(`Estudiante ${posicion + 1}: ${datos.nombre}`);
    console.log(`Notas: ${datos.notas}`);

    let suma = 0;

    datos.notas.forEach((nota) => {
        suma += nota;
    });

    let promedio = suma / datos.notas.length;

    datos.promedio = promedio;
    
    aprobado = (promedio >= 7) ? `El estudiante ${datos.nombre}: APROBADO` : `El estudiante ${datos.nombre}: REPROBADO`
    console.log (aprobado)
    
    console.log(`Promedio: ${promedio.toFixed(2)}`);
});

let aprobados = estudiantes.filter((datos) => {
    return datos.promedio >= 7;
});

console.log("\nAPROBADOS:");
console.log(aprobados);