import {FC} from 'react';
import {useColor} from "shared/lib/hooks/useColor/useColor.ts";
import {SvgComponentProps} from "shared/types/ui.ts";

interface SvgLogoProps extends SvgComponentProps {

}

const SvgLogo: FC<SvgLogoProps> = (
    {
        fill = [],
        onClick = () => {},
        pointer = false,
    },
) => {
    const color = useColor(fill);

    return (
        <svg
            width="179"
            height="36"
            onClick={onClick}
            style={{ cursor: pointer ? 'pointer' : 'default' }}
            viewBox="0 0 179 36"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M26.6066 6.51472L17.0607 16.0607C16.4749 16.6464 15.5251 16.6464 14.9393 16.0607L5.3934 6.51472C4.80761 5.92893 4.80761 4.97918 5.3934 4.3934C5.97919 3.80761 6.92893 3.80761 7.51472 4.3934L14.5 11.3787L14.5 4C14.5 3.17157 15.1716 2.5 16 2.5C16.8284 2.5 17.5 3.17157 17.5 4L17.5 11.3787L24.4853 4.3934C25.0711 3.80761 26.0208 3.80761 26.6066 4.3934C27.1924 4.97918 27.1924 5.92893 26.6066 6.51472Z"
                fill={color}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M5.3934 29.4853L14.9393 19.9393C15.5251 19.3536 16.4749 19.3536 17.0607 19.9393L26.6066 29.4853C27.1924 30.0711 27.1924 31.0208 26.6066 31.6066C26.0208 32.1924 25.0711 32.1924 24.4853 31.6066L17.5 24.6213L17.5 32C17.5 32.8284 16.8284 33.5 16 33.5C15.1716 33.5 14.5 32.8284 14.5 32L14.5 24.6213L7.51472 31.6066C6.92893 32.1924 5.97918 32.1924 5.3934 31.6066C4.80761 31.0208 4.80761 30.0711 5.3934 29.4853Z"
                fill={color}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M27.4853 28.6066L17.9393 19.0606C17.3536 18.4749 17.3536 17.5251 17.9393 16.9393L27.4853 7.39338C28.0711 6.8076 29.0208 6.8076 29.6066 7.39338C30.1924 7.97917 30.1924 8.92892 29.6066 9.51471L22.6213 16.5L30 16.5C30.8284 16.5 31.5 17.1716 31.5 18C31.5 18.8284 30.8284 19.5 30 19.5L22.6213 19.5L29.6066 26.4853C30.1924 27.0711 30.1924 28.0208 29.6066 28.6066C29.0208 29.1924 28.0711 29.1924 27.4853 28.6066Z"
                fill={color}/>
            <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4.51472 7.39341L14.0607 16.9394C14.6464 17.5251 14.6464 18.4749 14.0607 19.0607L4.51472 28.6066C3.92893 29.1924 2.97918 29.1924 2.3934 28.6066C1.80761 28.0208 1.80761 27.0711 2.3934 26.4853L9.37868 19.5L2 19.5C1.17157 19.5 0.499999 18.8284 0.499999 18C0.499999 17.1716 1.17157 16.5 2 16.5L9.37868 16.5L2.3934 9.51473C1.80761 8.92895 1.80761 7.9792 2.3934 7.39341C2.97918 6.80762 3.92893 6.80762 4.51472 7.39341Z"
                fill={color}/>
            <path
                d="M55.928 22.808H49.256L48.152 26H44.624L50.648 9.224H54.56L60.584 26H57.032L55.928 22.808ZM55.016 20.12L52.592 13.112L50.168 20.12H55.016ZM65.7157 14.768C66.1477 14.064 66.7077 13.512 67.3957 13.112C68.0997 12.712 68.8997 12.512 69.7957 12.512V16.04H68.9077C67.8517 16.04 67.0517 16.288 66.5077 16.784C65.9797 17.28 65.7157 18.144 65.7157 19.376V26H62.3557V12.704H65.7157V14.768ZM74.9388 14.768C75.3708 14.064 75.9308 13.512 76.6188 13.112C77.3228 12.712 78.1228 12.512 79.0188 12.512V16.04H78.1308C77.0748 16.04 76.2748 16.288 75.7308 16.784C75.2028 17.28 74.9388 18.144 74.9388 19.376V26H71.5788V12.704H74.9388V14.768ZM86.7059 26.216C85.4259 26.216 84.2739 25.936 83.2499 25.376C82.2259 24.8 81.4179 23.992 80.8259 22.952C80.2499 21.912 79.9619 20.712 79.9619 19.352C79.9619 17.992 80.2579 16.792 80.8499 15.752C81.4579 14.712 82.2819 13.912 83.3219 13.352C84.3619 12.776 85.5219 12.488 86.8019 12.488C88.0819 12.488 89.2419 12.776 90.2819 13.352C91.3219 13.912 92.1379 14.712 92.7299 15.752C93.3379 16.792 93.6419 17.992 93.6419 19.352C93.6419 20.712 93.3299 21.912 92.7059 22.952C92.0979 23.992 91.2659 24.8 90.2099 25.376C89.1699 25.936 88.0019 26.216 86.7059 26.216ZM86.7059 23.288C87.3139 23.288 87.8819 23.144 88.4099 22.856C88.9539 22.552 89.3859 22.104 89.7059 21.512C90.0259 20.92 90.1859 20.2 90.1859 19.352C90.1859 18.088 89.8499 17.12 89.1779 16.448C88.5219 15.76 87.7139 15.416 86.7539 15.416C85.7939 15.416 84.9859 15.76 84.3299 16.448C83.6899 17.12 83.3699 18.088 83.3699 19.352C83.3699 20.616 83.6819 21.592 84.3059 22.28C84.9459 22.952 85.7459 23.288 86.7059 23.288ZM114.059 12.704L110.171 26H106.547L104.123 16.712L101.699 26H98.0506L94.1386 12.704H97.5466L99.8986 22.832L102.443 12.704H105.995L108.491 22.808L110.843 12.704H114.059ZM125.741 9.248V11.96H118.757V16.256H124.109V18.92H118.757V26H115.397V9.248H125.741ZM131.003 8.24V26H127.643V8.24H131.003ZM135.547 11.12C134.955 11.12 134.459 10.936 134.059 10.568C133.675 10.184 133.483 9.712 133.483 9.152C133.483 8.592 133.675 8.128 134.059 7.76C134.459 7.376 134.955 7.184 135.547 7.184C136.139 7.184 136.627 7.376 137.011 7.76C137.411 8.128 137.611 8.592 137.611 9.152C137.611 9.712 137.411 10.184 137.011 10.568C136.627 10.936 136.139 11.12 135.547 11.12ZM137.203 12.704V26H133.843V12.704H137.203ZM139.179 19.352C139.179 17.976 139.459 16.776 140.019 15.752C140.579 14.712 141.355 13.912 142.347 13.352C143.339 12.776 144.475 12.488 145.755 12.488C147.403 12.488 148.763 12.904 149.835 13.736C150.923 14.552 151.651 15.704 152.019 17.192H148.395C148.203 16.616 147.875 16.168 147.411 15.848C146.963 15.512 146.403 15.344 145.731 15.344C144.771 15.344 144.011 15.696 143.451 16.4C142.891 17.088 142.611 18.072 142.611 19.352C142.611 20.616 142.891 21.6 143.451 22.304C144.011 22.992 144.771 23.336 145.731 23.336C147.091 23.336 147.979 22.728 148.395 21.512H152.019C151.651 22.952 150.923 24.096 149.835 24.944C148.747 25.792 147.387 26.216 145.755 26.216C144.475 26.216 143.339 25.936 142.347 25.376C141.355 24.8 140.579 24 140.019 22.976C139.459 21.936 139.179 20.728 139.179 19.352ZM161.872 26L157.36 20.336V26H154V8.24H157.36V18.344L161.824 12.704H166.192L160.336 19.376L166.24 26H161.872ZM172.624 26.216C171.536 26.216 170.56 26.024 169.696 25.64C168.832 25.24 168.144 24.704 167.632 24.032C167.136 23.36 166.864 22.616 166.816 21.8H170.2C170.264 22.312 170.512 22.736 170.944 23.072C171.392 23.408 171.944 23.576 172.6 23.576C173.24 23.576 173.736 23.448 174.088 23.192C174.456 22.936 174.64 22.608 174.64 22.208C174.64 21.776 174.416 21.456 173.968 21.248C173.536 21.024 172.84 20.784 171.88 20.528C170.888 20.288 170.072 20.04 169.432 19.784C168.808 19.528 168.264 19.136 167.8 18.608C167.352 18.08 167.128 17.368 167.128 16.472C167.128 15.736 167.336 15.064 167.752 14.456C168.184 13.848 168.792 13.368 169.576 13.016C170.376 12.664 171.312 12.488 172.384 12.488C173.968 12.488 175.232 12.888 176.176 13.688C177.12 14.472 177.64 15.536 177.736 16.88H174.52C174.472 16.352 174.248 15.936 173.848 15.632C173.464 15.312 172.944 15.152 172.288 15.152C171.68 15.152 171.208 15.264 170.872 15.488C170.552 15.712 170.392 16.024 170.392 16.424C170.392 16.872 170.616 17.216 171.064 17.456C171.512 17.68 172.208 17.912 173.152 18.152C174.112 18.392 174.904 18.64 175.528 18.896C176.152 19.152 176.688 19.552 177.136 20.096C177.6 20.624 177.84 21.328 177.856 22.208C177.856 22.976 177.64 23.664 177.208 24.272C176.792 24.88 176.184 25.36 175.384 25.712C174.6 26.048 173.68 26.216 172.624 26.216Z"
                fill={color}/>
        </svg>
    );
};

export default SvgLogo;
