import {
  Observable,
  debounceTime,
  fromEvent,
  map,
  mergeAll,
  mergeMap,
  switchMap,
} from 'rxjs';
import { ajax } from 'rxjs/ajax';
import {
  GithubUser,
  GithubUsersResp,
} from '../interfaces/github-users.interface';

//  Referencias
const body = document.querySelector('body');
const textInput = document.createElement('input');
const orderList = document.createElement('ol');
body?.append(textInput, orderList);

// Helpers
const mostrarUsuarios = (users: GithubUser[]) => {
  console.log(users);
  orderList.innerHTML = '';

  users.forEach((user) => {
    const li = document.createElement('li');
    const img = document.createElement('img');
    img.src = user.avatar_url;

    const anchor = document.createElement('a');
    anchor.href = user.html_url;
    anchor.text = 'Ver pagina';
    anchor.target = '_blank';

    li.append(img);
    li.append(user.login + ' ');
    li.append(anchor);

    orderList.append(li);
  });
};

// Streams
const input$ = fromEvent<KeyboardEvent>(textInput, 'keyup');

input$.pipe(
  debounceTime(500),
  map<KeyboardEvent, string>(
    (event) => (event.target as HTMLInputElement).value
  ),
  mergeMap<string, Observable<GithubUsersResp>>((texto) =>
    ajax.getJSON(`https://api.github.com/search/users?q=${texto}`)
  ),
  map<GithubUsersResp, GithubUser[]>((resp) => resp.items)
);
// .subscribe(mostrarUsuarios);

const url = 'https://httpbin.org/delay/1?arg=';

input$
  .pipe(
    map<KeyboardEvent, string>(
      (event) => (event.target as HTMLInputElement).value
    ),
    switchMap((texto) => ajax.getJSON(url + texto))
  )
  .subscribe(console.log);
