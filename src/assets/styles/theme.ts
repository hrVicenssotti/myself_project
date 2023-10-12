import 'styled-components';
import { DefaultTheme } from 'styled-components';

declare module 'styled-components' {
    export interface DefaultTheme {
        palette: {
            primary: {
                main: string;
                font: string;
            };
            secondary: {
                main: string;
                font: string;
            };
            blue: {
                dark900: string;
                violete900: string;
            };
            purple: {
                purple900: string;
            };
        };
    }
}

export const theme: DefaultTheme = {
    palette: {
        primary: {
            main: '#2f3c51',
            font: '#556579',
        },
        secondary: {
            main: '#242f42',
            font: '#FFFFFF',
        },
        blue: {
            dark900: '#220B4C',
            violete900: '#410F70',
        },
        purple: {
            purple900: '#520F70',
        },
    },
};

// #242f42 #2f3c51 #7b90a0
