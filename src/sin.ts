const pi = Math.PI,
  halfPi = pi / 2;

export function sinIn(t: number) {
  return +t === 1 ? 1 : 1 - Math.cos(t * halfPi);
}

export function sinOut(t: number) {
  return Math.sin(t * halfPi);
}

export function sinInOut(t: number) {
  return (1 - Math.cos(pi * t)) / 2;
}
