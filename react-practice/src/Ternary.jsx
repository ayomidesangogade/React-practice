import React from "react"

function Ternary() {
    const [isGoingOut, setIsGoingOut] = React.useState(false)
    function change() {
        setIsGoingOut(prev => !prev)
    }
    return (
        <main>
            <h1 className="title">Do I feel like going out tonight?</h1>
            <button className="value" onClick={change} aria-label={"Current answer is "+(isGoingOut ? "Yes" : "No")+". Click to change it."}>{isGoingOut ? "Yes" : "No"}</button>
        </main>
    )
}

export default Ternary