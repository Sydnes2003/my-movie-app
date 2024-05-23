import {FC} from 'react';
import classes from './MoviesPage.module.scss';
import {Sidebar} from "widgets/Sidebar";
import {Box, Group, SimpleGrid, Stack, Title} from "@mantine/core";
import {ComboSelect} from "shared/ui/ComboSelect";
import {MovieCard} from "entities/MovieCard";
import {useDisclosure} from "@mantine/hooks";
import {RatingModal} from "widgets/RatingModal";
import {SvgClose} from "shared/ui/SvgClose";
import {Movie} from "shared/types/types.ts";

/* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */
const genres = [
    'Drama',
    'Comedy',
    'Animation',
    'Thriller',
    'Fantasy',
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

    // todo: Move 'gap' to CSS
    return (
        <Box className={classes.MoviesPage}>
            <RatingModal
                movie={exampleMovie}
                opened={isModalOpened}
                onClose={closeModal}
                title='Your rating'
                closeButtonProps={{icon: <SvgClose fill={['grey', 5]}/>}}
                centered
            />

            <Sidebar visibleFrom="md"/>
            <Stack className={classes.pageContent} gap="40px">
                <Title order={1} className={classes.pageTitle}>Movies</Title>
                <Stack gap="24px">
                    <Group gap="16px" grow preventGrowOverflow={true}>
                        <ComboSelect
                            label="Genres"
                            placeholder="Select genre"
                            data={genres}
                        />
                        <div>
                            {/* todo: "Release year" filter */}
                        </div>
                        <div>
                            {/* todo: "Ratings" filter */}
                        </div>
                        {/* todo: "Reset filters" button */}
                    </Group>
                    <Group> {/* Сортировка */}

                    </Group>
                    <SimpleGrid cols={{lg: 1, xl: 2, xxl: 3}}>
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
