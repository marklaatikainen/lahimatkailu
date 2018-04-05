import { apiHost } from '../_helpers';

export const dataService = {
    fetchData,
    fetchDataByLocation
};

async function fetchData() {
    return fetch(apiHost).then(response => {
        return response.json();
    }).then(responseJson => {
        return responseJson.kohteet;
    })
}

async function fetchDataByLocation(region) {
    const radius = (region.latitudeDelta + region.longitudeDelta) * 0.3;

    return fetch(apiHost + `?location[lat]=${region.latitude}&location[long]=${region.longitude}&location[dist]=${radius}`).then(response => {
        return response.json()
    }).then(responseJson => {
        return responseJson.kohteet;
    })
}