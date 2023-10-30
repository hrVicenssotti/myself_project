import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
    box: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column',
        width: 'fit-content',
        margin: '16px',

        '& a': {
            lineHeight: 0,
        },
        '& svg': {
            fontSize: '4rem',
            width: 'auto',
            aspectRatio: '1/1',
        },
        '& span': {
            cursor: 'default',
            fontSize: '1rem',
            lineHeight: 'normal',
        },
    },
}));
