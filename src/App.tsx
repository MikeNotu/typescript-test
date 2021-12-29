import React, {useState} from 'react'

 function App() {

  const [number,setNumber] = useState<number|string>(5);

  const changeNumber = () => {
    setNumber(10);
  }


  return (
    <div>
      <h1>Test</h1>
    </div>
  )
}

export default App;
