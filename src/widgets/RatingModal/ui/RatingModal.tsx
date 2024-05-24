import {FC, useState} from 'react';
import classes from './RatingModal.module.scss';
import {Button, Group, Modal, ModalProps, Rating, Stack, Title} from "@mantine/core";
import {Movie, POSSIBLE_USER_RATINGS} from "shared/types/types.ts";
import {SvgStar} from "shared/ui/SvgStar";

interface RatingModalProps extends ModalProps {
    movie: Movie,
}

const RatingModal: FC<RatingModalProps> = ({movie, ...restProps}) => {
    const [rating, setRating] = useState(
        movie.userRating ? movie.userRating : 0,
    );

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
                <Title classNames={{root: classes.movieTitle}}> {movie.title} </Title>
                <Rating
                    classNames={{root: classes.stars}}
                    count={POSSIBLE_USER_RATINGS.length}
                    value={rating}
                    onChange={setRating}
                    emptySymbol={<SvgStar fill={['grey', 3]}/>}
                    fullSymbol={<SvgStar fill={['yellow', 0]}/>}
                />
                <Group gap={16}>
                    <Button
                        classNames={{root: classes.buttonSave}}
                        onClick={() => {}}
                    >
                        Save
                    </Button>
                    <Button
                        classNames={{root: classes.buttonRemove}}
                        onClick={() => setRating(0)}
                    >
                        Remove rating
                    </Button>
                </Group>
            </Stack>
        </Modal>
    );
};

export default RatingModal;
