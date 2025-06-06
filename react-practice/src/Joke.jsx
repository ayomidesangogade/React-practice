import React from "react"
import "./Joke.css"

export default function Joke(props) {
    const [isShown, setIsShown] = React.useState(false)

    return (
        <div>
            <h3>{props.setup}</h3>
            {isShown ? <p>{props.punchline}</p> : null}
            <button onClick={() => setIsShown(prev => !prev)}>{isShown ? "Hide" : "Show"} punchline</button>
            <hr />
        </div>
    )
}