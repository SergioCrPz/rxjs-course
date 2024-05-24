import { map, range, tap } from 'rxjs';

const numeros$ = range(1, 5);

numeros$
  .pipe(
    tap((x) => console.log('antes', x)),
    map((val) => val * 10),
    tap({
      next: (valor) => console.log('despues', valor),
      complete: () => console.log('Se termino todo'),
    })
  )
  .subscribe((val) => console.log('subs', val));
