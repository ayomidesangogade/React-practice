import React from "react"
import avatar from "./images/user.png"
import Star from "./components/Star"

export default function Contact() {
    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (212) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: true
    })
    
    function toggleFavorite() {
        setContact(prevFavorite => {
            return (
                {
                    ...prevFavorite,
                    isFavorite: !prevFavorite.isFavorite
                }
            )
        })
    }

    return (
        <main>
            <article className="card">
                <img
                    src={avatar}
                    className="avatar"
                    alt="User profile picture of John Doe"
                />
                <div className="info">
                    <Star 
                        handleClick={toggleFavorite}
                        status={contact.isFavorite} 
                    />
                    <h2 className="name">
                        {contact.firstName} {contact.lastName}
                    </h2>
                    <p className="contact">{contact.phone}</p>
                    <p className="contact">{contact.email}</p>
                </div>

            </article>
        </main>
    )
}