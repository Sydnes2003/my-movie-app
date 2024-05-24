import React from "react";

export type Rating = (
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
);

export const POSSIBLE_USER_RATINGS: readonly Rating[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

export interface Movie {
    id: number,
    poster?: string,
    title: string,
    year: number,
    rating: {
        avg: number,
        count: number,
    },
    genres: string[] | [],
    userRating?: Rating,
}

export interface Filter {
    genres: string[] | [],
    year: string,
    rating: {
        from: Rating,
        to: Rating,
    },
}

export type FilterOptions = Record<string, string[]>;
export type FilterSetter = React.Dispatch<React.SetStateAction<Filter>>;
