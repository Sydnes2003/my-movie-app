import {FC} from 'react';
import {useMantineTheme, Stack} from "@mantine/core";
import {Logo} from "shared/ui/Logo";
import classes from './Sidebar.module.scss';
import {NavButton} from "shared/ui/NavButton";

const Sidebar: FC = () => {
    const theme = useMantineTheme();
    const mainColor = theme.colors[theme.primaryColor][theme.primaryShade as number];
    // todo: Implement button state with 'location'

    return (
        <Stack className={classes.sidebar} gap='80px'>
            <Logo fill={mainColor}/>
            <Stack className={classes.buttons}>
                <NavButton
                    className={classes.navButton}
                    variant='pressed'
                    size="md"
                    radius="md"
                >
                    Movies
                </NavButton>
                <NavButton
                    className={classes.navButton}
                    variant='default'
                    size="md"
                    radius="md"
                >
                    Rated movies
                </NavButton>
            </Stack>
        </Stack>
    );
};

export default Sidebar;
