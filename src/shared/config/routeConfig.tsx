import { Navigate, RouteProps } from "react-router-dom";
import { MoviesPage } from "pages/MoviesPage";
import { RatedPage } from "pages/RatedPage";
import { DetailsPage } from "pages/DetailsPage";
import { ErrorPage } from "pages/ErrorPage";

export enum AppRoutes {
    MOVIES = 'movies',
    RATED = 'rated',
    DETAILS = 'details',
    ERROR = 'error',

    // Redirect
    _ANY = '_any',
}

export const routePath: Record<AppRoutes, string> = {
    [AppRoutes.MOVIES]: '/',
    [AppRoutes.RATED]: '/rated',
    [AppRoutes.DETAILS]: '/movie/:id',
    [AppRoutes.ERROR]: '/error',

    // Redirect
    [AppRoutes._ANY]: '*',
};

export const routeConfig: Record<AppRoutes, RouteProps> = {
    [AppRoutes.MOVIES]: {
        path: routePath.movies,
        element: <MoviesPage />,
    },
    [AppRoutes.RATED]: {
        path: routePath.rated,
        element: <RatedPage />,
    },
    [AppRoutes.DETAILS]: {
        path: routePath.details,
        element: <DetailsPage />,
    },
    [AppRoutes.ERROR]: {
        path: routePath.error,
        element: <ErrorPage />,
    },

    // Redirect
    [AppRoutes._ANY]: {
        path: routePath._any,
        element: <Navigate to='/error' />,
    },
};
