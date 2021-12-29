import React, {useState} from 'react'
import List from './components/List'
import './App.css';
import AddToList from './components/AddToList';

 function App() {

  interface IState {
    people: {
      name: string
      age: number
      url: string
      note?: string
    }[]
  }

  const [people,setPeople] = useState<IState["people"]>([{
    name: "LeBron James",
    url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
    age:36,
    note:"Allergic to staying in the same team"
  }])


  return (
    <div className='App'>
      <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList/>
    </div>
  )
}

export default App;
