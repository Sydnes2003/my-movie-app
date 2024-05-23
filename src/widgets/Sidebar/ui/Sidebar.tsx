import {FC} from 'react';
import {Stack, NavLink, StackProps} from "@mantine/core";
import {SvgLogo} from "shared/ui/SvgLogo";
import classes from './Sidebar.module.scss';
import {NavLink as ReactRouterNavLink} from "react-router-dom";
import {routePath} from "shared/config/routeConfig.tsx";

const Sidebar: FC<StackProps> = (props) => {
    return (
        // todo: Deal with active links when navigated to movie page
        <Stack classNames={{root: classes.sidebar}} gap={80} {...props}>
            <SvgLogo />
            <Stack>
                <NavLink
                    classNames={{
                        root: classes.navLink,
                        label: classes.navLinkLabel,
                    }}
                    component={ReactRouterNavLink}
                    label='Movies'
                    to={routePath.movies || routePath.details}
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
