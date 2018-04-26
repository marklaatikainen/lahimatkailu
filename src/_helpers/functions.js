export function precisionRound(number, precision) {
  const factor = Math.pow(10, precision);
  return Math.round(number * factor) / factor;
}

export function mapValues(num, in_min, in_max, out_min, out_max) {
  return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}

export function mapped(slider) {
  return precisionRound(mapValues(slider, 0, 1, 0, 100), 0);
}

export function translate(t) {
  let type;
  if (t === 'Ruoka') {
    type = 'food';
  } else if (t === 'Palvelu') {
    type = 'service';
  } else {
    type = 'sight';
  }
  return type;
}

export function isOpen24h(data) {
  if(data.hasOwnProperty('symbols')) {
    if (data.symbols.includes('clock-o')) {
      return true;
    }  
  }
  return false;
}

export function areOpHoursEmpty(openingHours) {
  let areOpeningHoursEmpty = true;

  for (let day in openingHours) {
    if (openingHours[day].start) {
      areOpeningHoursEmpty = false;
      break;
    }
  }
  return areOpeningHoursEmpty;
}
