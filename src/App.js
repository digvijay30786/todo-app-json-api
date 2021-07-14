import { useState } from 'react';
import './App.css';
import Updateclock from "./components/liveClock";


function App() {
  const [show, setShow] = useState(true);
  return show ? (
      <div className="App">
      <Updateclock />
      <button onClick={() => {
        setShow(!show);
      }}>Hide Time</button>
      </div>
  ) : (
    <div className="App">
      <button onClick={() => {
        setShow(true);
        }}>Show Time</button>
        </div>
  )
}

export default App;
