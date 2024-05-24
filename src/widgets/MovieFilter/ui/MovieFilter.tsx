import {FC} from 'react';
import {Button, Group, GroupProps} from "@mantine/core";
import {Filter, FilterOptions, FilterSetter} from "shared/types/types.ts";
import {ComboMultiSelect} from "shared/ui/ComboMultiSelect";
import {ComboRangeSelect} from "shared/ui/ComboRangeSelect";
import {ComboSingleSelect} from "shared/ui/ComboSingleSelect";
import classes from "./MovieFilter.module.scss";

interface MovieFilterProps extends GroupProps {
    filter: Filter,
    setFilter: FilterSetter,
    options: FilterOptions,
    emptyFilter: Filter,
}

const RATING_RANGE_OPTIONS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const MovieFilter: FC<MovieFilterProps> = (
    {
        filter,
        setFilter,
        options,
        emptyFilter,
        ...props
    },
) => {
    const isFilterEmpty = (
        (filter.genres.length === 0 ||
            (filter.genres.length === 1 && filter.genres[0] === '')) &&
        filter.year === emptyFilter.year &&
        filter.rating.from === emptyFilter.rating.from &&
        filter.rating.to === emptyFilter.rating.to
    );

    return (
        <Group {...props}>
            <ComboMultiSelect
                label="Genres"
                placeholder="Select genre"
                value={filter.genres}
                valueSetter={(selected) => setFilter({...filter, genres: selected})}
                options={options.genres}
            />
            <ComboSingleSelect
                label="Release year"
                placeholder="Select release year"
                value={filter.year}
                valueSetter={(selected) => setFilter({...filter, year: selected})}
                options={options.years}
            />
            <ComboRangeSelect
                labels={{from: "Ratings", to: ""}}
                placeholders={{from: "From", to: "To"}}
                values={{from: filter.rating.from, to: filter.rating.to}}
                valueSetters={{
                    from: (selected) => setFilter({...filter, rating: {...filter.rating, from: selected}}),
                    to: (selected) => setFilter({...filter, rating: {...filter.rating, to: selected}}),
                }}
                options={{from: RATING_RANGE_OPTIONS, to: RATING_RANGE_OPTIONS}}
                groupProps={{
                    align: 'flex-end',
                    grow: true,
                }}
                rightSection="arrows"
            />
            <Button
                classNames={{root: classes.resetButton}}
                onClick={() => setFilter(emptyFilter)}
                disabled={isFilterEmpty}
            >
                Reset filters
            </Button>
        </Group>
    );
};

export default MovieFilter;
