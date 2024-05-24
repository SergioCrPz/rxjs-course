import { catchError, forkJoin, of, pipe } from 'rxjs';
import { ajax } from 'rxjs/ajax';

const GITHUB_API_URL = 'https://api.github.com/users';
const GITHUB_USER = 'sergiocrpz';

forkJoin({
  usuario: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}`),
  repos: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/repos`),
  gists: ajax.getJSON(`${GITHUB_API_URL}/${GITHUB_USER}/gists`),
})
  .pipe(catchError((err) => of(err)))
  .subscribe(console.log);
