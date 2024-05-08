"use strict";

const BASE_URL = 'https://hopix.test/api/beers';

export default class BeerCardService {
    static async all(page, perPage, sortBy, filters, search = null) {
        const language = localStorage.getItem("language");
        let params = {
            lang: language,
            page: page,
            per_page: perPage,
            sort_by: sortBy
        };

        if (filters?.breweries?.length > 0) {
            params.brewery_ids = filters.breweries.join(',');
        }

        if (filters?.aromas?.length > 0) {
            params.aroma_ids = filters.aromas.join(',');
        }

        if (search) {
            params.search = search;
        }

        const url = `${BASE_URL}?${new URLSearchParams(params).toString()}`;

        const response = await fetch(url);
        return response.json();
    }

    static async fetchPage(url) {
        const response = await fetch(url);
        return response.json();
    }


    //TODO: move to account service
    static async login() {
        let url = `https://hopix.test/api/login`;
        let body = {
            email: 'admin@admin.com',
            password: 'admin'
        };
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'credentials': 'include'
            },
            body: JSON.stringify(body),
            credentials: 'include'
        });
        console.log(response);
        return response.json();
    }

    static async profile() {
        let url = `https://hopix.test/api/profile`;

        const response = await fetch(url, {
            headers: {
                'Content-Type': 'application/json',
                'credentials': 'include'
            },
            credentials: 'include'
        });
        return response.json();
    }
}
