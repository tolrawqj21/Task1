import React from "react";
import {useDispatch, useSelector} from "react-redux";
import '../App.css'


const CounterTodo= ()=>{
    const dispatch = useDispatch();
    const counter = useSelector(state => state.counter);
    return(
        <div className='amount'>
            <h1>
                Tasks Add:{counter}
            </h1>
        </div>
    )
}
export default CounterTodo;