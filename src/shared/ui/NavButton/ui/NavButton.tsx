import {FC} from 'react';
import {classNames} from "shared/lib/classNames/classNames";
import classes from './NavButton.module.scss';
import {Button, ButtonProps} from "@mantine/core";

interface NavButtonProps extends ButtonProps {
    className?: string;
}

const NavButton: FC<NavButtonProps> = (props: NavButtonProps) => {
    const { className, children, ...restProps } = props;
    // todo: Add 'to' prop, implement routing & state

    return (
        <Button
            className={classNames(classes.NavButton, {}, [className ? className : ''])}
            {...restProps}
        >
            {children}
        </Button>
    );
};

export default NavButton;
