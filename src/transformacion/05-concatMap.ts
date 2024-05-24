import { concatMap, fromEvent, interval, switchMap, take } from 'rxjs';

const interval$ = interval(500).pipe(take(3));
const click$ = fromEvent(document, 'click');

click$.pipe(concatMap(() => interval$)).subscribe(console.log);
