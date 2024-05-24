import { first, fromEvent, map, take, tap } from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    tap<PointerEvent>(console.log),
    map(
      ({ clientX, clientY }) => ({
        clientY,
        clientX,
      }),
      first((event) => event.clientY >= 150)
    )
  )
  .subscribe({
    next: (val) => console.log('next:', val),
    complete: () => console.log('complete'),
  });
