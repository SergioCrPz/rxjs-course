import { combineLatest, fromEvent, map, merge } from 'rxjs';

// const keyup$ = fromEvent(document, 'keyup');
// const click$ = fromEvent(document, 'click');

// combineLatest(
//   keyup$.pipe(map((key) => key.type)),
//   click$.pipe(map((click) => click.type))
// ).subscribe(console.log);

const input1 = document.createElement('input');
const input2 = document.createElement('input');

input1.placeholder = 'email@gmail.com';
input2.placeholder = '****';
input2.type = 'password';

document.querySelector('body')?.append(input1, input2);

// Helper
const getInputStream = (elem: HTMLElement) =>
  fromEvent<KeyboardEvent>(elem, 'keyup').pipe(map((tar) => tar.target.value));

combineLatest(getInputStream(input1), getInputStream(input2)).subscribe(
  console.log
);
