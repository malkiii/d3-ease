export function cubicIn(t: number) {
  return t * t * t;
}

export function cubicOut(t: number) {
  return --t * t * t + 1;
}

export function cubicInOut(t: number) {
  return ((t *= 2) <= 1 ? t * t * t : (t -= 2) * t * t + 2) / 2;
}
