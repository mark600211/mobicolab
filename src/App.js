import React from 'react';
import logo from './logo.svg';
import './App.css';
import AboutusComponent from './components/AboutusComponent';
import HeaderComponent from './components/HeaderComponent';
import ServicesComponent from './components/ServicesComponent';


function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <AboutusComponent />
      <ServicesComponent />
    </div>
  );
}

export default App;
