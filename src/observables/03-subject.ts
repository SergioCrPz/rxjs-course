import './style.css';
import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
  next: function (value: string): void {
    console.log(`next: ${value}`);
  },
  error: function (err: any): void {
    console.warn(`error: ${err}`);
  },
  complete: function (): void {
    console.info('completado');
  },
};

const intervalo$ = new Observable<number>((subs) => {
  const intervalId = setInterval(() => subs.next(Math.random()), 3000);

  return () => {
    console.log('Intervalo destruido');
    clearInterval(intervalId);
  };
});

/**
 * 1. Casteo multiple
 * 2. Tambien es un observer
 * 3. Next, Error, Complete
 */
const subject$ = new Subject();
const subscription = intervalo$.subscribe(subject$);

// const sub1 = intervalo$.subscribe((rnd) => console.log('sub1', rnd));
// const sub2 = intervalo$.subscribe((rnd) => console.log('sub2', rnd));

const sub1 = subject$.subscribe(observer);
const sub2 = subject$.subscribe(observer);

setTimeout(() => {
  subject$.next(10);
  subject$.complete();
  subscription.unsubscribe();
}, 3500);
