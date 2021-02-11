import './App.css';
import {useEffect, useState} from 'react'

function url(path){
  return process.env.NODE_ENV === "development" ?
  `http://localhost:1010${path}` : path
}

function App() {
 
  const [text, setText] = useState('Somewhere!')
  useEffect(()=> {
    // setData(text+'!')
    fetch(url('/api/'))
    .then(res => res.json()) //grabs API data here, which is in index at app.use
    .then(apiText => {setText(apiText.data)}) //corresponse to key in app.use line 17

  },[]) // rerun only if data changes, when you put data in the brackets. Otherwise, it'll update on first render

  return (
    <div className="App">
      <header className="App-header">
        Where is the API? 
        <h1>{text}</h1>
      </header>
    </div>
  );
}

export default App;
