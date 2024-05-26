import express from 'express';
import axios from 'axios';
import cors from 'cors';
import * as dotenv from 'dotenv';
import {Params} from "../src/shared/types/types";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;
const API_KEY = process.env.TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

app.use(cors());

app.use(express.json());

const isParams = (object: unknown): object is Params => {
    if (typeof object !== 'object' || object === null) {
        return false;
    }

    const params = object as Params;

    if (params.with_genres !== undefined && typeof params.with_genres !== 'string') {
        return false;
    }
    if (params.primary_release_year !== undefined && typeof params.primary_release_year !== 'string' && typeof params.primary_release_year !== 'number') {
        return false;
    }
    if (params.vote_average_gte !== undefined && typeof params.vote_average_gte !== 'string' && typeof params.vote_average_gte !== 'number') {
        return false;
    }

    return !(params.vote_average_lte !== undefined && typeof params.vote_average_lte !== 'string' && typeof params.vote_average_lte !== 'number');
};

app.get('/api/movies/search', async (req, res) => {
    try {
        console.log("Received Params: ", req.query.params);
        if (!isParams(req.query.params)) {
            return res.status(400).json({ error: "Invalid query parameters" });
        }

        const handleProperties = (object: Params, API_KEY: string | undefined) => {
            const params = {
                ['api_key']: API_KEY,
                ['vote_average.gte']: object.vote_average_gte,
                ['vote_average.lte']: object.vote_average_lte,
                ...object,
            };

            delete params.vote_average_gte;
            delete params.vote_average_lte;

            return params;
        };
        const apiParams = handleProperties(req.query.params, API_KEY);

        const response = await axios.get(`${BASE_URL}/discover/movie`, {
            params: apiParams,
        });

        res.json(response.data);
    } catch (e) {
        const error = e as Error;
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/movies/:id', async (req, res) => {
    try {
        const { id } = req.params;

        const response = await axios.get(`${BASE_URL}/movie/${id}`, {
            params: {
                api_key: API_KEY,
                append_to_response: 'videos',
            },
        });

        res.json(response.data);
    } catch (e) {
        const error = e as Error;
        res.status(500).json({ error: error.message });
    }
});

app.get('/api/genres', async (req, res) => {
    try {
        const response = await axios.get(`${BASE_URL}/genre/movie/list`, {
            params: {
                api_key: API_KEY,
            },
        });

        res.json(response.data);
        console.log(response.data);
    } catch (e) {
        const error = e as Error;
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
