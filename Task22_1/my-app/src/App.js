import './App.css'
import React from "react";
import axios from "axios";
import RickMortyDemo from "./Components/RickMortyApiDemo";
import RickandMortyCard from "./Components/CardRickMorty";
import {useState, useEffect, useRef} from 'react';
import UseGetCharacter from "./Hooks/useGetCharacter";


function App() {


    return (
        <div className="App">
            <header className="App-header">
                <br/>
                <RickMortyDemo></RickMortyDemo>
            </header>
        </div>
    );
}

export default App;
