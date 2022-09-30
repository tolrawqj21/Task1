import React, {useState} from "react";
import {useDispatch} from "react-redux";
import {connect} from "react-redux";
import {bindActionCreators} from "redux";


const Todoinput = () => {
    const dispatch = useDispatch();
    const [newTodo, setNewTodo] = useState('')
    const handlerChange = event => setNewTodo(event.target.value);
    const handlerClick = () => dispatch({
        type: 'ADD_TODO',
        payload: {
            label: newTodo,
            id: Math.ceil(Math.random() * 100),
        }
    })


    return (
        <>
            <input value={newTodo} onChange={handlerChange} type="text"/>
            <br/>
            <br/>
            <button onClick={handlerClick}>Add to do</button>
        </>
    )
};


export default Todoinput;