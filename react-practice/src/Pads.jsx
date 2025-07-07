import React from "react"
import pads from "./pads"
import Pad from "./Pad"

export default function Pads() {
    const [statePads, setStatePads] = React.useState(pads)

    function ToggleFunction(id) {
        // map over the pads array, and if the current item has the same id as the one passed to this function, then flip its "on" value
        setStatePads(prev => [...prev, {...prev[id], on: !prev[id].on}])
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