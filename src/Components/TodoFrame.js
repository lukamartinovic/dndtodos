import React, {Component} from 'react';
import Todo from './Todo';
import { DropTarget } from 'react-dnd';

//TODO: OVDE JE PROBLEM

const frameTarget = {
    drop(props, monitor, component) {
        console.log(monitor.getItem())
        console.log(props)
        console.log(component)
    }
};

function collect(connect, monitor) {
    return {
        connectDropTarget: connect.dropTarget(),
        isOver: monitor.isOver()
    };
}

const ItemTypes = {
    TODO: "todo"
};

class TodoFrame extends Component {
    render() {
        const {text, id, done, checkTodo, removeTodo, swapTodos, connectDropTarget, isOver} = this.props;

        return connectDropTarget(
            <div style={{border: isOver? '1px solid black' : ""}}>
                <Todo text={text} id={id} removeTodo={removeTodo} done={done} checkTodo={checkTodo} swapTodos={swapTodos}/>
            </div>
        )
    }
}

export default DropTarget(ItemTypes.TODO, frameTarget, collect)(TodoFrame);
