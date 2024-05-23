import {FC} from 'react';
import classes from './MoviesPage.module.scss';
import {Sidebar} from "shared/ui/Sidebar";
import {Group, SimpleGrid, Stack, Title} from "@mantine/core";
import {CustomSelect} from "shared/ui/CustomSelect";
import Card from "shared/ui/Card/ui/Card.tsx";

const MoviesPage: FC = () => {
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


    // todo: Move 'gap' to CSS
    return (
        <div className={classes.MoviesPage}>
            <Sidebar visibleFrom='md'/>
            <Stack className={classes.pageContent} gap='40px'>
                <Title order={1} className={classes.pageTitle}>Movies</Title>
                <Stack gap='24px'>
                    <Group gap='16px' grow preventGrowOverflow={true}>
                        <CustomSelect
                            label='Genres'
                            placeholder='Select genre'
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
                    <SimpleGrid cols={{ lg: 1, xl: 2, xxl: 3 }}>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                        <Card/>
                    </SimpleGrid>
                    <Group> {/* Пагинация */}

                    </Group>
                </Stack>
            </Stack>
        </div>
    );
};

export default MoviesPage;
