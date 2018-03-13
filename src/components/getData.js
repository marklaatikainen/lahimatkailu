const apiHost = 'http://topiniskala.com:3000/v1/kohteet.json';

export async function fetchData() {
        const res = await fetch(apiHost);
        const json = await res.json();
        return json.kohteet;
    }

export async function fetchDataByLocation(region, radius) {
        const res = await fetch(apiHost + `?location[lat]=${region.latitude}&location[long]=${region.longitude}&location[dist]=${radius}`)
        const json = await res.json();
        return json.kohteet;
}