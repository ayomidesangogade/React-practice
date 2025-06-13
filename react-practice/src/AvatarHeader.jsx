import avatar from "./Icon/user.png"

export default function Header(props) {
    return (
        <header>
            <img src={avatar} />
            <p>{props.userName}</p>
        </header>
    )
}
