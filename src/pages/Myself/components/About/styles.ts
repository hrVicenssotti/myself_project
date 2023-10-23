import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    start: {
        display: 'grid',
        gridTemplateColumns: '1fr 440px',
        alignItems: 'center',
        minHeight: `calc(${window.innerHeight}px - 5rem)`,
    },
    myselfImage: {
        width: '240px',
        height: '240px',
        borderRadius: '50%',
        boxShadow: '0 0 15px -7px #000000cc',
    },
    mapLink: {
        display: 'flex',
        alignItems: 'center',
        gap: '1rem',
        color: 'inherit',
        textDecoration: 'inherit',
    },
    socialMedia: {
        display: 'flex',
        gap: '1rem',
    },
}));
