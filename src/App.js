import React, {Component} from 'react';
import './App.css';
import {createStore, applyMiddleware} from 'redux';
import {logger} from 'redux-logger';
import {Provider} from 'react-redux'
import rootReducer from './Reducers/index';
import Todos from './Components/Todos'
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';

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

export default DragDropContext(HTML5Backend)(App);
