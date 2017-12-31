import React from 'react';
import ReactDOM from 'react-dom';

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/css/bootstrap-theme.css';

import registerServiceWorker from './registerServiceWorker';

const myReducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state;
    }
};

// Redux Store
const createStore = (reducer) => {

    let state;
    let listeners = [];

    const getState = () => state;
    const dispatch = (action) => {
        // new state (call reducer to determine the new state on the basis of action)
        state = reducer(state, action);
        listeners.forEach(listener => {
            listener();
        });
    };
    const subscribe = (listener) => {
        listeners.push(listener);
        return () => listeners.filter(l => l !== listener);
    };

    dispatch({});

    return {getState, dispatch, subscribe};
};

const store = createStore(myReducer);

const DisplayCounter = ({value, onIncrement, onDecrement}) => (
    <div>
        <h1>{value}</h1>
        <button onClick={onIncrement}>+</button>
        <button onClick={onDecrement}>-</button>
    </div>
);
const Counter = () => {
    return <DisplayCounter
        value={store.getState()}
        onIncrement={() => store.dispatch({type: 'INCREMENT'})}
        onDecrement={() => store.dispatch({type: 'DECREMENT'})}/>
};

const render = () => {
    ReactDOM.render(
        <Counter/>, document.getElementById('root'))
};

store.subscribe(render);

render();

registerServiceWorker();