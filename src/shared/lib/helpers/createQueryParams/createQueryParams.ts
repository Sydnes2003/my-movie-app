import {Filter, Genre, Params, SortTitle} from "shared/types/types.ts";

const mapSortTitleToType = (sortTitle: SortTitle): string => {
    const sortMap = [
        { type: 'popularity.desc', title: 'Most Popular' },
        { type: 'popularity.asc', title: 'Least Popular' },
        { type: 'vote_average.desc', title: 'Most Rated' },
        { type: 'vote_average.asc', title: 'Least Rated' },
        { type: 'vote_count.desc', title: 'Most Voted' },
        { type: 'vote_count.asc', title: 'Least Voted' },
    ];

    const sortItem = sortMap.find(item => item.title === sortTitle);
    return sortItem ? sortItem.type : 'popularity.desc';
};

export const createQueryParams = (filter: Filter, sort: SortTitle, genresMap: Genre[]) => {
    const params: Params = {
        sort_by: mapSortTitleToType(sort),
    };

    if (filter.genres.length > 0) {
        const genreIds = filter.genres
            .map((genreName) => genresMap.find((genre) => genre.name === genreName)?.id)
            .filter((id) => id !== undefined);
        params.with_genres = genreIds.join(',');
    }
    if (filter.year) {
        params.primary_release_year = Number(filter.year);
    }
    if (filter.rating.from) {
        params.vote_average_gte = Number(filter.rating.from);
    }
    if (filter.rating.to) {
        params.vote_average_lte = Number(filter.rating.to);
    }

    console.log("Query Params: ", params); // Log query params for debugging

    return params;
};
