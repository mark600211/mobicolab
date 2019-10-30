import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutusComponent from './components/AboutusComponent';
import HeaderComponent from './components/HeaderComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <AboutusComponent />
    </div>
  );
}

export default App;
