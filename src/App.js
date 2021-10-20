import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Button from './components/Button';

function App() {
  return (  
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Form/>
        <Navbar mode="light" coluns="col2" os="android">
          <Button></Button>
          <Button></Button>
        </Navbar>
      </header>
    </div>
  );
}

export default App;
