
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './i18n';
import './App.css';
import LoginPage from './pages/LoginPage';
import SensorSettings from './pages/SensorSettings';
import UserDashboard from './pages/UserDashboard';
import AdminPanel from './pages/AdminPanel';
import Header from './components/Header';
import Footer from './components/Footer';
import LanguageSwitcher from './components/LanguageSwitcher';

function App() {
  const [role, setRole] = useState(null);

  return (
    <Router>
      <LanguageSwitcher />
      <Header />
      <Routes>
        <Route path="/" element={<LoginPage setRole={setRole} />} />
        <Route path="/dashboard" element={<UserDashboard /> } />
        <Route path="/admin" element={<AdminPanel />} />
        <Route path="/sensor-settings" element={<SensorSettings />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
