import React, {Component} from 'react';
import './App.css'; // Empty
import Header from './components/Header';
import OrderGrid from './components/OrderGrid';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <OrderGrid/>
      </div>
    )
  }
}

export default App;
