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

export type Rating = (
    1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10
);

export const POSSIBLE_RATINGS: readonly Rating[] = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
];
