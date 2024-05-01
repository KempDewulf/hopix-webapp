"use strict";

const BASE_URL = 'https://hopix.test/api/beers';

export default class BeerCardService {
    async all(page, perPage, sortBy, search = null) {
        let url = `${BASE_URL}?lang=BE_NL&page=${page}&per_page=${perPage}&sort_by=${sortBy}`;
        if (search) {
            url += `&search=${search}`;
        }
        const response = await fetch(url);
        return response.json();
    }

    async login() {
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

    async profile() {
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
