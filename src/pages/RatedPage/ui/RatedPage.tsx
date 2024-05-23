import {FC} from 'react';
import classes from './RatedPage.module.scss';
import {Sidebar} from "widgets/Sidebar";
import {Loader} from "shared/ui/Loader";

const RatedPage: FC = () => {
    return (
        <div className={classes.RatedPage}>
            <Sidebar/>
            <Loader size={200} type="dots"/>
        </div>
    );
};

export default RatedPage;
