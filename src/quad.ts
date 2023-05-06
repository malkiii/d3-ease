export function quadIn(t: number) {
  return t * t;
}

export function quadOut(t: number) {
  return t * (2 - t);
}

export function quadInOut(t: number) {
  return ((t *= 2) <= 1 ? t * t : --t * (2 - t) + 1) / 2;
}
