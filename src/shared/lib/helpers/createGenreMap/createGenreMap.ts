import {Genre, GenreMap} from "shared/types/types.ts";

export const createGenreMap = (genres: Genre[]): Record<number, string> => {
    const genreMap: GenreMap = {};
    genres.forEach((genre) => {
        genreMap[genre.id] = genre.name;
    });
    return genreMap;
};
