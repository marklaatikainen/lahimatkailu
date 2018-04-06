export function targetIcon(type) {
  if (type === 'Ruoka') {
    return 'http://maps.gstatic.com/mapfiles/ms2/micons/restaurant.png';
  } else if (type === 'Nähtävyys') {
    return 'http://maps.gstatic.com/mapfiles/ms2/micons/tree.png';
  } else if (type === 'Palvelu') {
    return 'http://maps.gstatic.com/mapfiles/ms2/micons/realestate.png';
  }
}

export function filter(data, filter) {
  let filteredData = [];

  if (filter !== '') {
    for (var _id in data) {
      if (
        data[_id].name.toUpperCase().indexOf(filter.toUpperCase()) > -1 ||
        data[_id].type.toUpperCase().indexOf(filter.toUpperCase()) > -1 ||
        data[_id].address.city.toUpperCase().indexOf(filter.toUpperCase()) > -1
      ) {
        filteredData.push(data[_id]);
      }
    }
    return filteredData;
  } else {
    return data;
  }
}
