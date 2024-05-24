import {FC, useEffect} from 'react';
import {Group} from "@mantine/core";
import ComboSingleSelect from "../../../shared/ui/ComboSingleSelect/ui/ComboSingleSelect.tsx";
import {Filter, FilterOptions, FilterSetter} from "shared/types/types.ts";
import {ComboMultiSelect} from "shared/ui/ComboMultiSelect";

interface MovieFilterProps {
    filter: Filter,
    setFilter: FilterSetter,
    options: FilterOptions,
}

const MovieFilter: FC<MovieFilterProps> = ({filter, setFilter, options}) => {
    useEffect(() => {
        console.log(filter.year);
        console.log(filter.genres);
    }, [filter.year, filter.genres]);

    return (
        <Group gap="16px" grow preventGrowOverflow={true}>
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
            <div>
                {/* todo: "Ratings" filter */}
            </div>
            {/* todo: "Reset filters" button */}
        </Group>
    );
};

export default MovieFilter;
