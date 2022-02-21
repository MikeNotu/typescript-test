// import React, {useState} from 'react'
// import List from './components/List'
import './App.scss';
// import AddToList from './components/AddToList';
import SideBarMenu from './components/SideBarMenu';
import { SideBarMenuCard, SideBarMenuItem } from './types/types';
import {FcAdvertising,FcAutomatic,FcChargeBattery} from "react-icons/fc"
import profileImage from "./bill.jpeg"

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

  const items:SideBarMenuItem[] = [
    {
  id:"1",
  label:"Hola",
  icon:FcAdvertising,
  url:"/"
  },
  {
    id:"2",
    label:"Hola",
    icon:FcAutomatic,
    url:"/"
    },
    {
      id:"3",
      label:"Hola",
      icon:FcChargeBattery,
      url:"/"
      },
];

  const card: SideBarMenuCard = {
    id:"card01",
    displayName:"Marcos Rivas",
    title:"Youtuber",
    photoUrl:profileImage,
    url:"/"
  }


  return (
    <div className='App'>
      {/* <h1>People Invited to my Party</h1>
      <List people={people}/>
      <AddToList people={people} setPeople={setPeople} /> */}

      <SideBarMenu items={items} card={card}/>

    </div>
  )
}

export default App;
