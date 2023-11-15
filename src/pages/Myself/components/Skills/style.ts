import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    start: {
        display: 'grid',
        gridTemplateRows: '110px 1fr',
        minHeight: `calc(${window.innerHeight}px - 5rem)`,
    },
    skillsBlock: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexWrap: 'wrap',
        maxWidth: '900px',
    },
    fullCenter: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
}));
