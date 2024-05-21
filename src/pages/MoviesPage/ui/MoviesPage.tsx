import {FC} from 'react';
import classes from './MoviesPage.module.scss';
import {Sidebar} from "shared/ui/Sidebar";
import {Group, Stack, Title} from "@mantine/core";
import {CustomSelect} from "shared/ui/CustomSelect";

const MoviesPage: FC = () => {
    // todo: Move 'gap' to CSS
    return (
        <div className={classes.MoviesPage}>
            <Sidebar />
            <Stack className={classes.pageContent} gap='40px'>
                <Title order={1} className={classes.pageTitle}>Movies</Title>
                <Stack gap='24px'>
                    <Group gap='16px'> {/* Фильтры */}
                        <Stack>
                            {/* todo: Develop custom multiselect design */}
                            {/*<MultiSelect*/}
                            {/*    size="md"*/}
                            {/*    radius="md"*/}
                            {/*    label="Genres"*/}
                            {/*    placeholder="Select genre"*/}
                            {/*    data={['Comedy', 'Drama', 'Peplum', 'Horror']}*/}
                            {/*    searchable*/}
                            {/*/>*/}
                            <CustomSelect />
                        </Stack>
                        <Stack>
                            {/* todo: "Release year" filter */}
                        </Stack>
                        <Stack>
                            {/* todo: "Ratings" filter */}
                        </Stack>
                        {/* todo: "Reset filters" button */}
                    </Group>
                    <Group> {/* Сортировка */}

                    </Group>
                    <Group> {/* Карточки */}

                    </Group>
                    <Group> {/* Пагинация */}

                    </Group>
                </Stack>
            </Stack>
        </div>
    );
};

export default MoviesPage;
