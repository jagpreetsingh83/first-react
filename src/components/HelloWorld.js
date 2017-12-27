import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
import './HelloWorld.css';

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greeting: 'Hello',
            translation: 'Frenchify!'
        }
        this.frenchify = this
            .frenchify
            .bind(this);
        this.deleteGreeting = this
            .deleteGreeting
            .bind(this);
    }
    frenchify() {
        if (this.state.greeting === 'Hello') {
            this.setState({greeting: 'Bonjour', translation: 'Englishify!'});
        } else {
            this.setState({greeting: 'Hello', translation: 'Frenchify!'});
        }
    }
    deleteGreeting(e) {
        this
            .props
            .removeGreeting(this.props.name);
    }
    render() {
        return (
            <div className="HelloWorld">{this.state.greeting} {this.props.name}!
                <Button
                    onClick={this.deleteGreeting}
                    bsStyle="danger"
                    bsSize="xsmall"
                    className="pull-right delete">Delete</Button>
                <Button
                    onClick={this.frenchify}
                    bsStyle="primary"
                    bsSize="xsmall"
                    className="pull-right french">{this.state.translation}</Button>
            </div>
        );
    }
}

export default HelloWorld;
