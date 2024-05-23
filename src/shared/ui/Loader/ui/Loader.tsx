import {FC} from 'react';
import classes from './Loader.module.scss';
import {Center, Loader as MantineLoader, LoaderProps as MantineLoaderProps} from "@mantine/core";

interface LoaderProps extends MantineLoaderProps {

}

const Loader: FC<LoaderProps> = (props) => {
    return (
        <Center classNames={{root: classes.loaderWrapper}}>
            <MantineLoader classNames={{root: classes.loader}} {...props}/>
        </Center>
    );
};

export default Loader;
