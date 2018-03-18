import React, {Component} from 'react';
import { DragSource } from 'react-dnd';

class Todo extends Component {

    handleCheck = () => console.log("poop");

    renderNote() {

        const {text, id, done, removeTodo, checkTodo, connectDragSource, isDragging} = this.props;

        return connectDragSource(
        <div className="todo" style={{opacity: isDragging? 0.2 : 1}}>
            <label className={done ? "checked": "unchecked"}>
                <input className="checkbox" type="checkbox" onClick={checkTodo(id)}/>
            </label>

            <span>{text}</span>
            <label className="removelabel"><button className="removebutton" onClick={removeTodo(id)}>remove</button></label>
        </div>
        )

    }

    render() {
        return (<div>{this.renderNote()}</div>)
    }
}

const ItemTypes = {
    TODO: "todo"
};

const todoSource = {
    beginDrag(props) {
        return {todoId: props.id};
    }
};

function collect(connect, monitor) {
    return{
        connectDragSource: connect.dragSource(),
        isDragging: monitor.isDragging()
    }
}

export default DragSource(ItemTypes.TODO, todoSource, collect)(Todo);
