import {FC, useState} from 'react';
import classes from './RatingModal.module.scss';
import {Button, Group, Modal, ModalProps, Rating as MantineRating, Stack, Title} from "@mantine/core";
import {Movie, POSSIBLE_USER_RATINGS, Rating} from "shared/types/types.ts";
import {SvgStar} from "shared/ui/SvgStar";

interface RatingModalProps extends ModalProps {
    movie: Movie,
    onRatingSubmit: (movie: Movie, submitted: Rating) => void,
}

const RatingModal: FC<RatingModalProps> = (
    {
        movie,
        onRatingSubmit,
        ...restProps
    },
) => {
    const [chosenRating, setChosenRating] = useState<Rating>(
        movie.userRating ? movie.userRating : 0,
    );

    const handleChange = (selected: number) => {
        setChosenRating(selected as Rating);
    };
    const handleRemove = () => {
        setChosenRating(0);
    };
    const handleSubmit = () => {
        onRatingSubmit(movie, chosenRating);
    };

    return (
        <Modal
            classNames={{
                overlay: classes.modalOverlay,
                content: classes.modalWindow,
                header: classes.modalHeader,
                body: classes.modalBody,
            }}
            {...restProps}
        >
            <Stack gap={16}>
                <Title classNames={{root: classes.movieTitle}}> {movie.original_title} </Title>
                <MantineRating
                    classNames={{root: classes.stars}}
                    count={POSSIBLE_USER_RATINGS.length - 1}
                    value={chosenRating}
                    onChange={handleChange}
                    emptySymbol={<SvgStar fill={['grey', 3]}/>}
                    fullSymbol={<SvgStar fill={['yellow', 0]}/>}
                />
                <Group gap={16}>
                    <Button
                        classNames={{root: classes.buttonSave}}
                        onClick={handleSubmit}
                    >
                        Save
                    </Button>
                    <Button
                        classNames={{root: classes.buttonRemove}}
                        onClick={handleRemove}
                    >
                        Remove rating
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
};

export default RatingModal;
