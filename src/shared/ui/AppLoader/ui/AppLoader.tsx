import {FC} from 'react';
import classes from './AppLoader.module.scss';
import {Center, Loader, LoaderProps} from "@mantine/core";

const AppLoader: FC<LoaderProps> = (props) => {
    return (
        <Center classNames={{root: classes.loaderWrapper}}>
            <Loader classNames={{root: classes.loader}} {...props}/>
        </Center>
    );
};

export default AppLoader;
