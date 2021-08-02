import React from 'react';
import './App.css';
import Header from '../src/components/header/header.js';
import Routes from './routes';

const App = ()=> {
 
  return (
    <div className="App">
      <Header/>
      <Routes/>
    </div>
  );
}


export default App;
