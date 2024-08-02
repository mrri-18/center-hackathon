import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

import Login from './components/Login';
import WorkTimeTracker from "./components/WorkTimeTracker";
import WorkTimeChart from "./components/WorkTimeChart";
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
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
                            <Link to="/signup">Signup</Link>
                        </li>
                        <li>
                            <Link to="/reset">Forgot Password</Link>
                        </li>
                        <li>
                            <Link to="/login">Login</Link>
                        </li>
                        <li>
                            <Link to="/timer">Timer</Link>
                        </li>
                        <li>
                            <Link to="/stretching">Stretching</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route path="/login" element={<Login />} />
                    <Route path="/" element={<Record />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/reset" element={<ForgotPassword/>} />
                    <Route path="/timer" element={<Timer />} />
                    <Route path="/stretching" element={<Stretching/>}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;