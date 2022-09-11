import { fromEvent, range, Observable } from "rxjs";
import { map, pluck } from "rxjs/operators";

console.log("prueba con map #1");

//unico observable, no colocar ; al final, todo es en la misma llamada, solo que lo separé por partes
range(1, 5)
    // aplicando cambios a la salida en el subscribe
    // .subscribe((respuesta) => console.log(respuesta * 10));

    //operador que permite usar otros operadores
    .pipe(
        //uso del primer operador, map() indica que lo el tipo de lo que sale será igual al del elemento que entró <TipoA, TipoA>
        // map((valor) => valor * 10)
        //uso del del map pero indicandole el tipo de entrada <number y el tipo de salida number>
        map<number, number>((valor) => valor * 10)
    )
    //De acá en adelante, todos los que estén subscritos verán la información ya modificada por el map
    .subscribe(console.log);

console.log("prueba con map #2");
const keyup$: Observable<KeyboardEvent> = fromEvent<KeyboardEvent>(document, "keyup");
// como los casos anteriores, trabajo la data desde el subscribe
// //a la respuesta le tengo que indicar el tipo para poder acceder a los atributos de la clase
// keyup$.subscribe((respuesta: KeyboardEvent) => console.log(respuesta.key));

//para modificar la información del observable y que todos los subscriptos vean la data modificada. En este caso, solo quiero mantener la tecla presionada y el resto no
const keyupSoloLaTecla$ = keyup$.pipe(
    map<KeyboardEvent, string>((entrada: KeyboardEvent) => entrada.key)
);
//me fijo que tira el map
keyupSoloLaTecla$.subscribe((rta: string) => console.log("map", rta));

console.log("pluck dejó de usarse, es mas seguro entrar con map que es practicamente lo mismo");

console.log("prueba con mapTo #4");
