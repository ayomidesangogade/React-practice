import Globe from "../images/globe.png"

function Header() {
    return (
        <header>
            <img src={Globe} alt="globe"/>
            <h1>Travel Journal</h1>
        </header>
    )
}

export default Header