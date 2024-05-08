"use strict";


const BASE_URL = 'https://hopix.test/api/';

export default class AuthenticationService {

    static async register(firstName, lastName, email, password) {
        let url = `${BASE_URL}register`;
        let body = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password
        };
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
        });
        return response.json();
    }

    static async login(email, password) {
        let url = `${BASE_URL}login`;
        let body = {
            email: email,
            password: password
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
        return response.json();
    }

    static async logout() {
        let url = `${BASE_URL}logout`;

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