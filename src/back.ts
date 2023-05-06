const overshoot = 1.70158;

export const backIn = (function custom(s: number) {
  s = +s;

  function backIn(t: number) {
    return (t = +t) * t * (s * (t - 1) + t);
  }

  backIn.overshoot = custom;

  return backIn;
})(overshoot);

export const backOut = (function custom(s) {
  s = +s;

  function backOut(t: number) {
    return --t * t * ((t + 1) * s + t) + 1;
  }

  backOut.overshoot = custom;

  return backOut;
})(overshoot);

export const backInOut = (function custom(s) {
  s = +s;

  function backInOut(t: number) {
    return (
      ((t *= 2) < 1
        ? t * t * ((s + 1) * t - s)
        : (t -= 2) * t * ((s + 1) * t + s) + 2) / 2
    );
  }

  backInOut.overshoot = custom;

  return backInOut;
})(overshoot);
