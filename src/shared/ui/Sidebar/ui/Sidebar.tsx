import {FC} from 'react';
import {Stack, NavLink, StackProps} from "@mantine/core";
import {Logo} from "shared/ui/Logo";
import classes from './Sidebar.module.scss';
import {NavLink as ReactRouterNavLink} from "react-router-dom";
import {routePath} from "shared/config/routeConfig.tsx";

const Sidebar: FC<StackProps> = (props) => {
    return (
        <Stack classNames={{root: classes.sidebar}} gap={80} {...props}>
            <Logo />
            <Stack>
                <NavLink
                    classNames={{
                        root: classes.navLink,
                        label: classes.navLinkLabel,
                    }}
                    component={ReactRouterNavLink}
                    label='Movies'
                    to={routePath.movies}
                />
                <NavLink
                    classNames={{
                        root: classes.navLink,
                        label: classes.navLinkLabel,
                    }}
                    component={ReactRouterNavLink}
                    label='Rated movies'
                    to={routePath.rated}
                />
            </Stack>
        </Stack>
    );
};

export default Sidebar;
