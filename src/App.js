import logo from './logo.svg';
import './App.css';
import ComponetB from './components/componetB';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ComponetB></ComponetB>
        
      </header>
    </div>
  );
}

export default App;
