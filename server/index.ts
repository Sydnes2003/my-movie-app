import express from 'express';
import axios from 'axios';
import cors from 'cors';
import * as dotenv from 'dotenv';

dotenv.config();

const API_KEY: string = process.env.TMDB_API_KEY;
const BASE_URL: string = 'https://api.themoviedb.org/3';

// todo: Create Proxy Server
