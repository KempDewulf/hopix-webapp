"use strict";

const BASE_URL = 'https://hopix.test/api/aromas';

export default class AromaFilterService {
    async all() {
        let url = `${BASE_URL}`;
        const response = await fetch(url);
        return response.json();
    }
}