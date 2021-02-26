import './App.css';
import SelectionButton from './components/SelectionButton.js';

function App() {
  return (
    <div className="App">
      <SelectionButton type="rock" />
      <SelectionButton type="rock" />
      <SelectionButton type="paper" />
      <SelectionButton type="scissors" />
      <SelectionButton type="lizard" />
      <SelectionButton type="spock" />
    </div>
  );
}

export default App;
