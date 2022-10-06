import React from "react";
import {useState} from "react";
import {addTodo} from "../ToDoSlice";
import {useDispatch, useSelector} from "react-redux";

const InputButton = () => {

    const dispatch = useDispatch();
    const [input, setInput] = useState("");

    const handleAddTodo = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
    };
    return (
        <form className="App-form" onSubmit={handleAddTodo}>
            <input type="text" onInput={(e) => setInput(e.target.value)}/>
            <button type="submit">Добавить</button>
        </form>
    )
}

export default InputButton;