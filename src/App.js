import React, {Component} from 'react';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux'
import rootReducer from './Reducers/index';
import Todos from './Components/Todos'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import { composeWithDevTools } from 'remote-redux-devtools';

const todos =
    [{text: "Wake up", id: 0, done: true},
    {text: "Make coffee", id: 1, done: false},
    {text: "Drink coffee", id: 2, done: false}];

const initialState = {todos};
const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(logger)));

class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <Todos/>
            </Provider>
        );
    }
}

export default DragDropContext(HTML5Backend)(App);
