import './App.css';
import React from "react";
import Todoinput from "./Components/TodoInput";
import Todos from "./Components/Todos";
import CounterTodo from "./Components/CounterTodo";


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <CounterTodo/>
                <br/>
                <Todoinput/>
                <br/>
                <Todos/>
            </header>
        </div>
    );
}

export default App;
