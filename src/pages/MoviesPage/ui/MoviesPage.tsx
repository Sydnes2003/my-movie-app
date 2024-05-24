import {FC, useState} from 'react';
import classes from './MoviesPage.module.scss';
import {Box, Group, SimpleGrid, Stack, Title} from "@mantine/core";
import {MovieCard} from "entities/MovieCard";
import {useDisclosure} from "@mantine/hooks";
import {RatingModal} from "widgets/RatingModal";
import {SvgClose} from "shared/ui/SvgClose";
import {Filter, Movie} from "shared/types/types.ts";
import {MovieFilter} from "widgets/MovieFilter";

/* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */
const genres = [
    'Drama',
    'Comedy',
    'Animation',
    'Thriller',
    'Fantasy',
];
const years = [
    '1980',
    '1981',
    '1982',
    '1983',
    '1984',
    '1985',
    '1986',
    '1987',
    '1988',
    '1989',
    '1990',
];
// const sort = [
//     'Most Popular',
//     'Least Popular',
//     'Most Rated',
//     'Least Rated',
//     'Most Voted',
//     'Least Voted',
// ];
const exampleMovie: Movie = {
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

const MoviesPage: FC = () => {
    const [isModalOpened, {open: openModal, close: closeModal}] = useDisclosure(false);
    const [filter, setFilter] = useState<Filter>({
        genres: [],
        year: '',
        rating: {
            from: 0,
            to: 10,
        },
    });

    // todo: Move 'gap' to CSS
    return (
        <Box className={classes.MoviesPage}>
            <RatingModal
                movie={exampleMovie}
                opened={isModalOpened}
                onClose={closeModal}
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
                        options={{genres: genres, years: years}}
                    />
                    {/* todo: "Ratings" filter */}
                    {/* todo: "Reset filters" button */}
                    <Group> {/* Сортировка */}

                    </Group>
                    <SimpleGrid
                        cols={{lg: 1, xl: 2, xxl: 3, rem150: 4, rem180: 5, rem210: 6, rem240: 7}}
                    >
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                        <MovieCard movie={exampleMovie} openRatingModal={openModal}/>
                    </SimpleGrid>
                    <Group> {/* Пагинация */}

                    </Group>
                </Stack>
            </Stack>
        </Box>
    );
};

export default MoviesPage;
