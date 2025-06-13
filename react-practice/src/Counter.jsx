import React from "react"
import Count from "./components/Count"

function Counter() {
    const [count, setCount] = React.useState(0)

    function add() {
        setCount(prevCount => prevCount + 1)
    }

    function substract() {
        setCount(prevCount => prevCount - 1)
    }

    return (
            // <main>
    //   <h1 className="title">Is state important to know?</h1>
    //   <button className="value" onClick={handleClick}>{count}</button>
    // </main>
    <main className="container">
    <h1>How many times will Bob say "state" in this section?</h1>
    <div className="counter">
        <button className="minus" onClick={substract} aria-label="Decrease count">–</button>
        <Count count={count} />
        <button className="plus" onClick={add} aria-label="Increase count">+</button>
    </div>
    </main>
    )
}

export default Counter