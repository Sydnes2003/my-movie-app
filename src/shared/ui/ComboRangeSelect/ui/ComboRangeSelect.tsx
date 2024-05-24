import {FC, useState} from 'react';
import classes from './ComboRangeSelect.module.scss';
import {Combobox, ComboboxProps, Group, Input, Pill, PillsInput, ScrollArea, useCombobox} from "@mantine/core";
import {SvgChevron} from "shared/ui/SvgChevron";

type DataItem = string;

interface ComboRangeSelectProps extends ComboboxProps {
    label?: string;
    placeholder?: string;
    onChange?: () => void;
    data: Array<DataItem>;
}

const emptyValue = '';

const ComboRangeSelect: FC<ComboRangeSelectProps> = (
    {
        label = '',
        placeholder = '',
        onChange = () => {},
        data,
    },
) => {
    const [value, setValue] = (
        useState<DataItem>(emptyValue)
    );

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const handleValueSelect = (selected: DataItem) => {
        setValue((current) => current === selected ? emptyValue : selected);
    };
    const handleValueRemove = () => {
        setValue(emptyValue);
    };

    const contents = (
        value
            ? <Pill classNames={{root: classes.pillRoot, label: classes.pillLabel}}>
                {value}
            </Pill>
            : value
    );

    const options = data.map((item) => (
        <Combobox.Option
            value={item}
            key={item}
            active={value === item}
        >
            <Group gap="sm">
                {item}
            </Group>
        </Combobox.Option>
    ));

    const inputRightSection = (
        <SvgChevron
            fill={combobox.dropdownOpened ? [] : ['grey', 5]}
            variant={combobox.dropdownOpened ? 'up' : 'down'}
            size="22"
            thickness="1"
        />
    );

    const inputContents = (
        contents
            ? contents
            : <Input.Placeholder>
                {placeholder}
            </Input.Placeholder>
    );

    return (
        <Combobox
            store={combobox}
            classNames={{
                dropdown: classes.comboboxDropdown,
                option: classes.comboboxOption,
            }}
            onOptionSubmit={handleValueSelect}
            withinPortal={false}
        >
            <Combobox.DropdownTarget>
                <PillsInput
                    classNames={{
                        label: classes.inputLabel,
                        wrapper: classes.inputWrapper,
                        input: classes.inputInput,
                    }}
                    size="md"
                    label={label}
                    pointer
                    onClick={() => combobox.toggleDropdown()}
                    rightSection={inputRightSection}
                >
                    <Pill.Group classNames={{group: classes.pillGroup}}>
                        {inputContents}

                        <Combobox.EventsTarget>
                            <PillsInput.Field
                                type="hidden"
                                onBlur={() => combobox.closeDropdown()}
                                onKeyDown={(event) => {
                                    if (event.key === 'Backspace') {
                                        event.preventDefault();
                                        handleValueRemove();
                                    }
                                }}
                                onChange={onChange}
                            />
                        </Combobox.EventsTarget>
                    </Pill.Group>
                </PillsInput>
            </Combobox.DropdownTarget>

            <Combobox.Dropdown>
                <Combobox.Options>
                    <ScrollArea.Autosize
                        classNames={{
                            thumb: classes.dropdownScrollThumb,
                        }}
                        type="hover"
                        mah={200}
                    >
                        {options}
                    </ScrollArea.Autosize>
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default ComboRangeSelect;
