import React from "react";
import Left from "./component/left";
import Middle  from "./component/middle";
import Right from "./component/right";
import "./App.css";


function App() {
  return (
    <div className="App">
      <div className="app_left">
      <Left />
      </div>
      <div className="app_middle">
     <Middle />
        
        </div>
        <div className="app_right">
     <Right />
        
        </div>
     
    </div>
  );
}

export default App;
