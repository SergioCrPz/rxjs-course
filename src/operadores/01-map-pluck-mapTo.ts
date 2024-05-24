import { fromEvent, map, mapTo, pluck, range } from 'rxjs';

// range(1, 5)
//   .pipe(map<number, string>((val) => (val * 10).toString()))
//   .subscribe(console.log);

const keyUp$ = fromEvent<KeyboardEvent>(document, 'keyup');
const keyupCode$ = keyUp$.pipe(map((event) => event.code));

const keyupPluck$ = keyUp$.pipe(pluck('target', 'baseURI'));

const keyupMapTo$ = keyUp$.pipe(mapTo('Tecla presionada'));

keyUp$.subscribe(console.log);
keyupCode$.subscribe((code) => console.log('map', code));
keyupPluck$.subscribe((code) => console.log('pluck', code));
keyupMapTo$.subscribe((code) => console.log(code));
