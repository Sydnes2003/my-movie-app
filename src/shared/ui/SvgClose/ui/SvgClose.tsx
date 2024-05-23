import {FC} from 'react';
import {SvgComponentProps} from "shared/types/ui.ts";
import {useColor} from "shared/lib/hooks/useColor/useColor.tsx";

interface SvgCloseProps extends SvgComponentProps {

}

const SvgClose: FC<SvgCloseProps> = (
    {
        fill = [],
        size = '16px',
        thickness = '1.5',
    },
) => {
    const color = useColor(fill);

    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                d="M12 4L4 12"
                stroke={color}
                strokeWidth={thickness}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            <path
                d="M4 4L12 12"
                stroke={color}
                strokeWidth={thickness}
                strokeLinecap="round"
                strokeLinejoin="round"
            />
        </svg>
    );
};

export default SvgClose;
