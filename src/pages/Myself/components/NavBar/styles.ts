import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    navBar: {
        backgroundColor: 'transparent',
        transition: 'ease-in-out all 400ms',
        boxShadow: '0px 10px 15px -8px #00000000',
        backdropFilter: 'blur(6px)',

        '& > div': {
            justifyContent: 'space-between',
            transition: 'ease-in-out all 300ms',
        },
        '& svg': {
            fontSize: '2.5rem',
        },
    },
    navLinks: {
        '& a': {
            padding: '0.5rem',
            margin: '0 0.5rem',
            fontSize: '1.25rem',
            color: 'inherit',
            textDecoration: 'inherit',
        },
    },
    navBarOffScroll: {
        boxShadow: '0px 10px 15px -8px #00000018',
    },
}));
