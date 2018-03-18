import React, {Component} from 'react';
import {connect} from 'react-redux';
import Todo from './Todo'
import TodoFrame from './TodoFrame';
class Todos extends Component {

    state = {value: ""};

    renderTodos = () => {
        const {removeTodo, checkTodo, swapTodos, todos} = this.props;
        return todos.map((note, i) => <TodoFrame swapTodos={swapTodos} checkTodo={checkTodo} text={note.text} key={i} id={i} removeTodo={removeTodo} done={note.done}/>)
    };

    handleSubmit = (e) => {
        const {value} = this.state;
        e.preventDefault();

        if (value) this.props.addTodo(value);
        this.setState({value: ""});
    };

    handleChange = ({target}) => {
        this.setState({value: target.value});
    };

    render() {
        return (
            <div>
                <div className="taskman"><span>Task Manager</span></div>

                <div className="input"><button className="addButton" onClick={this.handleSubmit}>+</button>
                    <input className="inputBox" placeholder = "Task" value={this.state.value} onChange={this.handleChange} type="text"/>
                </div>

                <div className="todolist">{this.renderTodos()}</div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {todos: state.todos};
};

const mapDispatchToProps = dispatch => ({
        addTodo: (text) => dispatch({type: "ADD_TODO", text}),
        removeTodo: (id) => () => dispatch({type: "REMOVE_TODO", id}),
        swapTodos: (idFirst, idSecond) => () => dispatch({type: "SWAP_TODOS", idFirst, idSecond}),
        checkTodo: (id) => () => dispatch({type: "CHECK", id})
    });

export default connect(mapStateToProps, mapDispatchToProps)(Todos);
