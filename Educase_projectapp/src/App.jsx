import { useState } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // ✅ Correct import
import WelcomeScreen from './pages/Welcome';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import AccountSettings from './pages/SettingsPanel';


function App() {
  return (
    <div className='rubik'>
      <Router>
        <Routes>
          <Route path="/" element={<WelcomeScreen />} />
          <Route path="/Signin" element={<Signin />} />
          <Route path="/Signup" element={<Signup />} />
          <Route path="/Account" element={<AccountSettings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

