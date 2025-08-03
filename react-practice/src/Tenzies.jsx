import React from "react"
import { nanoid } from "nanoid"
import Confetti from "react-confetti"
import { useWindowSize } from "react-use"
import Die from "./components/Die"

function Tenzies() {
    const [dice, setDice] = React.useState(() => generateNewDice())

    const gameWon = (dice.every(die => die.isHeld) && dice.every(die => die.value === dice[0].value))

    function generateNewDice() {
        return Array(10)
            .fill(0)
            .map(() => ({
                value: Math.ceil(Math.random()*6),
                isHeld: false,
                id: nanoid()
            }))
    }

    const refDice = React.useRef(null)

    React.useEffect(() => {
        if(gameWon)
            refDice.current.focus()
    }, [gameWon])

    function rollDice() {
        if (!gameWon)
            setDice(prev => prev.map(element => (element.isHeld === false) ? {...element, value: Math.ceil(Math.random()*6)} : element))
        else
            setDice(generateNewDice())
    }

    function holdDice(id) {
        setDice(prev => prev.map(element => (element.id === id) ? {...element, isHeld: !element.isHeld} : element))
    }

    const diceElements = dice.map((die, index) => <Die key={index} value={die.value} isHeld={die.isHeld} hold={() => holdDice(die.id)} />)

    const { width, height } = useWindowSize()

    return (
        <main className="container">
            {gameWon && <Confetti
                width={width}
                height={height}
            />}
            <div className="game-box">
            <h1 className="title">Tenzies</h1>
            <p className="instruction">
                Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
            </p>
            <div className="dice-grid">
                {diceElements}
            </div>
            <button className="roll-button" onClick={rollDice} ref={refDice}>{gameWon ? "New Game" : "Roll"}</button>
            </div>
        </main>
    )
}

export default Tenzies;