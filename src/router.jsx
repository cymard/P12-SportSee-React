import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function Router() {
    return (
        <Routes>
            <Route path="/home/:id" element={<Home />} />
        </Routes>
    );
}

export default Router;
