import { Observable, Observer, Subject } from "rxjs"

const observer: Observer<string> = {
    next: next => console.log('next: ', next),
    error: error => console.log('error: ', error),
    complete: () => console.log("completado")    
}

const subject$ = new Subject<boolean>();
const subs1 = subject$.subscribe(respuesta => setInterval(
    () => console.log("muestro min nombre RAUL"), 500
));
const subs2 = subject$.subscribe(respuesta => console.log("muestro mi correo: luceroraul12@gmail.com"));

subject$.next(true);
subject$.next(true);
subject$.next(false);
subject$.next(false);