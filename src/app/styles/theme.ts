import {createTheme, MantineThemeOverride} from "@mantine/core";

const theme: MantineThemeOverride = createTheme({
    fontFamily: 'Inter, sans-serif',
    colors: {
        // Grey
        grey: [
            '#FFFFFF',
            '#F5F5F6',
            '#EAEBED',
            '#D5D6DC',
            '',
            '#ACADB9',
            '#7B7C88',
            '#232134',
            '',
            '',
        ],
        // Main
        violet: [
            '',
            '#F2ECFA',
            '#E5D5FA',
            '#D1B4F8',
            '#BD93F7',
            '#9854F6',
            '#541F9D',
            '',
            '',
            '',
        ],
        yellow: [
            '#FAB005',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
            '',
        ],
    },
    primaryColor: 'violet',
    primaryShade: 5,
    breakpoints: {
        xxl: '120rem', // 1920x1080
        rem150: '150rem',
        rem180: '180rem',
        rem210: '210rem',
        rem240: '240rem', // 3840x2160
    },
});

export default theme;
