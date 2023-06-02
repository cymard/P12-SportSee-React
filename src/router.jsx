import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home';

function Router() {
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const uriRegex = /\/home\/(?:mock\/)?\d+/;

        if (!uriRegex.test(location.pathname)) {
            navigate('/home/mock/12');
        }
    }, [location.pathname]);

    return (
        <Routes>
            <Route path="/home/:id" element={<Home isMock={false} />} />
            <Route path="/home/mock/:id" element={<Home isMock={true} />} />
        </Routes>
    );
}

export default Router;
