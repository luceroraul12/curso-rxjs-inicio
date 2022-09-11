import { range, tap, map } from "rxjs";

//el tap se puede usar para ejecutar algo que no va a modificar el flujo de información. por ejemplo, se puede mostrar por consola lo que esta pasando por ese observable y de esa manera depurar
range(5, 10)
    .pipe(
        //un uso muy común es el depuración
        tap((info) => console.log("tap: antes del map", info)),
        map((info) => info * 100),
        tap((info) => console.log("tap: despues del map", info))
    )
    //en este caso. el ultimo tap está haciendo la misma funcion que la del subscribe, pero aún asi, el subscribe sigue siendo importante debido a que si el subscribe no existe, nunca comenzará a fluir información debido a que no existen elementos subscriptos.
    .subscribe((respuesta) => console.log("subscripcion: resultado final:", respuesta));
