import { Box } from '@mui/material';
import React from 'react';

import { useStyles } from './styles';

export const App: React.FC = () => {
    const classes = useStyles();

    return <Box className={classes.appContainer}></Box>;
};

export default App;
