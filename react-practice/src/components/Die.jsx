function Die(props) {
    return (
        <button 
            className="die" 
            style={{backgroundColor: props.isHeld ? "#59E391" : "white"}}
            onClick={props.hold}
        >
            {props.value}
        </button>
    )
}

export default Die