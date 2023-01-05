import axios from "axios";

const API_KEY = '0471cac914f115a568e4ebde8feb5fd4';
let lang = 'en-EN';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    withCredentials: true,
    params: {
        api_key: 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwNDcxY2FjOTE0ZjExNWE1NjhlNGViZGU4ZmViNWZkNCIsInN1YiI6IjYzYjQ2ZDc3ODc1ZDFhMDA4MjAzNWRlNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ce9Q79StaGqXsgY5ZOS_jM_ON-s1-3yy2eiktd5IPAk'
    },
    headers: {
        'Access-Control-Allow-Origin': 'https://api.themoviedb.org/3',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Allow-Headers': '*',
        'Access-Control-Allow-Methods': 'POST, GET, PUT, DELETE, OPTIONS'
    }
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