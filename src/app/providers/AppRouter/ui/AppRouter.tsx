import {FC, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig as routes} from "shared/config/routeConfig.tsx";

const AppRouter: FC = () => {
    return (
        // todo: Create appropriate Loader
        <Suspense fallback={<div>LOADING...</div>}>
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
