import { Observable, Observer } from "rxjs"

const observer: Observer<string> = {
    next: next => console.log('next: ', next),
    error: error => console.log('error: ', error),
    complete: () => console.log("completado")    
}

const intervalo$ = new Observable<number>(
    subs => {
        let contador: number = 0;
        const intervalo = setInterval(
            () => {

                subs.next(contador++);
            }, 1000
        );

        return ()=> {
            clearInterval(intervalo);
            console.log("intervalo deshabilitado");
            
        }
    }
)


const primerSubscription = intervalo$.subscribe(console.log);
const segundaSubscription = intervalo$.subscribe(console.log);
const terceraSubscription = intervalo$.subscribe(console.log);

primerSubscription.add(segundaSubscription);
segundaSubscription.add(terceraSubscription);
setTimeout(() => {
    primerSubscription.unsubscribe();

},5000);