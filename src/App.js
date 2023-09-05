import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import Home from './components/Home';

function App() {
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentPage, setCurrentPage] = useState('login');

  const handleLogin = (isAdmin) => {
    setIsAdmin(isAdmin);
    setIsLoggedIn(true);
    setCurrentPage('home');
  };

  const handleLogout = () => {
    setIsAdmin(false);
    setIsLoggedIn(false);
    setCurrentPage('login');
  };

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      {isLoggedIn && currentPage === 'home' && (
        <Home isAdmin={isAdmin} onLogout={handleLogout} onNavigate={handleNavigate} />
      )}
      {(!isLoggedIn || currentPage === 'login') && (
        <LoginForm onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;