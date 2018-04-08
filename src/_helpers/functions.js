export function precisionRound(number, precision) {
  var factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

export function mapValues(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export function mapped(slider) {
  return precisionRound(mapValues(slider, 0, 1, 0, 100), 0);
}

export function translate(t) {
  if (t === 'Ruoka') {
    type = 'food';
  } else if (t === 'Palvelu') {
    type = 'service';
  } else {
    type = 'sight';
  }
  return type;
}
