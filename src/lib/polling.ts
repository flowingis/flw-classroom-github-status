import { Observable, timer } from "rxjs";

export function polling(
  interval: number,
  startImmediately: boolean
): Observable<number> {
  return timer(startImmediately ? 0 : interval, interval);
}
