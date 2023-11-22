import logo from './logo.svg';
import './App.css';

import { useState } from 'react';
import Use2 from './use'


function App() {
  const employee=[

    {
    name:"Alex",
    skills:[
    {name:"ReactJS", type:"Frontend"},
    {name:"nodeJS", type:"Backend"}
    ]
    
    },
    {
    name:"Anna",
    skills:[
    {name:"Angular", type:"Frontend"},
    {name:"Python", type:"Backend"}
    ]
    
  }
    
    
    ]
  const[count,setCount]=useState("Blue")
  const change=()=>{
      setCount("Red")
  } 



  const [signIn,setSignIn]=useState(false)
  const [signOut,setSignOut]=useState(false)


  function change1(){
    setSignIn(signIn ? false : true);
    setSignOut(signOut ? false : true);
  }
 
  return (
    <div className="App">
        {/* <Use data={use1}/> */}
        <div className="data2">
                <p>value:{count}</p>
                <button onClick={change}>change</button>
                <Use2 data3={employee}/>
                <button onClick={change1}>{signIn ? "Sign out" : "Sign in"}</button>
                <h1>{signOut ? "You're Welcome" : "Please Sign in"}</h1>
          </div> 
      </div>
  );
}

export default App;
