const apiHost = 'http://topiniskala.com:3000/v1/kohteet.json';

export default {

    async fetchData() {
        const res = await fetch(apiHost);
        const json = await res.json();
        return json.kohteet;
    }
};