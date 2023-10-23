import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    appContainer: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        boxSizing: 'border-box',
        minHeight: '100vh',
    },
    main: {
        boxSizing: 'content-box',
    },
    container: {
        padding: '1rem',

        '& h1': {
            fontWeight: '500',
            fontSize: '2.5rem',
            margin: '0.25rem 0',
        },
        '& p': {
            fontSize: '1.25rem',
            fontWeight: '200',
            textAlign: 'justify',
        },
    },
    diffAnchor: {
        paddingTop: '4rem',
    },
}));
