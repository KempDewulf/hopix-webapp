"use strict";

const BASE_URL = 'https://hopix.test/api/breweries';

export default class BreweryFilterService {
    async all() {
        let url = `${BASE_URL}`;
        const response = await fetch(url);
        return response.json();
    }
}