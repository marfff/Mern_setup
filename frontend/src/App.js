import logo from './logo.svg';
import './App.css';
import Fetcher from './fetcher';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
       <div>
            <Fetcher/>
      
          Edit <code>src/App.js</code> and save to reload.
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          </a>
          Learn React
          </div>
    </div>
  );
}

export default App;
