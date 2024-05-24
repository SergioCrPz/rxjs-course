import './style.css';
import { Observable, Observer } from 'rxjs';

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

const intervalo$ = new Observable<number>((subscriber) => {
  // Crear un contador

  let num: number = 1;

  const interval = setInterval(() => {
    subscriber.next(num);
    console.log(num);
    num++;
  }, 2500);

  setTimeout(() => {
    subscriber.complete();
  }, 2500);

  return () => {
    clearInterval(interval);
    console.log('Intervalo destruido');
  };
});

const subscription1 = intervalo$.subscribe(observer);
const subscription2 = intervalo$.subscribe(observer);
const subscription3 = intervalo$.subscribe(observer);

subscription1.add(subscription2);

setTimeout(() => {
  // subscription1.unsubscribe();
  // subscription2.unsubscribe();
  // subscription3.unsubscribe();
  console.log('Completado timeout');
}, 6000);
