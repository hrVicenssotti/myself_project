import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    appContainer: {
        backgroundColor: theme.palette.secondary.main,
        boxSizing: 'border-box',
        minHeight: '150vh',
        padding: '8px',
    },
    navBar: {
        boxShadow: '0px 10px 15px -8px #00000018',
    },
}));
