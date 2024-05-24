import {useEffect, useState} from "react";
import {Movie, Rating} from "shared/types/types.ts";

interface UseMovies {
    initialState: Movie,
    onRatingSubmit: () => void,
}

export const useMovies = (
    {
        initialState,
        onRatingSubmit,
    }: UseMovies,
) => {
    const [movie, setMovie] = useState<Movie>(initialState);

    useEffect(() => {
        const storedRating = Number(localStorage.getItem(movie.id.toString())) as Rating;

        setMovie({...movie, userRating: storedRating ? storedRating : 0});
    }, []);

    const handleRatingSubmit = (movie: Movie, chosen: number) => {
        onRatingSubmit();

        if (chosen === 0) {
            setMovie({...movie, userRating: 0});
            localStorage.removeItem(movie.id.toString());
            return;
        }

        setMovie({...movie, userRating: chosen as Rating});
        localStorage.setItem(movie.id.toString(), chosen.toString());
    };

    return {movie, setMovie, handleRatingSubmit};
};
