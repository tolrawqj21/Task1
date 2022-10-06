import {useState} from "react";
import "./App.css";
import Todoitem from "./components/Todoitem";
import {useSelector, useDispatch} from "react-redux";
import {addTodo,removeTodo} from "./components/store/toDoSlice";
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