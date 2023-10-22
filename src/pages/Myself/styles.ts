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
    myselfImage: {
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        boxShadow: '0 0 15px -7px #000000cc',
    },
    start: {
        display: 'grid',
        gridTemplateColumns: '1fr 368px',
        alignItems: 'center',
        minHeight: '400px',
    },
}));
