import React, { Fragment } from "react";

import Owners from "./components/Owners";
import Sitters from "./components/Sitters";
import Login from './components/Login';
import Services from './components/Services';
import Profile from './components/Profile';
import Home from './components/Home';
import Contact from './components/Contact';
import Bookings from './components/Bookings';
import FormOwners from './components/FormOwners';
import FormSitters from './components/FormSitters';



import { BrowserRouter as Router, Routes, Route, link} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Routes>
          <Route exact path="/" element={<Home />}/>
          <Route path="/login" element={<Login />}/>
          <Route path="/Profile" element={<Profile />}/>
          <Route path="/Owners" element={<Owners />}/>
          <Route path="/Sitters" element={<Sitters/>}/>
          <Route path="/services" element={<Services />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/bookings" element={<Bookings />}/>
          <Route path="/register-owner" element={<FormOwners />}/>
          <Route path="/register-sitter" element={<FormSitters />}/>

        </Routes>
    </Router>

  );
}
export default App;