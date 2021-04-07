import React, {useState, useEffect} from 'react'
import './App.css';
import axios from 'axios';

function App() {
  let [state, updateState] = useState({});
  
  useEffect(() => {
    let u = axios.get('http://localhost:5000/api/timeseries').then((e) => {
      console.log(e.data.timeseries)
      updateState(e.data)
    })
  })

  return (
    <div className="App">
      <header className="App-header">
        {state}
      </header>
    </div>
  );
}

export default App;
