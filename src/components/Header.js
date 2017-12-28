import React from 'react';
import {Navbar, Button} from 'react-bootstrap';

const Header = () => {
    return (
        <Navbar>
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
        </Navbar>
    );
};

export default Header;