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

function isClosingToday(convertedClosing, convertedOpen, timeNow) {
  if (convertedClosing < convertedOpen) {
    if (timeNow > convertedOpen || (timeNow > 0 && timeNow < convertedClosing)) {
      return true;
    }
  }
  return convertedClosing > timeNow && timeNow > convertedOpen;
}

function isClosingSoon(convertedClosing, convertedOpen, timeNow) {
  if (timeNow > convertedClosing) {
    return convertedClosing + 24 - timeNow <= 1;
  }
  return convertedClosing - timeNow <= 1;
}

function opensToday(convertedOpen, timeNow) {
  return convertedOpen > timeNow;
}

function convertTimeStrArrToFloat(timeStrArr) {
  return parseFloat(`${parseInt(timeStrArr[0], 10)}.${parseInt(timeStrArr[1] / 6 * 10, 10)}`);
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
  const minutes = compare.getMinutes();

  const closes = selectDay(today, openingHours).end;
  const opens = selectDay(today, openingHours).start;

  let convertedClosing = closes.split(':');
  let convertedOpen = opens.split(':');
  let convertedTimeNow = [hours, minutes];

  convertedClosing = convertTimeStrArrToFloat(convertedClosing);
  convertedOpen = convertTimeStrArrToFloat(convertedOpen);
  convertedTimeNow = convertTimeStrArrToFloat(convertedTimeNow);

  if (is24h(convertedClosing, convertedOpen)) {
    return context.t('clock-o');
  } else if (isClosingToday(convertedClosing, convertedOpen, convertedTimeNow)) {
    if (isClosingSoon(convertedClosing, convertedOpen, convertedTimeNow)) {
      return `${context.t('closesToday')} ${closes} \n${context.t('closesSoon')}`;
    }
    return `${context.t('closesToday')} ${closes}`;
  } else if (opensToday(convertedOpen, convertedTimeNow)) {
    return `${context.t('closed')}. ${context.t('opensAt')}: ${opens}`;
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
