import { fromEvent, map, takeWhile } from 'rxjs';

type Point = {
  x: number;
  y: number;
};

const click$ = fromEvent<PointerEvent>(document, 'click');

click$
  .pipe(
    map<PointerEvent, Point>(({ x, y }) => ({ x, y })),
    // takeWhile<Point>(({ y }) => y <= 150)
    takeWhile<Point>(({ y }) => y <= 150, true)
  )
  .subscribe({
    next: (val) => console.log('next:', val),
    complete: () => console.log('completed'),
  });
