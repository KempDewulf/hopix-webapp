const BASE_URL = 'https://hopix.test/api/beers';

export default class BeerCardService {
    static async fetchBeerData(endpoint) {
        const language = localStorage.getItem("language");
        let params = {
            lang: language,
        };
        const url = `${BASE_URL}/${endpoint}?${new URLSearchParams(params).toString()}`;

        const response = await fetch(url);
        return response.json();
    }

    static async fetchBeerById(id) {
        return this.fetchBeerData(id);
    }

    static async fetchBeerByName(name) {
        return this.fetchBeerData(name);
    }

    static async fetchReviewsByBeerId(id) {
        return this.fetchBeerData(`${id}/reviews`);
    }

    static async fetchAromasByBeerId(id) {
        return this.fetchBeerData(`${id}/aromas`);
    }

    static async fetchBreweryByBeerId(id) {
        return this.fetchBeerData(`${id}/brewery`);
    }
}