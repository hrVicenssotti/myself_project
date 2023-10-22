import { StyledEngineProvider, ThemeProvider } from '@mui/material/styles';
import { ScopedCssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { StrictMode } from 'react';

import { theme } from './assets/styles/theme';
import App from './App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <ThemeProvider theme={theme}>
                <StyledEngineProvider injectFirst>
                    <ScopedCssBaseline>
                        <App />
                    </ScopedCssBaseline>
                </StyledEngineProvider>
            </ThemeProvider>
        </BrowserRouter>
    </StrictMode>
);
