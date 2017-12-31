import React, {Component} from 'react';
import './App.css'; // Empty
import Header from './components/Header';
import Source from './components/Source';
import Counter from './components/Counter';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Source/>
        <Counter/>
      </div>
    );
  }
}

export default App;