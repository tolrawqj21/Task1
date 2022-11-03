import React, {ReactElement} from "react";

interface ComponentsI {
    text: string;
    numberI: number;
}


function TextNumber({text, numberI}: ComponentsI): ReactElement {
    const arr = [];
    for (let i = 0; i < numberI; i++) {
        arr.push(<p>{text}</p>);
    }
    return (
        <>
            <div>
                {arr}
            </div>
        </>
    )
}

export default TextNumber;