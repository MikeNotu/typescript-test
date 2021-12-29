import React, {useState} from 'react'

 function App() {

  interface IState {
    people: {
      name: string
      age: number
      url: string
      note?: string
    }
  }

  const [people,setPeople] = useState<{age:number, name: string}[]>([])

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
