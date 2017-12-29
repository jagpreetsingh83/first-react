import React, {Component} from 'react';
import './App.css'; // Empty
import Header from './components/Header';
import Navigation from './components/Navigation';
import Main from './components/Main';
import {Panel, Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Panel>
          <Button
            href="https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf">
            https://medium.com/@pshrmn/a-simple-react-router-v4-tutorial-7f23ff27adf
          </Button>
        </Panel>
        <Navigation/>
        <Main/>
      </div>
    );
  }
}

export default App;