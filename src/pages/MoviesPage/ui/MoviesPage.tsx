import {FC, useEffect, useState} from 'react';
import classes from './MoviesPage.module.scss';
import {Box, Group, SimpleGrid, Stack, Title} from "@mantine/core";
import {MovieCard} from "entities/MovieCard";
import {useDisclosure} from "@mantine/hooks";
import {RatingModal} from "widgets/RatingModal";
import {FETCHING_LANGUAGE, Filter, Genre, Movie, Rating, SortTitle} from "shared/types/types.ts";
import {MovieFilter} from "widgets/MovieFilter";
import {MovieSort} from "widgets/MovieSort";
import {useFetching} from "shared/lib/hooks/useFetching/useFetching.ts";
import MoviesService from "shared/api/MoviesService.ts";
import {createQueryParams} from "shared/lib/helpers/createQueryParams/createQueryParams.ts";
import {createGenreMap} from "shared/lib/helpers/createGenreMap/createGenreMap.ts";
import {SvgClose} from "shared/ui/SvgClose";

const MoviesPage: FC = () => {
    // MODAL
    const [isModalOpened, {open: openModal, close: closeModal}] = useDisclosure(false);
    const [currentMovie, setCurrentMovie] = useState<Movie | null>(null);

    // FILTER & SORT
    const EMPTY_FILTER: Filter = {
        genres: [],
        year: '',
        rating: {
            from: '',
            to: '',
        },
    };
    const [filter, setFilter] = useState<Filter>(EMPTY_FILTER);
    const [sort, setSort] = useState<SortTitle>('Most Popular');

    // GENRES
    const [genres, setGenres] = useState<Genre[]>([]);
    const [fetchGenres, areGenresLoading, errorOnFetchingGenres] = useFetching(async () => {
        const response = await MoviesService.getGenres({language: FETCHING_LANGUAGE});
        setGenres(response.genres);
    });
    useEffect(() => {
        fetchGenres().then();
    }, []);
    const genreMap = createGenreMap(genres);

    // MOVIES
    const [movies, setMovies] = useState<Movie[]>([]);
    const [fetchMovies, areMoviesLoading, errorOnFetchingMovies] = useFetching(async () => {
        const params = createQueryParams(filter, sort, genres);
        console.log(params);
        const response = await MoviesService.searchMovies({ params });
        const moviesWithRatings = assignRatingsFromLocalStorage(response.results);
        console.log(moviesWithRatings);
        setMovies(moviesWithRatings);
    });
    useEffect(() => {
        fetchMovies().then();
    }, [filter, sort, genres]);

    // RATINGS
    const assignRatingsFromLocalStorage = (movies: Movie[]) => {
        return movies.map(movie => {
            const storedRating = Number(localStorage.getItem(movie.id.toString())) as Rating;
            if (storedRating) {
                return {...movie, userRating: storedRating};
            }
            return movie;
        });
    };
    const handleRatingSubmit = (targetMovie: Movie, submittedRating: Rating) => {
        const targetMovieId = targetMovie.id;
        const ratedMovieIndex = movies.findIndex((movie) => movie.id === targetMovieId);

        if (ratedMovieIndex !== -1) {
            const updatedMovies = [...movies];
            if (submittedRating === 0) {
                updatedMovies[ratedMovieIndex].userRating = undefined;
                localStorage.removeItem(targetMovieId.toString());
            } else {
                updatedMovies[ratedMovieIndex].userRating = submittedRating;
                localStorage.setItem(targetMovieId.toString(), submittedRating.toString());
            }
            setMovies(updatedMovies);
        }
    };

    // YEARS
    const getYears = (): number[] => {
        const currentYear = new Date().getFullYear();
        const startYear = 1900;
        const years = [];
        for (let year = startYear; year <= currentYear; year++) {
            years.push(year);
        }
        return years;
    };
    const years = getYears();

    // PAGINATION


    return (
        <Box className={classes.MoviesPage}>
            <Stack className={classes.pageContent} gap="40px">
                <Title order={1} className={classes.pageTitle}>Movies</Title>
                <Stack gap="24px">
                    <MovieFilter
                        filter={filter}
                        setFilter={setFilter}
                        options={{
                            genres: genres.map((genre) => genre.name),
                            years: years.map((year) => year.toString()),
                        }}
                        emptyFilter={EMPTY_FILTER}
                        gap="16px"
                        grow
                        preventGrowOverflow={true}
                    />
                    <MovieSort
                        sort={sort}
                        setSort={setSort}
                        gap="16px"
                        grow
                        preventGrowOverflow={true}
                    />
                    <SimpleGrid
                        cols={{lg: 1, xl: 2, xxl: 2, rem150: 3, rem180: 3, rem210: 4, rem240: 4}}
                    >
                        {movies.map((movie) => (
                            <MovieCard
                                key={movie.id}
                                movie={movie}
                                genreMap={genreMap}
                                openRatingModal={(movie) => {
                                    setCurrentMovie(movie);
                                    openModal();
                                }}
                            />
                        ))}
                    </SimpleGrid>
                    <Group> {/* Пагинация */}

                    </Group>
                </Stack>
            </Stack>
            {currentMovie && (
                <RatingModal
                    movie={currentMovie}
                    onRatingSubmit={(movie: Movie, rating: Rating) => handleRatingSubmit(movie, rating)}
                    opened={isModalOpened}
                    onClose={closeModal}
                    title="Your rating"
                    closeButtonProps={{icon: <SvgClose fill={['grey', 5]}/>}}
                    centered
                />
            )}
        </Box>
    );
};

export default MoviesPage;
