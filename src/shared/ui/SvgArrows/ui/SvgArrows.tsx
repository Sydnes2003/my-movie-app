import {FC} from 'react';
import {SvgComponentProps} from "shared/types/ui.ts";
import {useColor} from "shared/lib/hooks/useColor/useColor.ts";

interface SvgChevronProps extends SvgComponentProps {

}

const SvgArrows: FC<SvgChevronProps> = (
    {
        fill = [],
        thickness = '1.5',
        onClick,
        pointer = false,
    },
) => {
    const color = useColor(fill);

    return (
        <svg
            width="13"
            height="26"
            onClick={onClick}
            style={{cursor: pointer ? 'pointer' : 'default'}}
            viewBox="0 0 13 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M9.66681 7.5L6.55728 4.83469C6.33259 4.6421 6.00103 4.6421 5.77633 4.83469L2.66681 7.5"
                stroke={color}
                strokeWidth={thickness}
                strokeLinecap="round"
            />
            <path
                d="M2.66669 18.5L5.77621 21.1653C6.00091 21.3579 6.33247 21.3579 6.55716 21.1653L9.66669 18.5"
                stroke={color}
                strokeWidth={thickness}
                strokeLinecap="round"
            />
        </svg>
    );
};

export default SvgArrows;
