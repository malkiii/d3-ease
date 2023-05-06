const exponent = 3;

export const polyIn = (function custom(e) {
  e = +e;

  function polyIn(t: number) {
    return Math.pow(t, e);
  }

  polyIn.exponent = custom;

  return polyIn;
})(exponent);

export const polyOut = (function custom(e) {
  e = +e;

  function polyOut(t: number) {
    return 1 - Math.pow(1 - t, e);
  }

  polyOut.exponent = custom;

  return polyOut;
})(exponent);

export const polyInOut = (function custom(e) {
  e = +e;

  function polyInOut(t: number) {
    return ((t *= 2) <= 1 ? Math.pow(t, e) : 2 - Math.pow(2 - t, e)) / 2;
  }

  polyInOut.exponent = custom;

  return polyInOut;
})(exponent);
