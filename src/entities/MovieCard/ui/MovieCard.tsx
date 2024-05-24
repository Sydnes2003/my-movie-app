import {FC} from 'react';
import {Group, Image, Stack, Title, Text} from "@mantine/core";
import classes from "./MovieCard.module.scss";
import {SvgStar} from "shared/ui/SvgStar";
import {numFormatter} from "shared/lib/helpers/numFormatter/numFormatter.ts";
import {Movie} from "shared/types/types.ts";

/* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */
const FALLBACK_IMAGE = 'src/shared/assets/images/fallback-image.png';
/* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */ /* MOCK DATA */

interface MovieCardProps {
    openRatingModal: () => void,
    movie: Movie,
}

const MovieCard: FC<MovieCardProps> = (
    {
        openRatingModal = () => {},
        movie,
    },
) => {
    const GENRES_LIMIT = 3;
    const rating = movie.userRating;

    // todo: Implement localStorage memory of this state, event handler

    return (
        <Group classNames={{root: classes.movieCard}} gap={8}>
            <Group classNames={{root: classes.contentWrapper}} gap={16}>
                {/* todo: Change Image to conditional statement */}
                <Image
                    classNames={{root: classes.moviePoster}}
                    src={movie.poster}
                    fallbackSrc={FALLBACK_IMAGE}
                    data-clickable
                    onClick={() => {
                    }}
                />
                <Stack classNames={{root: classes.movieDetails}}>
                    <Stack gap={8}>
                        <Title
                            classNames={{root: classes.movieTitle}}
                            data-clickable
                            onClick={() => {
                            }}
                        > {movie.title} </Title>
                        <Text classNames={{root: classes.movieYear}}> {movie.year} </Text>
                        <Group classNames={{root: classes.ratingWrapper}} gap={8}>
                            <Group classNames={{root: classes.ratingAvg}} gap={4}>
                                <SvgStar fill={['yellow', 0]}/>
                                <Text classNames={{root: classes.ratingAvgLabel}}> {movie.rating.avg} </Text>
                            </Group>
                            <Text classNames={{root: classes.ratingCount}}>
                                {`(${numFormatter(movie.rating.count, 1)})`}
                            </Text>
                        </Group>
                    </Stack>
                    <Group classNames={{root: classes.genres}} gap={8}>
                        <Text classNames={{root: classes.genresLabel}}> Genres </Text>
                        <Text classNames={{root: classes.genresList}}>
                            {movie.genres.slice(0, GENRES_LIMIT).join(', ')}
                        </Text>
                    </Group>
                </Stack>
            </Group>
            <Group
                classNames={{root: classes.rating}} gap={4}
                data-clickable
                onClick={openRatingModal}
            >
                <SvgStar fill={rating ? [] : ['grey', 3]}/>
                {rating
                    ? <Text classNames={{root: classes.ratingUserLabel}}> {rating} </Text>
                    : <></>
                }
            </Group>
        </Group>
    );
};

export default MovieCard;
