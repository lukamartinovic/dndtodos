import React, {Component} from 'react';
import Todo from './Todo';
import { DropTarget } from 'react-dnd';


const frameTarget = {
    drop(props, monitor) {
        console.log(props);

        const id1 = monitor.getItem().todoId;
        const id2 = props.id;
        props.swapTodos(id1, id2);
        console.log("poop")

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
