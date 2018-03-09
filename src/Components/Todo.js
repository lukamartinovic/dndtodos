import React, {Component} from 'react';

class Todo extends Component {

    constructor(props) {
        super(props);
        this.state = {checked: false};

        this.handleCheck = this.handleCheck.bind(this);
    }

    handleCheck() {
        this.setState({checked: !this.state.checked});
    }

    renderNote() {
        return <div className="Todo"><input type="checkbox" onChange={this.handleCheck} checked={this.state.checked} /><span>{this.props.text}</span>
            <button onClick={() => {this.props.removeTodo(this.props.id)}}>♲</button>
        </div>

    }

    render() {
        return (<div>{this.renderNote()}</div>)
    }
}

export default Todo;
