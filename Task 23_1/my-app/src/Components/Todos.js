import React from "react";
import {useDispatch, useSelector} from "react-redux";


const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector(state => state.todos);
    const handleClick = id => dispatch({
        type: 'DELETE_TODO',
        payload: id,
    });
    if (!todos || !todos.length) {
        return <p> THE LIST IS EMPTY</p>
    }
    return (
        <ul>
            {todos.map(todo => <li onClick={() => handleClick(todo.id)}>{todo.label}</li>)}
        </ul>
    )
};


export default Todos;