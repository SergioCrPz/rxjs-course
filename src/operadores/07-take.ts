import { of, take, tap } from 'rxjs';

const numeros$ = of(1, 2, 3, 4, 5).pipe(tap(console.log), take(3));

numeros$.subscribe({
  next: (val) => console.log('next:', val),
  complete: () => console.log('complete'),
});
