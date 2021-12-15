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
          <p>Look at me, and know that I am by your side.</p>
          <Message/>
          <p>
           --- jammy 😊
          </p>
          <Button/>
          </Greet>
      </header>
    </div>
  );
}

export default Home;