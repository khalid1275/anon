import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Header from './Header';
import Home from './Home';
import Location from './Location';


import Footer from './Footer';
import './App.css';
import PersonalDetails from './PersonalDetails';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/Home"
                        element={<Home />} />
                    <Route path="/location"
                        element={<Location />} />
                    <Route path="/PersonalDetails"
                        element={<PersonalDetails />} />

                </Routes>
                <Footer />
            </div>
        </Router>

    );
}

export default App;

