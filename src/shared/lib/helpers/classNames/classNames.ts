type Mods = Record<string, boolean | string>

export function classNames(mainClass: string, mods: Mods = {}, additionalClasses: string[] = []) {
    return [
        mainClass,
        ...additionalClasses.filter(Boolean),
        ...Object.entries(mods)
            .filter(([, value]) => Boolean(value))
            .map(([className]) => className),
    ]
        .join(' ');
}
