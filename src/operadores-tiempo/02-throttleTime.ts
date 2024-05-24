import {
  asyncScheduler,
  distinctUntilChanged,
  fromEvent,
  map,
  throttleTime,
} from 'rxjs';

const click$ = fromEvent<PointerEvent>(document, 'click');

click$.pipe(throttleTime(3000));
// .subscribe(console.log);

const input = document.createElement('input');
document.querySelector('body')?.append(input);

const input$ = fromEvent<KeyboardEvent>(input, 'keyup');

input$
  .pipe(
    throttleTime(600, asyncScheduler, {
      leading: true,
      trailing: true,
    }),
    map((event) => event.target.value),
    distinctUntilChanged()
  )
  .subscribe(console.log);
