import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import HomePage from './pages/HomePage';
import './App.css';

const App: React.FC = () => {
    return (
        <div className="App">
            <Router>
                <Routes>
                    <Route path="/" element={<HomePage/>}/>
                </Routes>
            </Router>
        </div>
    );
};

export default App;
