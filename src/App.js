import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  const [number,setNumber] = useState(0);

  const someFunction = () => {
    console.log(`someFunc: number: ${number}`);
    return;
  }
  return (
   <div>
    <input type="number" value={number}
    onChange={(e)=> setNumber(e.target.value)} />
    <br />
    <button onClick={someFunction}>Call someFunc</button>
   </div>
  );
}

export default App;
