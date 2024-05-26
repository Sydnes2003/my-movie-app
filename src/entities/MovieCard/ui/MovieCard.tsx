import {FC} from 'react';
import {Group, Image, Stack, Title, Text} from "@mantine/core";
import classes from "./MovieCard.module.scss";
import {SvgStar} from "shared/ui/SvgStar";
import {numFormatter} from "shared/lib/helpers/numFormatter/numFormatter.ts";
import {GenreMap, Movie} from "shared/types/types.ts";
import {useNavigate} from "react-router-dom";

interface MovieCardProps {
    openRatingModal: (movie: Movie) => void,
    genreMap: GenreMap;
    movie: Movie,
}

const GENRES_LIMIT = 3;
const FALLBACK_IMAGE = 'src/shared/assets/images/fallback-image.png';
const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p';
const POSTER_WIDTH = 'w154';

const MovieCard: FC<MovieCardProps> = (
    {
        openRatingModal,
        genreMap,
        movie,
    },
) => {
    const genreNames = movie.genre_ids.slice(0, GENRES_LIMIT).map(id => genreMap[id]).join(', ');
    const releaseYear = movie.release_date.slice(0, 4);
    const navigate = useNavigate();
    const navigateToMovie = () => {
        navigate(`/movie/${movie.id}`);
    };

    return (
        <Group classNames={{root: classes.movieCard}} gap={8}>
            {/*<RatingModal*/}
            {/*    movie={movie}*/}
            {/*    onRatingSubmit={handleRatingSubmit}*/}
            {/*    onClose={closeModal}*/}
            {/*    opened={isModalOpened}*/}
            {/*    title="Your rating"*/}
            {/*    closeButtonProps={{icon: <SvgClose fill={['grey', 5]}/>}}*/}
            {/*    centered*/}
            {/*/>*/}
            <Group classNames={{root: classes.contentWrapper}} gap={16}>
                <Image
                    classNames={{root: classes.moviePoster}}
                    src={`${IMAGE_BASE_URL}/${POSTER_WIDTH}/${movie.poster_path}`}
                    fallbackSrc={FALLBACK_IMAGE}
                    data-clickable
                    onClick={navigateToMovie}
                    w='119px'
                    h='170px'
                />
                <Stack classNames={{root: classes.movieDetails}}>
                    <Stack gap={8}>
                        <Title
                            classNames={{root: classes.movieTitle}}
                            data-clickable
                            onClick={navigateToMovie}
                        >
                            {movie.original_title}
                        </Title>
                        <Text classNames={{root: classes.movieYear}}>
                            {releaseYear}
                        </Text>
                        <Group classNames={{root: classes.ratingWrapper}} gap={8}>
                            <Group classNames={{root: classes.ratingAvg}} gap={4}>
                                <SvgStar fill={['yellow', 0]}/>
                                <Text classNames={{root: classes.ratingAvgLabel}}>
                                    {movie.vote_average.toFixed(1)}
                                </Text>
                            </Group>
                            <Text classNames={{root: classes.ratingCount}}>
                                {`(${numFormatter(movie.vote_count, 1)})`}
                            </Text>
                        </Group>
                    </Stack>
                    <Group classNames={{root: classes.genres}} gap={8}>
                        <Text classNames={{root: classes.genresLabel}}>
                            Genres
                        </Text>
                        <Text classNames={{root: classes.genresList}}>
                            {genreNames}
                        </Text>
                    </Group>
                </Stack>
            </Group>
            <Group
                classNames={{root: classes.rating}} gap={4}
                data-clickable
                onClick={() => openRatingModal(movie)}
            >
                <SvgStar fill={movie.userRating ? [] : ['grey', 3]}/>
                {movie.userRating
                    ? <Text classNames={{root: classes.ratingUserLabel}}>
                        {movie.userRating}
                    </Text>
                    : <></>
                }
            </Group>
        </Group>
    );
};

export default MovieCard;
