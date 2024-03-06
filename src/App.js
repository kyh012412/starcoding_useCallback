import './App.css';
import { useCallback, useContext, useEffect, useState } from 'react';
import Box from './Box';

function App() {
  const [size,setSize] = useState(1000);
  const [isDark,setIsDark] = useState(false);


  const createBoxStyle = () =>{
    return {
      backgroundColor: 'pink',
      width: `${size}px`,
      height: `${size}px`,
    };
  }
 
  return (
    <div style={{
      background: isDark ? 'black' : 'white',
    }}>
      <input
        type='number'
        value={size}
        onChange={(e)=>setSize(e.target.value)}
      />
      <button onClick={()=>{
        setIsDark(!isDark);
      }}>{isDark?'light':'black'}</button>
      <Box createBoxStyle={createBoxStyle}/>
    </div>
  );
}

export default App;
