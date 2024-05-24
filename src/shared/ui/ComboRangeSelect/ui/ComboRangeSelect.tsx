import {FC} from 'react';
import {ComboboxProps, Group, GroupProps} from "@mantine/core";
import {ComboSingleSelect} from "shared/ui/ComboSingleSelect";

type Item = string;
type Values<Item> = {
    from: Item,
    to: Item,
};
type Key = keyof Values<Item>;

interface ComboRangeSelectProps extends ComboboxProps {
    labels?: Values<Item>;
    placeholders?: Values<Item>;
    values: Values<Item>;
    valueSetters: Values<(selected: Item) => void>;
    options: Values<Item[]>;
    groupProps?: {
        align?: GroupProps["align"];
        grow?: GroupProps["grow"];
    };
    rightSection?: 'chevron' | 'arrows';
}

const ComboRangeSelect: FC<ComboRangeSelectProps> = (
    {
        labels= {from: '', to: ''},
        placeholders= {from: '', to: ''},
        values,
        valueSetters,
        options,
        groupProps = {},
        rightSection = 'chevron',
    },
) => {
    return (
        <Group gap={8} {...groupProps}>
            {(Object.keys(values) as Key[]).map((key) =>
                <ComboSingleSelect
                    label={labels[key]}
                    placeholder={placeholders[key]}
                    value={values[key]}
                    valueSetter={valueSetters[key]}
                    options={options[key]}
                    rightSection={rightSection}
                />,
            )}
        </Group>
    );
};

export default ComboRangeSelect;
