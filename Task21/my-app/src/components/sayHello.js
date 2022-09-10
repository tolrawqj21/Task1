import React from "react";


// function SayHelloText() {
//     return (
//         <div >
//             <h1>Hello friends</h1>
//             <h2>Now {new Date().toLocaleTimeString()}.</h2>
//         </div>
//     );
// }


class SayHelloText extends React.Component {
    render() {
        return (
            <div >
                <h1>Hello friends</h1>
                <h2>Now {new Date().toLocaleTimeString()}.</h2>
            </div>
        )
    }
}


export default SayHelloText;

