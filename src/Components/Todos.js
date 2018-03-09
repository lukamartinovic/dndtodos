import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo'

class Todos extends Component {

    constructor(props) {
        super(props);
        this.state = {value: ""};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    renderTodos() {
        let todos = this.props.todos, i = 0;
        return todos.map((note) => {
            return (<Todo text={note.text} key={i} id={i++} removeTodo={this.props.removeTodo}/>)
        })
    }

    handleSubmit(e) {
        e.preventDefault();

        if (this.state.value !== "")
            this.props.addTodo(this.state.value);
        this.setState({value: ""});
    }

    handleChange(e) {
        this.setState({value: e.target.value});
    }

    render() {
        return (
            <div>
                <div><span>Task Manager</span></div>
                <button onClick={(e) => {
                    this.handleSubmit(e)
                }}>+
                </button>
                <input value={this.state.value} onChange={this.handleChange} type="text"/>
                {this.renderTodos()}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {todos: state.todos};
};

const mapDispatchToProps = dispatch => {
    return ({
        addTodo: (text) => {
            dispatch({type: "ADD_TODO", text})
        },
        removeTodo: (index) => {
            dispatch({type: "REMOVE_TODO", index})
        }
    })
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
