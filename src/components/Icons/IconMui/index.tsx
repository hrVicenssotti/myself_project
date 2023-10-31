import { SvgIcon, SvgIconProps } from '@mui/material';
import React from 'react';

export interface IconMuiProps extends SvgIconProps {}

export const IconMui: React.FC<IconMuiProps> = ({ ...props }) => {
    return (
        <SvgIcon viewBox="0 0 256 256" fill="none" sx={{ fill: 'none' }} {...props}>
            <path
                fill="#007FFF"
                fill-rule="evenodd"
                d="M192.031 157.671C192.823 157.216 193.482 156.561 193.941 155.771C194.4 154.981 194.643 154.084 194.646 153.171L194.74 123.03C194.742 122.117 194.986 121.22 195.445 120.43C195.903 119.64 196.562 118.985 197.354 118.53L213.693 109.145C214.485 108.69 215.382 108.452 216.295 108.453C217.208 108.455 218.105 108.696 218.895 109.154C219.686 109.611 220.342 110.268 220.798 111.059C221.254 111.85 221.495 112.747 221.495 113.661V168.457C221.495 169.374 221.253 170.273 220.794 171.066C220.335 171.859 219.675 172.517 218.88 172.973L157.219 208.39C156.431 208.842 155.539 209.08 154.631 209.081C153.723 209.082 152.83 208.845 152.042 208.395L103.651 180.718C102.854 180.262 102.191 179.605 101.73 178.811C101.269 178.017 101.026 177.115 101.026 176.197V148.567C101.026 148.536 101.063 148.515 101.094 148.53C101.12 148.546 101.156 148.53 101.156 148.494V148.463C101.156 148.442 101.167 148.421 101.188 148.411L141.042 125.515C141.078 125.494 141.062 125.437 141.021 125.437C141.01 125.437 140.999 125.432 140.991 125.424C140.984 125.417 140.979 125.406 140.979 125.395L141.057 98.3064C141.061 97.3904 140.823 96.4896 140.367 95.6949C139.912 94.9003 139.254 94.2399 138.462 93.7803C137.67 93.3207 136.77 93.0782 135.854 93.0773C134.938 93.0764 134.038 93.3171 133.245 93.7751L103.625 110.843C102.834 111.298 101.938 111.538 101.026 111.538C100.114 111.538 99.2176 111.298 98.4271 110.843L68.7135 93.7335C67.9219 93.2776 67.0243 93.038 66.1109 93.0387C65.1974 93.0393 64.3001 93.2802 63.5092 93.7372C62.7182 94.1941 62.0613 94.8511 61.6045 95.6421C61.1476 96.4331 60.9068 97.3304 60.9063 98.2439V147.202C60.9069 148.115 60.6677 149.011 60.2128 149.802C59.7578 150.593 59.1031 151.251 58.314 151.709C57.525 152.168 56.6293 152.411 55.7168 152.414C54.8043 152.417 53.9069 152.181 53.1146 151.728L36.625 142.301C35.8263 141.845 35.1627 141.185 34.7016 140.389C34.2405 139.594 33.9985 138.69 34 137.77L34.1458 52.197C34.1478 51.2847 34.3894 50.389 34.8464 49.5994C35.3033 48.8098 35.9597 48.1541 36.7497 47.698C37.5397 47.2418 38.4357 47.0011 39.348 47C40.2603 46.9989 41.1568 47.2375 41.9479 47.6918L98.4323 80.1345C99.2216 80.5878 100.116 80.8263 101.026 80.8263C101.936 80.8263 102.831 80.5878 103.62 80.1345L160.089 47.6918C160.881 47.2368 161.779 46.9982 162.692 47C163.606 47.0018 164.503 47.2438 165.294 47.7019C166.084 48.1599 166.74 48.8178 167.196 49.6096C167.652 50.4013 167.891 51.299 167.891 52.2126V137.806C167.891 138.722 167.65 139.622 167.192 140.414C166.734 141.207 166.075 141.865 165.281 142.322L135.708 159.353C134.914 159.811 134.255 160.471 133.797 161.265C133.339 162.059 133.099 162.961 133.101 163.878C133.103 164.794 133.347 165.694 133.809 166.487C134.27 167.279 134.933 167.935 135.729 168.39L152.042 177.676C152.83 178.125 153.722 178.36 154.629 178.358C155.536 178.356 156.427 178.118 157.214 177.666L192.031 157.671V157.671ZM195.453 80.8897C195.454 81.8108 195.699 82.7152 196.163 83.5107C196.627 84.3062 197.294 84.9644 198.096 85.4182C198.897 85.8719 199.805 86.1049 200.726 86.0935C201.647 86.0821 202.548 85.8267 203.339 85.3532L218.964 75.9782C219.735 75.5161 220.373 74.862 220.817 74.0798C221.261 73.2976 221.494 72.4139 221.495 71.5147V52.4105C221.493 51.4899 221.247 50.5862 220.783 49.7914C220.318 48.9966 219.651 48.3391 218.85 47.886C218.048 47.4329 217.141 47.2003 216.221 47.2119C215.3 47.2236 214.399 47.479 213.609 47.9522L197.984 57.3272C197.213 57.7894 196.574 58.4434 196.131 59.2256C195.687 60.0078 195.454 60.8915 195.453 61.7908V80.8949V80.8897Z"
                clip-rule="evenodd"
            />
        </SvgIcon>
    );
};