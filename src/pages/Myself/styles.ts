import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    appContainer: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        boxSizing: 'border-box',
        minHeight: '200vh',
    },
    main: {
        boxSizing: 'content-box',
    },
    container: {
        padding: '1rem',

        '& h1': {
            fontWeight: 'bold',
            fontSize: '2.5rem',
            margin: '0.25rem 0',
        },
        '& p': {
            fontSize: '1.25rem',
        },
    },
    diffAnchor: {
        paddingTop: '4rem',
    },
}));
