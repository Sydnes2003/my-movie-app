import {FC} from 'react';
import classes from './ComboMultiSelect.module.scss';
import {Combobox, Group, Pill, PillsInput, Input, ScrollArea, useCombobox, ComboboxProps} from "@mantine/core";
import {SvgChevron} from "shared/ui/SvgChevron";
import {radiusMerger} from "shared/lib/helpers/radiusMerger/radiusMerger.ts";
import {isLastElement} from "shared/lib/helpers/isLastElement/isLastElement.ts";
import {SvgArrows} from "shared/ui/SvgArrows";

type ValueItem = string;
type Value = Array<ValueItem>;

interface ComboMultiSelectProps<T> extends ComboboxProps {
    label?: string;
    placeholder?: string;
    value: T;
    valueSetter: (selected: T) => void;
    options: T;
    rightSection?: 'chevron' | 'arrows';
}

const ComboMultiSelect: FC<ComboMultiSelectProps<Value>> = (
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

    const handleValueSelect = (selected: string) => {
        const selectedValues = value.includes(selected)
            ? value.filter((v) => v !== selected)
            : [...value, selected];

        valueSetter(selectedValues);
    };
    const handleValueRemove = (selected: string) => {
        const emptiedValues = value.filter((v) => v !== selected);

        valueSetter(emptiedValues);
    };

    const contentComponents = value.map((item) => (
        <Pill
            classNames={{
                root: classes.pillRoot,
                label: (
                    isLastElement({
                        item: item,
                        array: value,
                    }) ? classes.pillLabel : [classes.pillLabel, classes.withSeparator].join(' ')
                ),
            }}
            key={item}
        >
            {item}
        </Pill>
    ));
    const optionComponents = options.map((item) => (
        <Combobox.Option
            // todo: fix radiusMerger()
            className={
                radiusMerger({
                    item: item,
                    array: value,
                    classes: [
                        classes.noTopRadius,
                        classes.noBottomRadius,
                    ],
                })
            }
            value={item}
            key={item}
            active={value.includes(item)}
        >
            <Group gap="sm">
                <span>{item}</span>
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
        contentComponents.length > 0
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
                                        handleValueRemove(value[value.length - 1]);
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

export default ComboMultiSelect;
