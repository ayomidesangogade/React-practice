import Counter from "./Counter"
import Ternary from "./Ternary"
import Favourite from "./Favourite"
import Contact from "./ContactCard"
import Form from "./Form"
import Joke from "./Joke"
import Jokes from "./Jokes"
import Conditional from "./CondRenderChallenge"

function App() {
  const data = Jokes.map(joke => <Joke key={joke.id} {...joke} />)
  return (
    // <>
    //   {data}
    // </>
    <Conditional />
  )
}

export default App
