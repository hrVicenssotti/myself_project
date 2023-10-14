import { Theme } from '@mui/material';
import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles((theme: Theme) => ({
    scrollToTop: {
        transition: 'ease-in-out all 400ms',
        color: theme.palette.secondary.contrastText,
        position: 'fixed',
        bottom: '1rem',
        display: 'flex',
        alignItems: 'center',

        '& span': {
            transition: 'ease-in-out all 200ms',
            position: 'absolute',
            width: 'max-content',
            fontSize: '0.75rem',
            left: '115%',
            cursor: 'default',
        },
    },
    topBottom: {
        borderRadius: '50%',
        boxShadow: '0 0 15px -7px #000000cc',
        lineHeight: 0,
        left: '1rem',
        cursor: 'pointer',
        padding: '0.75rem',

        '& svg': {
            fontSize: '1.5rem',
            fontWeight: 'bold',
        },
    },
}));
