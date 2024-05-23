import {FC, Suspense} from 'react';
import {Route, Routes} from "react-router-dom";
import {routeConfig as routes} from "shared/config/routeConfig.tsx";
import {Loader} from "shared/ui/Loader";

const AppRouter: FC = () => {
    return (
        <Suspense fallback={<Loader size={200} type="dots"/>}>
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
