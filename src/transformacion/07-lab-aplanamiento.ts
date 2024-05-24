import { catchError, exhaustMap, fromEvent, map, of, tap } from 'rxjs';
import { ajax } from 'rxjs/ajax';

// Helper
const peticionHttpLogin = (userPass) =>
  ajax.post('https://reqres.in/api/login?delay=1', userPass).pipe(
    map((res) => res.response.token),
    catchError((err) => of(''))
  );

// Creando un formulario
const form = document.createElement('form');
const inputEmail = document.createElement('input');
const inputPass = document.createElement('input');
const submitBtn = document.createElement('button');

// Configuraciones
inputEmail.type = 'email';
inputEmail.placeholder = 'Email';
inputEmail.value = 'eve.holt@reqres.in';

inputPass.type = 'password';
inputPass.placeholder = 'Password';
inputPass.value = 'cityslicka';

submitBtn.innerHTML = 'Ingresar';

form.append(inputEmail, inputPass, submitBtn);
document.querySelector('body')?.append(form);

// Streams
const submitForm$ = fromEvent(form, 'submit').pipe(
  tap((ev) => ev.preventDefault()),
  map((ev) => ({
    email: (ev.target[0] as HTMLInputElement).value,
    password: (ev.target[1] as HTMLInputElement).value,
  })),
  exhaustMap(peticionHttpLogin)
);

submitForm$.subscribe((token) => console.log(token));
