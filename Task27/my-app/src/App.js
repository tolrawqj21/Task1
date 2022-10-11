import './App.css';
import {Formik, Form, Field, ErrorMessage} from 'formik' ;
import React from "react";
import BasicForm from "./components/basicForm";

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <BasicForm/>
            </header>
        </div>
    );
}

export default App;
