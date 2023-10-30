import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    start: {
        display: 'grid',
        gridTemplateRows: '110px 1fr',
        minHeight: `calc(${window.innerHeight}px - 5rem)`,
    },
}));
