import { distinct, distinctUntilChanged, from, of } from 'rxjs';

interface Personaje {
  nombre: string;
}

const personajes: Personaje[] = [
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Megaman',
  },
  {
    nombre: 'Zero',
  },
  {
    nombre: 'Dr. Willy',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'X',
  },
  {
    nombre: 'Zero',
  },
];

from(personajes)
  .pipe(distinctUntilChanged((ant, act) => ant.nombre === act.nombre))
  .subscribe(console.log);
