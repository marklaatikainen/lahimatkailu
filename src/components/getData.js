const apiHost = 'http://topiniskala.com:3000/v1/kohteet.json';

export async function fetchData() {
  return fetch(apiHost)
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw new Error("Response not ok");
    })
    .then(responseJson => {
      return responseJson.kohteet;
    })
    .catch((error) => {
      throw error;
    });
}

export async function fetchDataByLocation(region) {
  const radius = (region.latitudeDelta + region.longitudeDelta) * 0.3;

  return fetch(apiHost + `?location[lat]=${region.latitude}&location[long]=${region.longitude}&location[dist]=${radius}`)
    .then(response => {
      if(response.ok) {
        return response.json()
      }
      throw new Error("Response not ok");
    })
    .then(responseJson => {
      return responseJson.kohteet;
    })
    .catch((error) => {
      throw error;
    });
}