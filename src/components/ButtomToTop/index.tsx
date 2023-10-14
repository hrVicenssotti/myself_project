import { Box, BoxProps, Typography } from '@mui/material';
import React, { useState } from 'react';
import { useStyles } from './styles';
import { North } from '@mui/icons-material';

export interface ButtomToTopProps extends BoxProps {
    scrollOffTop: boolean;
}

const ButtomToTopRoot: React.FC<ButtomToTopProps> = ({ scrollOffTop, ...props }) => {
    const classes = useStyles();

    const [hoverToTopBtn, setHoverToTopBtn] = useState<boolean>(false);

    return (
        <Box className={classes.scrollToTop} sx={{ opacity: scrollOffTop ? 1 : 0 }} {...props}>
            <Box
                className={classes.topBottom}
                onMouseLeave={() => setHoverToTopBtn(false)}
                onMouseEnter={() => setHoverToTopBtn(true)}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
                <North />
            </Box>
            <Typography variant={'caption'} sx={{ opacity: hoverToTopBtn ? 1 : 0 }}>
                Vá para o topo
            </Typography>
        </Box>
    );
};

export const ButtomToTop = React.memo(ButtomToTopRoot);
