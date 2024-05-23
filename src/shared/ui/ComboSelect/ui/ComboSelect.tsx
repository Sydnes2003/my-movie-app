import {FC, useState} from 'react';
import classes from './ComboSelect.module.scss';
import {Combobox, Group, Pill, PillsInput, Input, useCombobox, ComboboxProps} from "@mantine/core";
import {SvgChevron} from "shared/ui/SvgChevron";
import {radiusMerger} from "shared/lib/helpers/radiusMerger/radiusMerger.ts";
import {isLastElement} from "shared/lib/helpers/isLastElement/isLastElement.ts";

interface ComboSelectProps extends ComboboxProps {
    label?: string;
    placeholder?: string;
    data: string[];
}

const ComboSelect: FC<ComboSelectProps> = ({label= 'PLACEHOLDER', placeholder= 'PLACEHOLDER', data}) => {
    const [value, setValue] = useState<string[]>([]);

    const combobox = useCombobox({
        onDropdownClose: () => combobox.resetSelectedOption(),
        onDropdownOpen: () => combobox.updateSelectedOptionIndex('active'),
    });

    const handleValueSelect = (val: string) => {
        setValue((current) =>
            current.includes(val) ? current.filter((v) => v !== val) : [...current, val],
        );
    };
    const handleValueRemove = (val: string) => {
        setValue((current) => current.filter((v) => v !== val));
    };

    const values = value.map((item) => (
        <Pill
            classNames={{
                root: classes.pillRoot,
                label: (
                    isLastElement({item: item, array: value}) ? classes.pillLabel : [classes.pillLabel, classes.withSeparator].join(' ')
                ),
            }}
            key={item}
        >
            {item}
        </Pill>
    ));
    const options = data.map((item) => (
        <Combobox.Option
            className={radiusMerger({
                item: item,
                array: value,
                classes: [
                    classes.noTopRadius,
                    classes.noBottomRadius,
                ],
            })}
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
        <SvgChevron
            fill={combobox.dropdownOpened ? [] : ['grey', 5]}
            variant={combobox.dropdownOpened ? 'up' : 'down'}
            size='22'
            thickness='1'
        />
    );
    const inputContents = values.length > 0 ? ( values ) : ( <Input.Placeholder>{placeholder}</Input.Placeholder> );

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
                    <Pill.Group classNames={{ group: classes.pillGroup }}>
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
                <Combobox.Options>{options}</Combobox.Options>
            </Combobox.Dropdown>
        </Combobox>
    );
};

export default ComboSelect;
