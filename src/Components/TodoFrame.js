import React, {Component} from 'react';
import Todo from './Todo';
import { DropTarget } from 'react-dnd';

class TodoFrame extends Component {
    render() {
        const {text, id, done, checkTodo, removeTodo, connectDropTarget, isOver} = this.props;

        return connectDropTarget(
            <div style={{border: isOver? '1px solid black' : ""}}>
                <Todo text={text} id={id} removeTodo={removeTodo} done={done} checkTodo={checkTodo}/>
            </div>
        )
    }
}

const frameTarget = {
    drop(props, monitor) {
        const {id, swapTodos} = props;
        const id1 = monitor.getItem().todoId;
        swapTodos(id, id1);
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

export default DropTarget(ItemTypes.TODO, frameTarget, collect)(TodoFrame);
