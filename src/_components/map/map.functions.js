import React from 'react';
import { View, Text, Image } from 'react-native';
import { Callout, Marker } from 'react-native-maps';
import { getDistance } from 'geolib';

import { styles } from '../map';

export function markerImgUrl(icon) {
  if (icon == 'Ruoka') {
    return 'http://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png';
  } else if (icon == 'Nähtävyys') {
    return 'http://maps.gstatic.com/mapfiles/ms2/micons/tree.png';
  } else {
    return 'http://maps.gstatic.com/mapfiles/ms2/micons/realestate.png';
  }
}

export function openingHours(data) {
  const compare = new Date();
  const { openingHours } = data;
  const today = compare.getDay();
  const hours = compare.getHours();

  const closes = selectDay(today, openingHours);

  let convertedClosing = closes.split(':');
  convertedClosing = parseFloat(
    parseInt(convertedClosing[0], 10) +
      '.' +
      parseInt(convertedClosing[1] / 6 * 10, 10)
  );

  if (convertedClosing - hours < 0) {
    return 'Suljettu nyt';
  } else if (convertedClosing - hours > 3) {
    return 'Sulkeutuu tänään: ' + closes;
  } else if (convertedClosing - hours < 3) {
    if (convertedClosing - hours >= 1) {
      return (
        'Sulkeutuu tänään: ' +
        closes +
        '\n(Sulkeutuu ' +
        Math.floor(convertedClosing - hours) +
        'h päästä)'
      );
    } else {
      return 'Sulkeutuu tänään: ' + closes + '\n(Sulkeutuu <1h päästä)';
    }
  } else {
    return 'Avoinna 24h';
  }
}

function selectDay(today, openingHours) {
  const { sun, mon, tue, wed, thu, fri, sat } = openingHours;
  const days = [sun, mon, tue, wed, thu, fri, sat];

  return days[today].end;
}

export function filter(data, checkbox) {
  let filteredData = [];
  const { food, sight, service } = checkbox.values;

  for (var _id in data) {
    if (food && data[_id].type == 'Ruoka') filteredData.push(data[_id]);
    if (sight && data[_id].type == 'Nähtävyys') filteredData.push(data[_id]);
    if (service && data[_id].type == 'Palvelu') filteredData.push(data[_id]);
  }
  return filteredData;
}
