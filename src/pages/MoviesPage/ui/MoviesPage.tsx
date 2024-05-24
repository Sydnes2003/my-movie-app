import {FC, useEffect, useState} from 'react';
import classes from './MoviesPage.module.scss';
import {Box, Group, SimpleGrid, Stack, Title} from "@mantine/core";
import {MovieCard} from "entities/MovieCard";
import {useDisclosure} from "@mantine/hooks";
import {RatingModal} from "widgets/RatingModal";
import {SvgClose} from "shared/ui/SvgClose";
import {FETCHING_LANGUAGE, Filter, Genre, SortTitle, Year} from "shared/types/types.ts";
import {MovieFilter} from "widgets/MovieFilter";
import {MovieSort} from "widgets/MovieSort";
import {useMovies} from "shared/lib/hooks/useMovies/useMovie.ts";
import {useFetching} from "shared/lib/hooks/useFetching/useFetching.ts";
import MoviesService from "shared/api/MoviesService.ts";

const MoviesPage: FC = () => {
    /* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */
    const EXAMPLE_MOVIE = {
        id: 228228,
        poster: 'src/shared/assets/images/example-image.png',
        title: 'The Green Mile',
        year: 1999,
        rating: {
            avg: 9.3,
            count: 2900000,
        },
        genres: [
            'Drama',
            'Crime',
            'Fantasy',
            'Thriller',
        ],
    };
    /* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */
    // MODAL
    const [isModalOpened, {open: openModal, close: closeModal}] = useDisclosure(false);

    // GENRES
    const [genres, setGenres] = useState<Genre[]>([]);
    const [fetchGenres, areGenresLoading, errorOnFetchingGenres] = useFetching(async () => {
        const response = await MoviesService.getGenres({language: FETCHING_LANGUAGE});
        setGenres(response.data.genres);
    });
    useEffect(() => {
        (fetchGenres as () => Promise<void>)();
    }, []);

    // YEARS
    const [years, setYears] = useState<Year[]>([]);

    // MOVIES todo: Change Movie to Movies, CHECK GENRES TYPE, CHECK YEAR TYPE, CHECK RATING TYPE
    const {movie, setMovie, handleRatingSubmit} = useMovies(
        {
            initialState: EXAMPLE_MOVIE,
            onRatingSubmit: closeModal,
        },
    );

    // PAGINATION



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


    return (
        <Box className={classes.MoviesPage}>
            <RatingModal
                movie={movie}
                onRatingSubmit={handleRatingSubmit}
                onClose={closeModal}
                opened={isModalOpened}
                title="Your rating"
                closeButtonProps={{icon: <SvgClose fill={['grey', 5]}/>}}
                centered
            />

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
                        cols={{lg: 1, xl: 2, xxl: 3, rem150: 4, rem180: 5, rem210: 6, rem240: 7}}
                    >
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                        <MovieCard movie={movie} openRatingModal={openModal}/>
                    </SimpleGrid>
                    <Group> {/* Пагинация */}

                    </Group>
                </Stack>
            </Stack>
        </Box>
    );
};

export default MoviesPage;
