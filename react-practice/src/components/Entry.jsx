import Marker from "../images/marker.png"

function Entry(props) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img
                    src={props.img.src}
                    alt={props.img.alt}
                    className="main-image"
                />
            </div>
            <div className="info-container">
                <img
                    src={Marker}
                    alt="marker"
                    className="marker"
                />
                <span className="country">{props.country}</span>
                <a href={props.googleMapsLink}>View on Google Maps</a>
                <h2 className="entry-title">{props.title}</h2>
                <p className="trip-dates">{props.dates}</p>
                <p className="entry-text">{props.text}</p>
            </div>
        </article>
    )
}

export default Entry