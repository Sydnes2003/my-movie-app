import {useMantineTheme} from "@mantine/core";

type UseColorProps = [
    Color?: string,
    Shade?: number,
];

/**
 * Reusable hook that returns a color from Mantine theme. Primary color & shade are the default values
 * @param color
 * @param shade
 */
export function useColor([color, shade]: UseColorProps = []) {
    const theme = useMantineTheme();

    return theme.colors[color ? color : theme.primaryColor][shade || shade === 0 ? shade : theme.primaryShade as number];
}
