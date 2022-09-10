import React from "react";
import SayHelloText from './components/sayHello'
import "./App.css"
import card from "./components/card";
import {BrowserRouter, Router, Route, Link, Routes} from "react-router-dom";
import {useState, useEffect, useRef} from 'react';
import CompleteCard from "./components/card";
import Routee from "./route";
import "./koala-sleeping.svg"

const date = [
    {
        name: 'Jon',
        phone: '+380123456789'

    },
    {
        name: 'Alice',
        phone: '+380123123123'
    },
    {
        name: 'Bob',
        phone: '+380123213543'
    }
];

function App() {
    const click = (index) => {
        console.log('Clicked', index)
    };

    return (
        <header>
            <div className="App">
                <div className="App-header">
                    <BrowserRouter>
                        <Routee></Routee>
                        <Routes>
                            <Route path="/" element={<SayHelloText/>}></Route>
                            <Route path="/card" element={date.map((card, phone) =>
                                <CompleteCard
                                    key={`card-${phone}`}
                                    name={card.name}
                                    phone={card.phone}
                                    index={phone}
                                    click={click}/>
                            )}
                            ></Route>

                        </Routes>
                    </BrowserRouter>
                </div>
            </div>
        </header>
    )
}

export default App;

