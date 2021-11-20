import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Message from './components/Message';
import Button from './components/Button';
import helloServices from './services/helloServices';
import Hello from './components/Hello';
import Employee from './components/Employee';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           --- jammy 😊
        </p>
        <p>{Hello()}</p>
        <Employee/>
        <Greet name = "stranger" stageName = "😊">
          <p>Hello, Welcome back to my yt channel! Char.</p>
          <Message/><Button/>
          </Greet>
        
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          
        </a>
      </header>
    </div>
  );
}

export default App;
