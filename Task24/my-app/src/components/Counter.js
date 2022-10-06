import React from "react";
import {useDispatch, useSelector} from "react-redux";
import ToDoSlice from "./store/toDoSlice";
import {useState} from "react";

const Counter = () => {
    const dispatch = useDispatch();
    const counter = useSelector(state => state.todo.count);
    return (
        <div>
            <h2> Counter: {counter}</h2>
        </div>
    )
}

export default Counter;