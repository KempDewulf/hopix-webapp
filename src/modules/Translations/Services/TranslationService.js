"use strict";

const BASE_URL = 'https://hopix.test/api/translations';

export default class TranslationService {

    static setCurrentLanguage(language) {
        localStorage.setItem("language",language)
    }

    static getCurrentLanguage() {
        return localStorage.getItem("language")
    }

    static async getTranslations() {
        let url = `${BASE_URL}`;
        const response = await fetch(url);
        return response.json();
    }
}