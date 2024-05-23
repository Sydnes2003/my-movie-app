import {isLastElement} from "shared/lib/helpers/isLastElement/isLastElement.ts";

interface RadiusMerger<T> {
    item: T,
    array: T[],
    classes: [
        top: string,
        bottom: string,
    ],
}

export const radiusMerger = ({item, array, classes}: RadiusMerger<string | number | boolean>) => {
    const isCurrentActive = array.includes(item);
    if (!isCurrentActive) return '';

    const cls = {
        top: classes[0] as string,
        bottom: classes[1] as string,
    };
    const finalClasses: string[] = [];

    const isNotLast = !isLastElement({item, array});
    const isNextActive = array.includes(array[array.indexOf(item) + 1]);
    if (isNotLast && isNextActive) {
        finalClasses.push(cls.bottom);
    }

    const isNotFirst = item !== array[0];
    const isPreviousActive = array.includes(array[array.indexOf(item) - 1]);
    if (isNotFirst && isPreviousActive) {
        finalClasses.push(cls.top);
    }

    return finalClasses.length ? finalClasses.join(' ') : '';
};
