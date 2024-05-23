import {createContext} from "react";
import {UserRating} from "shared/types/ui.ts";

type Rating = {
    MovieId: number,
    MovieRating: UserRating,
};
interface RatingContextProps {
    rating?: Rating,
    setRating?: (rating: Rating) => void,
}

export const RatingContext = createContext<RatingContextProps>({});
