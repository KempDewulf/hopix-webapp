"use strict";

const BASE_URL = 'https://hopix.test/api/beers';

export default class BeerService {
    async all(search) {
        const url = `${BASE_URL}`;
        const response = await fetch(url);
        return response.json();
    }
}
