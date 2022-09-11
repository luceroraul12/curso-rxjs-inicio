
import { Observable } from "rxjs";


const obs$ = new Observable<string>( subs => {
    
    subs.next("primer emisión")
    subs.next("segunda emisión")
    subs.next("tercera emisión")

    subs.complete();

    subs.next("cuarta emisión")

});
obs$.subscribe(
    next => console.log("next; "+ next),
    error => console.log("error: "+error),
    () => console.log("complete: ")
    
    
    
);
