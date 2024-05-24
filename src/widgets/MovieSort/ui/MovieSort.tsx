import React, {FC} from 'react';
import classes from './MovieSort.module.scss';
import {Group, GroupProps} from "@mantine/core";
import {ComboSingleSelect} from "shared/ui/ComboSingleSelect";
import {SortMap, SortTitle} from "shared/types/types.ts";

const SORT_MAP: SortMap = [
    {type: 'popularity.desc', title: 'Most Popular'},
    {type: 'popularity.asc', title: 'Least Popular'},
    {type: 'vote_average.desc', title: 'Most Rated'},
    {type: 'vote_average.asc', title: 'Least Rated'},
    {type: 'vote_count.desc', title: 'Most Voted'},
    {type: 'vote_count.asc', title: 'Least Voted'},
];

interface MovieSortProps extends GroupProps {
    sort: SortTitle,
    setSort: React.Dispatch<React.SetStateAction<SortTitle>>,
}

const MovieSort: FC<MovieSortProps> = (
    {
        sort,
        setSort,
        ...props
    },
) => {
    const sortOptions = SORT_MAP.map((sort) => sort.title);

    return (
        <Group className={classes.MovieSort} {...props}>
            <ComboSingleSelect
                label="Sort by"
                placeholder="Choose the sort type"
                value={sort}
                valueSetter={(selected) => setSort(selected as SortTitle)}
                options={sortOptions}
            />
        </Group>
    );
};

export default MovieSort;
