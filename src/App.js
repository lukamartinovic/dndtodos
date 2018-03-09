import React, {Component} from 'react';
import './App.css';
import {createStore, compose, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux'
import rootReducer from './Reducers/index';
import Todos from './Components/Todos'

const todos =
    [{text: "Wake up"},
    {text: "Make coffee"},
    {text: "Drink coffee"}];

const initialState = {todos};
const store = createStore(rootReducer, initialState, applyMiddleware(logger));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Todos/>
            </Provider>
        );
    }
}

export default App;
