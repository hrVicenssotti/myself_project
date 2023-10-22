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

        '& h1': {
            margin: 0,
        },
    },
    container: {
        padding: '1rem',
    },
    diffAnchor: {
        paddingTop: '4rem',
    },
    myselfImage: {
        width: '182px',
        height: '182px',
        borderRadius: '50%',
        boxShadow: '0 0 15px -7px #000000cc',
    },
}));
