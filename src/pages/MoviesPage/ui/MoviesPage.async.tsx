import {lazy} from "react";

const MoviesPageAsync = lazy(() => import("./MoviesPage"));

export default MoviesPageAsync;
