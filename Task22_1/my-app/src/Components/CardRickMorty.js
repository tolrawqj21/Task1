import React from "react";

const cardStyle = {
    frame: {
        border: "2px solid green",
        margin: '10px'


    },
    image: {
        width: '200px'
    }
}

function RickandMortyCard(props) {
    return (
        <div style={cardStyle.frame}>
            <p>{props.char.name}</p>
            <img src={props.char.image}/>
        </div>
    )
}

export default RickandMortyCard;