import { makeStyles } from '@mui/styles';

export const useStyles = makeStyles(() => ({
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
