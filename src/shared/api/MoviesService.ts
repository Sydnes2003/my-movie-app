import axios, {AxiosRequestConfig} from 'axios';
import {Movie} from "shared/types/types.ts";

const API_BASE_URL = 'http://localhost:5000/api';

export default class MoviesService {
    static async searchMovies(params: AxiosRequestConfig['params']) {
        const response = await axios.get(`${API_BASE_URL}/movies/search`, { params });
        return response.data;
    }

    static async getMovieDetails(params: AxiosRequestConfig['params'], id: Movie['id']) {
        const response = await axios.get(`${API_BASE_URL}/movies/${id}`, { params });
        return response.data;
    }

    static async getGenres(params: AxiosRequestConfig['params']) {
        const response = await axios.get(`${API_BASE_URL}/genres`, { params });
        return response.data;
    }
}
