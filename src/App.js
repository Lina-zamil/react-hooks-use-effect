import React, { useState, useEffect } from "react";

function App() {
  const[count,setCount]=useState(0)
  const[text,setText]=useState("")
  useEffect(
   //first argument:side effect (callback function)
  () => console.log("useEffect called"),
  // second argument:dependencies array
  []);

  useEffect(()=>{document.title=text},[text])

  useEffect(()=>setTimeout(setCount(0),5000),[]);

  console.log("Component rendering");
  return(
  <div>  
   <button onClick={()=>setCount((count)=>count+1)}>Click Me {count} times</button>;
  <input value={text} onChange={(e)=>setText(e.target.value)} type="text" placeholder="Type away..." />
  </div>
  );

}

export default App;
