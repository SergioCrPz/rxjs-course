import './style.css';
import { Observable, Observer } from 'rxjs';

const observer: Observer<string> = {
  next: function (value: string): void {
    console.log(`siguiente [next]: ${value}`);
  },
  error: function (err: any): void {
    console.warn(`error [obs]: ${err}`);
  },
  complete: function (): void {
    console.info('completado');
  },
};

const observer2: Observer<string> = {
  next: function (value: string): void {
    console.log(`siguiente 2 [next]: ${value}`);
  },
  error: function (err: any): void {
    console.warn(`error 2 [obs]: ${err}`);
  },
  complete: function (): void {
    console.info('completado 2');
  },
};

const obs$ = new Observable<string>((subs) => {
  subs.next('Hola');
  subs.next('Mundo');

  // Forzar un error
  // const a = undefined;
  // a.nombre = 'fernando';

  subs.complete();
});

obs$.subscribe(observer);
obs$.subscribe(observer2);

// obs$.subscribe(
//   (valor) => console.log('next: ', valor),
//   (error) => console.log('error:', error),
//   () => console.info('Complete')
// );
