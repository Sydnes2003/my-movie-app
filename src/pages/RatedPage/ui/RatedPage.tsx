import {FC} from 'react';
import classes from './RatedPage.module.scss';
import {Sidebar} from "shared/ui/Sidebar";
import {AppLoader} from "shared/ui/AppLoader";

const RatedPage: FC = () => {
    return (
        <div className={classes.RatedPage}>
            <Sidebar/>
            <AppLoader size={200} type="dots"/>
        </div>
    );
};

export default RatedPage;
