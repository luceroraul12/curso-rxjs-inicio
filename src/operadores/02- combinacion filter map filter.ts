import { filter, from, of, range, map } from "rxjs";

console.log("ejemplo filter #1");
//genero un observable de numeros del 0 al 10
range(0, 10)
    .pipe(
        //aplico el filter para que solo deje pasar los que cumplan la condición
        filter((numero: number, i: number) => {
            console.log("intento:", i);
            //condicion: que sean pares
            return numero % 2 == 0;
        })
    )
    //me subscribo. devuelve los que son pares
    .subscribe(console.log);
console.log("ejemplo filter #2");
//me genero una interface para poder indicar el tipo de datos que van a ingresar en el observable
interface Personaje {
    tipo: string;
    nombre: string;
    precio: Precio;
}
interface Precio {
    ip: number;
    rp: number;
}

const protasLOL: Personaje[] = [
    {
        tipo: "principal",
        nombre: "ezreal",
        precio: {
            ip: 90000,
            rp: 790,
        },
    },
    {
        tipo: "secundario",
        nombre: "darius",
        precio: {
            ip: 5600,
            rp: 1200,
        },
    },
    {
        tipo: "principal",
        nombre: "caitlyn",
        precio: {
            ip: 3150,
            rp: 790,
        },
    },
    {
        tipo: "principal",
        nombre: "heimer",
        precio: {
            ip: 750,
            rp: 150,
        },
    },
    {
        tipo: "secundario",
        nombre: "gwen",
        precio: {
            ip: 12000,
            rp: 980,
        },
    },
];

//para recorrerlos de manera de Observable uso from, toma mi arreglo, lo separa y los va emitiendo uno por uno.
from(protasLOL)
    //comienzo a usar operadores
    .pipe(
        //uso filter para dejar pasar solo los que son principales. filter<Puedo> puedo indicarle el tipo de información
        filter<Personaje>((personaje) => personaje.tipo == "principal")
    )
    //muestro el resultado en pantalla
    .subscribe(console.log);

console.log("ejemplo mezcla de operadores map filter #3");
from(protasLOL)
    .pipe(
        //Solo dejo pasar aquellos que sean del tipo principal
        filter<Personaje>((personaje) => personaje.tipo == "principal"),
        //desestructuro, solo me interesan los precios asociados a cada personaje
        map<Personaje, Precio>((personaje: Personaje) => personaje.precio),
        //dentro de cada precio, solo me interesan los que tenga un valor en ip mayor a 4000
        filter<Precio>((precio) => precio.ip > 4000)
    )
    //muestro el resultado en consola
    .subscribe(console.log);
