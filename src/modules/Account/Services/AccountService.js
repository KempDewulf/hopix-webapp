"use strict";


const BASE_URL = 'https://hopix.test/api/';

export default class AuthenticationService {
    static async profile() {
        let url = `${BASE_URL}profile`;

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