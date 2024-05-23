import {FC} from 'react';
import classes from './DetailsPage.module.scss';
import {Sidebar} from "widgets/Sidebar";
import {Loader} from "shared/ui/Loader";

const DetailsPage: FC = () => {
    return (
        <div className={classes.DetailsPage}>
            <Sidebar/>
            <Loader size={200} type="dots"/>
        </div>
    );
};

export default DetailsPage;
