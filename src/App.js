import React, {Component} from 'react';
import './App.css'; // Empty
import {Grid, Navbar, Jumbotron, Button} from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar inverse fixedTop>
          <Grid>
            <Navbar.Header>
              <Navbar.Brand>
                <a href="/">REACT (with Bootstrap)</a>
              </Navbar.Brand>
            </Navbar.Header>
            <Button
              className="pull right"
              bsStyle="primary"
              bsSize="xsmall"
              href="http://react-bootstrap.github.io/components.html"
              target="_blank">
              View React Bootstrap Docs
            </Button>
          </Grid>
        </Navbar>
        <Jumbotron></Jumbotron>
      </div>
    );
  }
}

export default App;
