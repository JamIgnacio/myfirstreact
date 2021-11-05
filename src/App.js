import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload. --- jammy 😊
        </p>
        <Greet name = "Jungkook" stageName = "JK">
          <p>Birthday is on September 1st.</p>
          <Message/>
          </Greet>
        <Greet name = "Jimin" stageName = "JM">
          <p>Birthday is on October 13th.</p>
          <Message/>
          </Greet>
        <Greet name = "Namjoon" stageName = "RM">
          <p>Birthday is on September 12th.</p>
          <Message/>
          </Greet>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
