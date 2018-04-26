import { foodIcon, serviceIcon, sightIcon, isOpen24h, areOpHoursEmpty } from '../../_helpers';

export function markerImgUrl(icon) {
  if (icon === 'Ruoka') {
    return foodIcon;
  } else if (icon === 'Nähtävyys') {
    return sightIcon;
  }
  return serviceIcon;
}

function selectDay(today, opHo) {
  const { sun, mon, tue, wed, thu, fri, sat } = opHo;
  const days = [sun, mon, tue, wed, thu, fri, sat];

  return days[today];
}

function is24h(closes, opens) {
  return closes === 24 && opens === 0;
}

function isClosing(convertedClosing, hours) {
  return convertedClosing - hours < 3;
}

function isClosingSoon(convertedClosing, hours) {
  return convertedClosing - hours >= 1;
}

function isClosingToday(convertedClosing, convertedOpen, hours) {
  if (convertedClosing < convertedOpen) {
    if ((24 > hours && hours > convertedOpen) || (0 < hours && hours < convertedClosing)) {
      
      return true;
    }
  }
  return convertedClosing > hours;
}

function isOpeningSoon(convertedOpen, hours) {
  return convertedOpen > hours;
}

export function opHours(data, context) {
  const { openingHours } = data;

  if (isOpen24h(data)) {
    return context.t('clock-o');
  }
  if (areOpHoursEmpty(openingHours)) {
    return context.t('opHoursUnknown');
  }

  const compare = new Date();
  const today = compare.getDay();
  const hours = compare.getHours();

  const closes = selectDay(today, openingHours).end;
  const opens = selectDay(today, openingHours).start;

  let convertedClosing = closes.split(':');
  let convertedOpen = opens.split(':');

  convertedClosing = parseFloat(
    `${parseInt(convertedClosing[0], 10)}.${parseInt(
      convertedClosing[1] / 6 * 10,
      10
    )}`
  );
  convertedOpen = parseFloat(
    `${parseInt(convertedOpen[0], 10)}.${parseInt(
      convertedOpen[1] / 6 * 10,
      10
    )}`
  );

  if (isOpeningSoon(convertedOpen, hours)) {
    return `${context.t('closed')}. ${context.t('opensAt')}: ${opens}`;
  } else if (isClosingToday(convertedClosing, convertedOpen, hours)) {
    if (convertedOpen <= hours) {
      return `${context.t('closesToday')} ${closes}`;
    }
  } else if (is24h(convertedClosing, convertedOpen)) {
    return context.t('clock-o');
  } else if (isClosing(convertedClosing, hours)) {
    if (isClosingSoon(convertedClosing, hours)) {
      return `${context.t('closesToday')} ${closes} \n${context.t('closesSoon')}`;
    } else if (convertedClosing - hours > convertedClosing) {
      return `${context.t('closesToday')} ${closes} \n(Sulkeutuu <1h päästä)`;
    }
  }
  return context.t('closed');
}

export function filter(data, checkbox) {
  let filteredData = []; // eslint-disable-line
  const { food, sight, service } = checkbox.values;

  for (const _id in data) {
    if (data) {
      if (food && data[_id].type === 'Ruoka') {
        filteredData.push(data[_id]);
      }
      if (sight && data[_id].type === 'Nähtävyys') {
        filteredData.push(data[_id]);
      }
      if (service && data[_id].type === 'Palvelu') {
        filteredData.push(data[_id]);
      }
    }
  }
  return filteredData;
}
