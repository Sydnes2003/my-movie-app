import React from "react";

export type Rating = (
    0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
);

export const POSSIBLE_USER_RATINGS: readonly Rating[] = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];

export const FETCHING_LANGUAGE = 'en-US';

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
    genres: Genre['name'][],
    year: string,
    rating: {
        from: string,
        to: string,
    },
}

export type FilterOptions = Record<string, string[]>;
export type FilterSetter = React.Dispatch<React.SetStateAction<Filter>>;

export type SortType =
    | 'popularity.asc'
    | 'popularity.desc'
    | 'vote_average.asc'
    | 'vote_average.desc'
    | 'vote_count.asc'
    | 'vote_count.desc';

export type SortTitle =
    | 'Most Popular'
    | 'Least Popular'
    | 'Most Rated'
    | 'Least Rated'
    | 'Most Voted'
    | 'Least Voted';

export interface Sort {
    type: SortType,
    title: SortTitle,
}

export type SortMap = Sort[];

export interface Genre {
    id: number,
    name: string,
}

export type Year = number;
