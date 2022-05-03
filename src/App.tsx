import './App.css';
import info from "./info.json";
import logo from "./logo.svg"

const localData = info.Data;

function App() {
  return (
    <div className="App">
      <h1> Hello React</h1>
           <ul className='list'>
              {localData.map((s) => (<li>{s}</li>))}
           </ul>
      <img className='App-logo' src={logo} alt=""/>
    </div>
  );
}

export default App;