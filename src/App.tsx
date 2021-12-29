import React, {useState} from 'react'

 function App() {

  const [people,setPeople] = useState([
    {
    name: "LeBron James",
    url: "",
    age: 36,
    note: "Allergic to staying on the same team"
  },
  {
    name: "Kobe Bryant",
    url: "",
    age: 36
  },
])

const element = people.map(jugador=>{
  return(
  <p>{jugador.name}</p>
)})


  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
      {element}
      <h3>hola</h3>
      <button></button>

    </div>
  )
}

export default App;
