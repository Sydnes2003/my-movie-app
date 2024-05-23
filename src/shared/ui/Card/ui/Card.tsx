import {FC, useState} from 'react';
import {Group, Image, Stack, Title, Text} from "@mantine/core";
import classes from "./Card.module.scss";
import {Star} from "shared/ui/Star";
import {numFormatter} from "shared/lib/helpers/numFormatter/numFormatter.ts";

const Card: FC = () => {
    // todo: Implement localStorage memory of this state, event handler & modal on click
    const {rating, setRating} = useState(0);

    const movie = {
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

    const GENRES_LIMIT = 3;
    const FALLBACK_IMAGE = 'src/shared/assets/images/fallback-image.png';

    return (
        <Group classNames={{root: classes.movieCard}} gap={8}>
            <Group classNames={{root: classes.contentWrapper}} gap={16}>
                <Image
                    classNames={{root: classes.moviePoster}}
                    src={movie.poster}
                    fallbackSrc={FALLBACK_IMAGE}
                    data-clickable
                />
                <Stack classNames={{root: classes.movieDetails}}>
                    <Stack gap={8}>
                        <Title classNames={{root: classes.movieTitle}} data-clickable> {movie.title} </Title>
                        <Text classNames={{root: classes.movieYear}}> {movie.year} </Text>
                        <Group classNames={{root: classes.ratingWrapper}} gap={8}>
                            <Group classNames={{root: classes.ratingAvg}} gap={4}>
                                <Star fill={['yellow', 0]}/>
                                <Text classNames={{root: classes.ratingLabel}}> {movie.rating.avg} </Text>
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
            <Group classNames={{root: classes.rating}} gap={4} data-clickable>
                <Star fill={rating ? [] : ['grey', 3]}/>
                {/* todo: Optional text containing user's rating on this movie */}
            </Group>
        </Group>
    );
};

export default Card;
