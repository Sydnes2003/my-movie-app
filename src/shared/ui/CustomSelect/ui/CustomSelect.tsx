import {FC} from 'react';
import classes from './CustomSelect.module.scss';
import {MultiSelect, MultiSelectProps} from "@mantine/core";

const CustomSelect: FC<MultiSelectProps> = () => {
    return (
        <MultiSelect
            classNames={{ pill: classes.pill}}
            rightSection={<div>123</div>}
            label="Genres"
            placeholder="Select genre"
            defaultValue={['Drama', 'Comedy']}
            data={['Drama', 'Comedy', 'Animation', 'Thriller', 'Fantasy']}
        />
    );
};

export default CustomSelect;
