interface IsLastElement<T> {
    item: T,
    array: T[],
}

export const isLastElement = ({item, array}: IsLastElement<string | number | boolean>) => {
    return array.indexOf(item) === array.length - 1;
};
