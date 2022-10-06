import React from "react";
import {useState} from "react";
import {addTodo} from "./store/toDoSlice";
import {useDispatch} from "react-redux";
import {connect} from 'react-redux'

class InputButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            input: ''
        }
        this.inputHandler = this.inputHandler.bind(this);
        this.handleAddTodo = this.handleAddTodo.bind(this);
    }

    inputHandler(e) {
        this.setState({input: e.target.value});
    }

    handleAddTodo(e) {
        e.preventDefault();
        const {addTodo} = this.props;
        addTodo(this.state.input);
    };

    render() {
        return (
            <div>
                <form className="App-form" onSubmit={this.handleAddTodo}>
                    <input type="text" onInput={this.inputHandler}/>
                    <button type="submit">Добавить</button>
                </form>
            </div>
        );
    }
}

export default connect(null, {addTodo})(InputButton);

