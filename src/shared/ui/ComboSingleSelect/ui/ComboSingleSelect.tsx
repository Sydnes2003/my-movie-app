import {FC} from 'react';
import classes from './ComboSingleSelect.module.scss';
import {Combobox, ComboboxProps, Group, Input, Pill, PillsInput, ScrollArea, useCombobox} from "@mantine/core";
import {SvgChevron} from "shared/ui/SvgChevron";
import {SvgArrows} from "shared/ui/SvgArrows";

type Value = string;

interface ComboSingleSelectProps<T> extends ComboboxProps {
    label?: string;
    placeholder?: string;
    value: T;
    valueSetter: (selected: T) => void;
    options: Array<T>;
    rightSection?: 'chevron' | 'arrows';
}

const ComboSingleSelect: FC<ComboSingleSelectProps<Value>> = (
    {
        label = '',
        placeholder = '',
        value,
        valueSetter,
        options,
        rightSection = 'chevron',
    },
) => {
    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const handleValueSelect = (selected: Value) => {
        const selectedValue = value === selected ? '' : selected;
        valueSetter(selectedValue);
    };
    const handleValueRemove = () => {
        const emptyValue = '';
        valueSetter(emptyValue);
    };

    const contentComponents = value
        ? <Pill classNames={{root: classes.pillRoot, label: classes.pillLabel}}>
            {value}
        </Pill>
        : value;

    const optionComponents = options.map((item) => (
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
        rightSection === 'chevron'
            ? (
                <SvgChevron
                    fill={combobox.dropdownOpened ? [] : ['grey', 5]}
                    variant={combobox.dropdownOpened ? 'up' : 'down'}
                    size="22"
                    thickness="1"
                />
            ) : (
                <SvgArrows
                    fill={combobox.dropdownOpened ? [] : ['grey', 5]}
                    thickness="1"
                />
            )
    );

    const inputContents = (
        contentComponents
            ? contentComponents
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
                        {optionComponents}
                    </ScrollArea.Autosize>
                </Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default ComboSingleSelect;
