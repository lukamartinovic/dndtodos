import React, {Component} from 'react';

class Todo extends Component {

    state = {checked: false};

    handleCheck = () => this.setState({checked: !this.state.checked});

    renderNote() {

        const {checked} = this.state;
        const {text, id, removeTodo} = this.props;

        return(
        <div className="todo">
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

export default Todo;
