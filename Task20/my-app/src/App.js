import logo from './koala-sleeping.svg';
import './App.css';
import React from "react";



const imageStyle = {
    image: {
        width: '700px',
    },
    frame: {
        border: "2px solid white"
    }
}

//Функциональный компонент с приветствием и картинкой
function ImageText(props) {
    return (
        <div style={imageStyle.frame}>
            <img src={props.image} style={imageStyle.image} alt="logo"/>
            <p>{props.text}</p>
            <h4>Now {new Date().toLocaleDateString()}.</h4>
            {props.children}
        </div>
    );
}

//Классовый компонент, принимающий пропсы
class Koala extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return
        <div style={imageStyle.frame}>
            <img src={this.props.image} style={imageStyle.image} alt="logo"/>
            <p>{this.props.text}</p>
            {this.props.children}
        </div>
    }
}


function App() {
    return (
        <div className="App">
            <header className="App-header">
                <React.Fragment>
                    <ImageText text={'Hello, sleep koala'}
                               image={logo}>
                    </ImageText>

                    <Koala
                        text={ImageText.text}
                        image={ImageText.img}>

                    </Koala>
                </React.Fragment>

            </header>
        </div>
    );

}

export default App;
