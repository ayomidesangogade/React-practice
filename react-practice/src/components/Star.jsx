import starFilled from "../images/star-filled.png"
import starEmpty from "../images/star-empty.png"

export default function Star(props) {
    return (
        <button
            onClick={props.handleClick}
            aria-pressed={props.status}
            aria-label={props.status ? "Remove from favorites" : "Add to favorites"}
            className="favorite-button"
        >
            <img
                src={props.status ? starFilled : starEmpty}
                alt={props.status ? "filled star icon" : "empty star icon"}
                className="favorite"
            />
        </button>
    )
}