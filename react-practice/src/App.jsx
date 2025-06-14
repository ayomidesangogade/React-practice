import Counter from "./Counter"
import Ternary from "./Ternary"
import Favourite from "./Favourite"
import Contact from "./ContactCard"
import Form from "./Form"
import Joke from "./Joke"
import Jokes from "./Jokes"
import Conditional from "./CondRenderChallenge"
import Avatar from "./Avatar"
import Pads from "./Pads.jsx"

function App() {
  const data = Jokes.map(joke => <Joke key={joke.id} {...joke} />)
  return (
    // <>
    //   {data}
    // </>
    <Pads />
  )
}

export default App
