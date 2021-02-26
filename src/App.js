import './App.css';
import SelectionButton from './components/SelectionButton.js';

function App() {
  return (
    <div className="App">
      <div className="SelectionButton-container">
        <SelectionButton type="rock" />
        <SelectionButton type="paper" />
        <SelectionButton type="scissors" />
        <SelectionButton type="lizard" />
        <SelectionButton type="spock" />
      </div>
    </div>
  );
}

export default App;
