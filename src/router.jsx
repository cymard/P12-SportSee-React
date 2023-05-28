import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function Router() {
    return (
        <Routes>
            <Route path="/home/:id" element={<Home isMock={false} />} />
            <Route path="/home/mock" element={<Home isMock={true} />} />
        </Routes>
    );
}

export default Router;
