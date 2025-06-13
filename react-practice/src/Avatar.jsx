import Header from "./AvatarHeader"
import Body from "./AvatarBody"
import React from "react"

function Avatar() {
    const [username, setUsername] = React.useState("Joe")

    return (
        <>
            <Header userName={username} />
            <Body userName={username} />
        </>
    )
}

export default Avatar