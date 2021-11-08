import State from './Component/State'
import './App.css';
import Square from './Component/Squares';
import InputText from './Component/InputText';

function App() {
  return (
    <div className="App">
      <InputText max='5' min='2'/>
    </div>
  );
}

export default App;
