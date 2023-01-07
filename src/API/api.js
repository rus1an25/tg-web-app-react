import axios from "axios";

const API_KEY = '0471cac914f115a568e4ebde8feb5fd4';
const GET_GENRES = '/genre/movie/list';
let lang = 'en-EN';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
        "Authorization": "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDcxY2FjOTE0ZjExNWE1NjhlNGViZGU4ZmViNWZkNCIsInN1YiI6IjYzYjQ2ZDc3ODc1ZDFhMDA4MjAzNWRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ce9Q79StaGqXsgY5ZOS_jM_ON-s1-3yy2eiktd5IPAk"
    },
    data: {
        "authKey": API_KEY,
        "username": "rus1an251",
        "passkey": "rus1984lan"
    }
});

export const requestToAPI = {
    getGenres (data) {
        return instance.get(data)
            .then(response => response.data)
    },

    getMovies (request) {
        return instance.get(request)
            .then(response => response.data)
    }
};