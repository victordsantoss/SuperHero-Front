import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import Home from "../pages/Home";
import Favorites from '../pages/Favorites/Favorites';
import Details from "../pages/Details";

const ApplicationRoutes = () => {
    return (
        <Router>
            <Sidebar>
                <Routes>
                    <Route exact path="/" element={<Home />} />
                    <Route exact path="/favorites" element={<Favorites />} />
                    <Route exact path="/details" element={<Details />} />
                </Routes>
            </Sidebar>
        </Router>
    );
}

export default ApplicationRoutes;