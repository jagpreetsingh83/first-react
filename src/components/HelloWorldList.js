import React, {Component} from 'react';
import HelloWorld from './HelloWorld';
import AddGreeter from './AddGreeter';
import './HelloWorldList.css';

class HelloWorldList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            greetings: ['Jim', 'Sally', 'Bender']
        };
        this.addGreeting = this
            .addGreeting
            .bind(this);
        this.removeGreeting = this
            .removeGreeting
            .bind(this);
    }
    renderGreetings() {
        return this
            .state
            .greetings
            .map(name => <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting}/>);
    }
    addGreeting(newName) {
        this.setState({
            greetings: [
                newName, ...this.state.greetings
            ]
        });
    }
    removeGreeting(removeName) {
        this.setState({
            greetings: this
                .state
                .greetings
                .filter(name => name !== removeName)
        });
    }
    render() {
        return (
            <div className="HelloWorldList">
                <AddGreeter addGreeting={this.addGreeting}/> {this.renderGreetings()}
            </div>
        );
    }
}

export default HelloWorldList;