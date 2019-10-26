import React from 'react';
import logo from './logo.svg';
import './App.css';
import ServicesComponent from './components/ServicesComponent';
import HeaderComponent from './components/HeaderComponent';

function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <ServicesComponent />
    </div>
  );
}

export default App;
