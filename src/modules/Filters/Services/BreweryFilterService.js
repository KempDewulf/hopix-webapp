"use strict";

const BASE_URL = 'https://hopix.test/api/breweries';

export default class BreweryFilterService {
    static async all() {
        const language = localStorage.getItem("language");
        let url = `${BASE_URL}?lang=${language}`;
        const response = await fetch(url);
        return response.json();
    }
}