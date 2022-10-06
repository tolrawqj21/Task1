import {useState} from "react";
import "./App.css";
import TodoItem from "./components/TodoItem";
import {useSelector, useDispatch} from "react-redux";
import {addTodo, removeTodo} from "./ToDoSlice"
import InputButton from "./components/inputButton";
import Todos from "./components/Todos";
import Counter from "./components/Counter";


function App() {

    return (
        <div className="App">
            <div className="App-header">
                <h2> To do list</h2>
                <Counter/>
                <InputButton/>
                <Todos/>
            </div>

        </div>
    );
}

export default App;