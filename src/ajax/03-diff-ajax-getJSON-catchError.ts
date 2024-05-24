import { catchError, of } from 'rxjs';
import { AjaxError, ajax } from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

const manejoErrores = function (resp: AjaxError) {
  console.warn('error', resp.message);
  return of({
    ok: false,
    usuarios: [],
  });
};

const obs$ = ajax.getJSON(url);
const obs2$ = ajax(url);

// obs$
//   .pipe(catchError(manejoErrores))
//   .subscribe((data) => console.log('getJSON:', data));

// obs2$
//   .pipe(catchError(manejoErrores))
//   .subscribe((data) => console.log('ajax:', data));

// obs$.subscribe((data) => console.log('getJSON:', data));

obs$.subscribe({
  next: (value) => console.log('next:', value),
  error: (err) => console.warn('error en subs:', err),
  complete: () => console.log('Complete'),
});
