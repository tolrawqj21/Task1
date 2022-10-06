import React from "react";
import Todoitem from "./Todoitem";
import {removeTodo} from "./store/toDoSlice";
import {useDispatch, useSelector} from "react-redux";


const Todos=()=>{


    const count = useSelector((state) => state.todo.count);
    const todos = useSelector((state) => state.todo.todos);

    const dispatch = useDispatch();

    const handleTodoDone = (id) => {
        dispatch(removeTodo(id));
    };

    return(
        <div className="Todos">
            {count > 0 &&
                todos.map((todo) => (
                    <Todoitem
                        key={todo.id}
                        text={todo.text}
                        id={todo.id}
                        onCheck={handleTodoDone}
                    />
                ))}
            {count === 0 && <p>No todos</p>}
        </div>
    )
}

export default Todos;