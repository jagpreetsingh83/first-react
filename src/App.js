import React from 'react';
import './App.css'; // Empty
import Header from './components/Header';
import HelloWorldList from './components/HelloWorldList';

const App = () => {
  return (
    <div>
      <Header/>
      <HelloWorldList name="Jags"/>
    </div>
  );
}

export default App;