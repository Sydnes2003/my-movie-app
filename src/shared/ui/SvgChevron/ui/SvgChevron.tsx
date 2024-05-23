import {FC} from 'react';
import {useColor} from "shared/lib/hooks/useColor/useColor.tsx";
import {SvgComponentProps} from "shared/types/ui.ts";

interface SvgChevronProps extends SvgComponentProps {
    variant?: 'down' | 'up';
}

const SvgChevron: FC<SvgChevronProps> = (
    {
        fill = [],
        size = '16px',
        thickness = '1.5',
        onClick = () => {},
        pointer = false,
        variant = 'down',
    },
) => {
    const color = useColor(fill);

    return (
        <svg
            width={size}
            height={size}
            onClick={onClick}
            style={{ cursor: pointer ? 'pointer' : 'default' }}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d={ variant === 'down'
                    ? "M3.33325 6L7.47929 9.55374C7.77888 9.81054 8.22096 9.81054 8.52055 9.55374L12.6666 6"
                    : "M12.6667 10L8.52071 6.44626C8.22112 6.18946 7.77904 6.18946 7.47945 6.44626L3.33341 10"
                }
                stroke={color}
                strokeWidth={thickness}
                strokeLinecap="round"
            />
        </svg>
    );
};

export default SvgChevron;
