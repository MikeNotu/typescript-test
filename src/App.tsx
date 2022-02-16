// import React, {useState} from 'react'
// import List from './components/List'
import './App.scss';
// import AddToList from './components/AddToList';
import SideBarMenu from './components/SideBarMenu';


// export interface IState {
//   people: {
//     name: string
//     age: number
//     url: string
//     note?: string
//   }[]
// }

 function App() {

  // const [people,setPeople] = useState<IState["people"]>([{
  //   name: "LeBron James",
  //   url:"https://a.espncdn.com/combiner/i?img=/i/headshots/nba/players/full/1966.png",
  //   age:36,
  //   note:"Allergic to staying in the same team"
  // }])



  return (
    <div className='App'>
      {/* <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} /> */}

      <h1>Test</h1>
      <SideBarMenu/>

    </div>
  )
}

export default App;
