import { Route, Routes } from 'react-router-dom';
import React from 'react';

import { Home, Myself } from './pages';

export const App: React.FC = () => {
    return (
        <Routes>
            <Route path={'/'} element={<Home />} />
            <Route path={'/myself'} element={<Myself />} />
            <Route path={'*'} />
        </Routes>
    );
};

export default App;
