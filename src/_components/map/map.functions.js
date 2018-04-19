import { foodIcon, serviceIcon, sightIcon } from '../../_helpers';

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

  return days[today].end;
}

export function opHours(data, context) {
  const compare = new Date();
  const { openingHours } = data;
  const today = compare.getDay();
  const hours = compare.getHours();

  const closes = selectDay(today, openingHours);

  let convertedClosing = closes.split(':');
  convertedClosing = `${parseFloat(
    parseInt(convertedClosing[0], 10)
  )} . ${parseInt(convertedClosing[1] / 6 * 10, 10)}`;

  if (convertedClosing - hours < 0) {
    return context.t('closed');
  } else if (convertedClosing - hours > 3) {
    return `${context.t('slosesToday')}${closes}`;
  } else if (convertedClosing - hours < 3) {
    if (convertedClosing - hours >= 1) {
      return `${context.t('closesToday')}${closes} '\n(Sulkeutuu ' ${Math.floor(convertedClosing - hours)} h päästä`;
    }
    return `${context.t('closesToday')} ${closes} '\n(Sulkeutuu <1h päästä)`;
  }
  return context.t('clock-o');
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
