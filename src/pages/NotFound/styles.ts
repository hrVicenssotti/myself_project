import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    appContainer: {
        backgroundColor: theme.palette.secondary.main,
        color: theme.palette.secondary.contrastText,
        boxSizing: 'border-box',
        minHeight: '100vh',
        padding: '1rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        gap: '1rem',

        '& a *': {
            textShadow: '6px 3px 5px rgba(0,0,0,0.2)',
        },
    },
}));
