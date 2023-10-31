import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export interface IconVelaProps extends SvgIconProps {}

export const IconVela: React.FC<IconVelaProps> = ({ ...props }) => {
    return (
        <SvgIcon viewBox="0 0 1500 1500" fill="none" sx={{ fill: 'none' }} {...props}>
            <polygon
                points="1477.22 329.54 1338.11 219.91 1349.56 43.16 1202.3 141.58 1037.73 76.07 1085.84 246.54 972.68 382.81 1149.67 389.74 1244.3 539.46 1305.58 373.27 1477.22 329.54"
                fill="#9e6bae"
            ></polygon>
            <path
                d="M1174.75 635.12 757.57 1357.69a3.47 3.47.0 01-6 0L125.38 273.13a3.48 3.48.0 013-5.22H925.24l39.14-47.13L950.19 170.5H128.39A100.9 100.9.0 0041 321.84L667.19 1406.4a100.88 100.88.0 00174.74.0l391.61-678.27z"
                fill="#34c6f4"
            ></path>
            <polygon
                points="1087.64 497.29 1038.27 495.36 754.56 986.75 395.9 365.54 288.13 365.54 754.56 1173.42 1117.58 544.66 1087.64 497.29"
                fill="#fff"
            ></polygon>
        </SvgIcon>
    );
};
