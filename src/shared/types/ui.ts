import {BoxProps} from "@mantine/core";

export interface SvgComponentProps extends BoxProps {
    fill?: [string, number] | [];
    size?: string;
    thickness?: string;
    onClick?: () => void;
    pointer?: boolean;
}
