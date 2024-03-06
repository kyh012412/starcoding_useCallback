import './App.css';
import { useCallback, useEffect, useState } from 'react';
import Box from './Box';

function App() {
  const [size,setSize] = useState(1000);

  const createBoxStyle = () =>{
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    };
  }
 
  return (
    <div>
      <input
        type='number'
        value={size}
        onChange={(e)=>setSize(e.target.value)} />
        <Box createBoxStyle={createBoxStyle}/>
    </div>
  );
}

export default App;
