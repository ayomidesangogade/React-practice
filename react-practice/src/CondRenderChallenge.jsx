import React from "react"

function Conditional () {
    const [unreadMessages, setUnreadMessages] = React.useState(["a"])

    return (
        <>
            {unreadMessages.length === 0 ? <p>You're all caught up!</p> : unreadMessages.length === 1 ? <h1>You have {unreadMessages.length} unread message!</h1> : unreadMessages.length > 0 ? <h1>You have {unreadMessages.length} unread messages!</h1> : <p>You have no unread messages!</p>}
        </>
    )
}

export default Conditional