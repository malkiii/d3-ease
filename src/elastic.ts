import { tpmt } from './math';

const tau = 2 * Math.PI,
  amplitude = 1,
  period = 0.3;

export const elasticIn = (function custom(a, p) {
  const s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticIn(t: number) {
    return a * tpmt(-(--t)) * Math.sin((s - t) / p);
  }

  elasticIn.amplitude = function (a: number) {
    return custom(a, p * tau);
  };
  elasticIn.period = function (p: number) {
    return custom(a, p);
  };

  return elasticIn;
})(amplitude, period);

export const elasticOut = (function custom(a, p) {
  const s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticOut(t: number) {
    return 1 - a * tpmt((t = +t)) * Math.sin((t + s) / p);
  }

  elasticOut.amplitude = function (a: number) {
    return custom(a, p * tau);
  };
  elasticOut.period = function (p: number) {
    return custom(a, p);
  };

  return elasticOut;
})(amplitude, period);

export const elasticInOut = (function custom(a, p) {
  const s = Math.asin(1 / (a = Math.max(1, a))) * (p /= tau);

  function elasticInOut(t: number) {
    return (
      ((t = t * 2 - 1) < 0
        ? a * tpmt(-t) * Math.sin((s - t) / p)
        : 2 - a * tpmt(t) * Math.sin((s + t) / p)) / 2
    );
  }

  elasticInOut.amplitude = function (a: number) {
    return custom(a, p * tau);
  };
  elasticInOut.period = function (p: number) {
    return custom(a, p);
  };

  return elasticInOut;
})(amplitude, period);
