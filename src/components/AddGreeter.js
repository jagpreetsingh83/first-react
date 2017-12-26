import React, {Component} from 'react';
import {FormControl, Button} from 'react-bootstrap';
import './AddGreeter.css';

class AddGreeter extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greetingName: ''
        };
        this.handleUpdate = this
            .handleUpdate
            .bind(this);
        this.addGreeting = this
            .addGreeting
            .bind(this);
    }
    handleUpdate(e) {
        this.setState({greetingName: e.target.value});
    }
    addGreeting() {
        this
            .props
            .addGreeting(this.state.greetingName);
        this.setState({greetingName: ''});
    }
    render() {
        return (
            <div className="AddGreeter">
                <FormControl
                    type="text"
                    placeholder="Enter a name"
                    value={this.state.greetingName}
                    onChange={this.handleUpdate}/><br/>
                <Button onClick={this.addGreeting} bsStyle="success">Add</Button>
            </div>
        );
    }
}

export default AddGreeter;