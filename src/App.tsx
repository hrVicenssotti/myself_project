import { styled } from 'styled-components';
import React from 'react';

export const AppContainer = styled.div(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    boxSizing: 'border-box',
    minHeight: '100vh',
    padding: '8px',
}));

export const App: React.FC = () => {
    return <AppContainer></AppContainer>;
};

export default App;
