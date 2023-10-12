import { createTheme } from '@mui/material';

declare module '@mui/material/styles' {
    interface Palette {
        blue: {
            dark600: string;
            dark900: string;
            violete900: string;
        };
        purple: {
            purple900: string;
        };
    }

    interface PaletteOptions {
        blue: {
            dark600: string;
            dark900: string;
            violete900: string;
        };
        purple: {
            purple900: string;
        };
    }
}

export const theme = createTheme({
    palette: {
        primary: {
            main: '#2f3c51',
            contrastText: '#EDEDEE',
        },
        secondary: {
            main: '#242f42',
            contrastText: '#FFFFFF',
        },
        blue: {
            dark600: '#556579',
            dark900: '#220B4C',
            violete900: '#410F70',
        },
        purple: {
            purple900: '#520F70',
        },
    },
});
