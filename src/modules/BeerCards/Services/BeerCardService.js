"use strict";

const BASE_URL = 'https://hopix.test/api/beers';

export default class BeerCardService {
    async all(page, perPage, sortBy, search = null) {
        let url = `${BASE_URL}?page=${page}&per_page=${perPage}&sort_by=${sortBy}`;
        if (search) {
            url += `&search=${search}`;
        }
        const response = await fetch(url);
        return response.json();
    }
}
