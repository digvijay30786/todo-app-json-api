import { useState } from 'react';
import './App.css';
import Timer from "./components/timer";

function App() {
  return (
    <div className="App">
      <Timer starSecond={Math.floor(Math.random() * 100) + 40} endSecond={Math.floor(Math.random() * 100) + 100}/>
    </div>
  );
}

export default App;
