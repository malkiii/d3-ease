import { tpmt } from './math';

export function expIn(t: number) {
  return tpmt(1 - +t);
}

export function expOut(t: number) {
  return 1 - tpmt(t);
}

export function expInOut(t: number) {
  return ((t *= 2) <= 1 ? tpmt(1 - t) : 2 - tpmt(t - 1)) / 2;
}
