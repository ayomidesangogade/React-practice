import React from "react"
import pads from "./pads"

export default function Pads() {
    const [statePads, setStatePads] = React.useState(pads)

    const buttonElements = statePads.map(element => <button key={element.id} style={{backgroundColor: `${element.color}`}}></button>)
    return (
        <main>
            <div className="pad-container">
                {buttonElements}
            </div>
        </main>
    )
}