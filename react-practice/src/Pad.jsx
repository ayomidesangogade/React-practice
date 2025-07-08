import React from "react"

function Pad(props) {

    // function ChangeColour() {
    //     setOn(prev => !prev)
    // }
    return (
        <button 
            style={{backgroundColor: `${props.color}`}} 
            className={props.on ? "on" : undefined} 
            onClick={() => props.toggle(props.id)}
        >
        </button>
    )
}

export default Pad