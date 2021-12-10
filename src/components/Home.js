import logo from '../logo.svg';
import '../App.css';
import Greet from './Greet';
import Message from './Message';
import Button from './Button';
import Hello from './Hello';

function Home() {
  return (
    <div className="Home">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>{Hello()}</p>
        <Greet name = "stranger" stageName = "😜">
          <p>Hope you're having a nice day!</p>
          <Message/>
          <p>
           --- jammy 😊
          </p>
          <Button/>
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

export default Home;