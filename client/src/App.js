import React, { useEffect, useState, Fragment } from "react";
import Button from "react-bootstrap/Button";
import Owners from "./components/Owners";
import Sitters from "./components/Sitters";
import LoginButton from './components/LoginButton';
import LogoutButton from './components/LogoutButton';
import Profile from './components/Profile';
import Home from './components/Home';

import { BrowserRouter as Router, Routes, Route, link} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Owners" element={<Owners />}/>
          <Route path="/Sitters" element={<Sitters/>}/>
        </Routes>
    </Router>

  );
}
export default App;