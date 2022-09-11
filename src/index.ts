import { filter, range } from "rxjs";

console.log("usos de filter");
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
