"use strict";

const BASE_URL = 'https://hopix.test/api/';

export default class BackOfficeService {
    static async allBeers(page, perPage) {
        const language = localStorage.getItem("language");
        let params = {
            lang: language,
            page: page,
            per_page: 6,
            sort_order: "id"
        };

        const url = `${BASE_URL}beers?${new URLSearchParams(params).toString()}`;

        const response = await fetch(url);
        return response.json();
    }
    static async allBreweries() {
        const language = localStorage.getItem("language");
        let params = {
            lang: language,
        };

        const url = `${BASE_URL}breweries?${new URLSearchParams(params).toString()}`;

        const response = await fetch(url);
        return response.json();
    }

    static async allAromas() {
        const language = localStorage.getItem("language");
        let params = {
            lang: language,
        };

        const url = `${BASE_URL}aromas?${new URLSearchParams(params).toString()}`;

        const response = await fetch(url);
        return response.json();
    }

    static async addBeer(newBeer) {
        const url = `${BASE_URL}beers`;
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'credentials': 'include'
            },
            body: JSON.stringify(newBeer),
            credentials: 'include'
        });
        return response.json();
    }

    static async updateBeer(updatedBeer) {
        const url = `${BASE_URL}beers/${updatedBeer.id}`;
        const response = await fetch(url, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
                'credentials': 'include'
            },
            body: JSON.stringify(updatedBeer),
            credentials: 'include'
        });
        return response.json();
    }

    static async deleteBeer(beerId) {
        const url = `${BASE_URL}beers/${beerId}`;
        const response = await fetch(url, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                'credentials': 'include'
            },
            credentials: 'include'
        });
        return response.json();
    }

    static async getBeerWithAllLanguages(beerId) {
        const url = `${BASE_URL}beers/${beerId}?withlanguages`;
        const response = await fetch(url);
        return response.json();
    }

    static async fetchPage(url) {
        const response = await fetch(url);
        return response.json();
    }
}