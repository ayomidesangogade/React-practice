import React from "react"

function Pad(props) {
    const [on, setOn] = React.useState(props.on)

    function ChangeColour() {
        setOn(prev => !prev)
    }
    return (
        <button 
            style={{backgroundColor: `${props.color}`}} 
            className={on ? "on" : undefined} 
            onClick={() => props.toggle(props.id)}
        >
        </button>
    )
}

export default Pad