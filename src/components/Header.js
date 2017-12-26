import React from 'react';
import {Navbar, Button, Nav, NavItem} from 'react-bootstrap';

const Header = () => {
    return (
        <div>
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
            <Nav bsStyle="pills">
                <NavItem disabled>Learning React With Create-React-App</NavItem>
                <NavItem
                    href="https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-1-a12e1833fdc"
                    target="_blank">
                    Part 1
                </NavItem>
                <NavItem
                    href="https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-2-3ad99f38b48d"
                    target="_blank">
                    Part 2
                </NavItem>
                <NavItem
                    href="https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-3-322447d14192"
                    target="_blank">
                    Part 3
                </NavItem>
                <NavItem
                    href="https://medium.com/in-the-weeds/learning-react-with-create-react-app-part-4-9f843c8c1ccc"
                    target="_blank">
                    Part 4
                </NavItem>
            </Nav>
        </div>
    );
};

export default Header;