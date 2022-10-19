import logo from './logo.svg';
import './App.css';

function App() {
  const name = 'Jordan Conrad';
  const element = <h5>hey, {name}</h5>;

  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
