import React, {Component} from 'react';
import { DragSource } from 'react-dnd';

class Todo extends Component {

    state = {checked: false};

    handleCheck = () => this.setState({checked: !this.state.checked});

    renderNote() {

        const {checked} = this.state;
        const {text, id, removeTodo, connectDragSource, isDragging} = this.props;

        return connectDragSource(
        <div className="todo" style={{opacity: isDragging? 0.2 : 1}}>
            <label className={checked ? "checked": "unchecked"}>
                <input className="checkbox" type="checkbox" onChange={this.handleCheck} checked={checked} />
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
