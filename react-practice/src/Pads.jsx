import React from "react"
import pads from "./pads"
import Pad from "./Pad"

export default function Pads() {
    const [statePads, setStatePads] = React.useState(pads)

    function ToggleFunction(id) {
        
        setStatePads(prevPads =>
            prevPads.map(pad =>
            pad.id === id ? { ...pad, on: !pad.on } : pad
            )
        )
    }

    const buttonElements = statePads.map(element => <Pad key={element.id} id={element.id} color={element.color} on={element.on} toggle={ToggleFunction} />)
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}