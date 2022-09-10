import React, {useState} from "react";

const postStyle = {
    frame: {
        border: "2px solid black"
    }
}


function CompleteCard(props) {
const [isShow, setIsShow]=useState(false);
    return (
        <div style={postStyle.frame} onClick={() => setIsShow(!isShow)}>

            <p>{props.name}</p>
            <p>{props.phone}</p>

            {isShow&&
                <div>
                    <p>{props.name}</p>
                    <p>{props.phone}</p>
                </div>}

        </div>
    )
}

export default CompleteCard;