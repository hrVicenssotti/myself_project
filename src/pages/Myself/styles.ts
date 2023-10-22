import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    appContainer: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        boxSizing: 'border-box',
        minHeight: '100vh',
        padding: '0.5rem',
    },
    main: {
        paddingTop: '3.5rem',
        boxSizing: 'content-box',
    },
}));
