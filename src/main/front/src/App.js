import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Login from './components/Login';
import Signup from './components/Signup';
import ForgotPassword from './components/ForgotPassword';
import WorkTimeTracker from './components/WorkTimeTracker';
import WorkTimeChart from './components/WorkTimeChart';

import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Work Time Tracker</Link>
                        </li>
                        <li>
                            <Link to="/charts">Work Time Chart</Link>
                        </li>
                        <li>
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link to="/forgotPassword">Forgot Password</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/" element={<WorkTimeTracker />} />
                    <Route path="/charts" element={<WorkTimeChart />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/forgotPassword" element={<ForgotPassword />} />
                    <Route path="/login" element={<Login />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
