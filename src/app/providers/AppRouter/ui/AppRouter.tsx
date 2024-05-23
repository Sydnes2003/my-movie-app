import {FC, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig as routes} from "shared/config/routeConfig.tsx";
import {AppLoader} from "shared/ui/AppLoader";

const AppRouter: FC = () => {
    return (
        <Suspense fallback={<AppLoader />}>
            <Routes>
                {Object.values(routes).map((route, index) => (
                    <Route
                        key={index}
                        path={route.path}
                        element={route.element}
                    />
                ))}
            </Routes>
        </Suspense>
    );
};

export default AppRouter;
