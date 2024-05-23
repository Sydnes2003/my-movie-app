export const numFormatter = (number: number, digits: number = 0) => {
    const regexp = /\.0+$|(?<=\.[0-9]*[1-9])0+$/;
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "K" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "G" },
        { value: 1e12, symbol: "T" },
        { value: 1e15, symbol: "P" },
        { value: 1e18, symbol: "E" },
    ];

    const item = (
        lookup
            .slice()
            .reverse()
            .find(item => number >= item.value)
    );

    return (
        item
            ? (number / item.value)
                .toFixed(digits)
                .replace(regexp, "")
                .concat(item.symbol)
            : "0"
    );
};
