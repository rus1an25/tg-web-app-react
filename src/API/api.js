import axios from "axios";

const API_KEY = '0471cac914f115a568e4ebde8feb5fd4';
let lang = 'en-EN';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3'
});

export const requestToAPI = {
    getGenres () {
        return instance.get(`/genre/movie/list?api_key=${API_KEY}&language=${lang}`)
            .then(response => response.data)
    },

    getMovies (URL) {
        console.log('getMovies', URL)
        return instance.get(URL)
            .then(response => response.data)
    }
};