import axios from 'axios';
import React from 'react';
import {HttpClientContext} from "./HttpContext";
import RickandMortyCard from "../Components/CardRickMorty";


class HttpClient extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            characterList: [],
            currentCharacter: {}
        };

        this.getCharacterList = this.getCharacterList.bind(this);
    }

    getCharacterList() {
        axios.get('character').then(data => {
            this.setState({characterList: data.data});
        })
    }


    render() {
        return (
            <>
                <HttpClientContext.Provider value={this.httpContext}>
                    {this.props.children}
                </HttpClientContext.Provider>
            </>

        );
    }

    get httpContext() {
        return {
            getCharacterList: this.getCharacterList,
            characterList: this.state.characterList,
            currentCharacter: this.state.currentCharacter
        }
    }
}

export default HttpClient;