import React from 'react';
import './App.css';
import SelectionButtonContainer from './components/SelectionButtonContainer.js';
import Scoresheet from './components/Scoresheet.js';
import Rules from './components/Rules';
import Versus from './components/Versus.js'

class App extends React.Component {
  constructor() {
    super();
    this.game_state_component = undefined;
    this.state = {
      selection: undefined,
      score: 0,
      displayRules: false,
      gameState: "selection"
    };
  }

  // get the value of the button the user clicked on
  selectChoice = (event) => {
    //the element with the event handler
    const target = event.currentTarget;
    const selection = target.dataset.type;
    this.setState({ selection: selection, gameState: "versus" });
  }

  updateScore = (outcome) => {
    this.setState({ score: this.state.score + outcome })
  }

  playAgain = () => {
    this.setState({ gameState: "selection" })
  }

  // change the game state component to reflect the current game state
  updateGameState = () => {
    switch (this.state.gameState) {
      case "selection":
        this.game_state_component =
          <SelectionButtonContainer selectChoice={this.selectChoice} />;
        break;
      case "versus":
        this.game_state_component = <Versus choice={this.state.selection} updateScore={this.updateScore} playAgain={this.playAgain} />;
        break;
      default:
        throw Error("Something bad happened!");
    }
  }

  // display or hide the game rules
  toggleRules = (event) => {
    //the element with the event handler
    const target = event.target;
    if (target === document.getElementById('closebutton') || target === document.querySelector('.Rules-container') || target === document.querySelector('.rulesButton')) {
      this.setState({
        displayRules: !this.state.displayRules
      });
    }
  }

  // Called every time an update occurs (on state change)
  // Components will be rerendered, and thus all code inside them reran
  render() {
    let rules;
    if (this.state.displayRules)
      rules = <Rules onclick={this.toggleRules} />
    this.updateGameState();

    return (
      <div className="App">
        {rules}
        <div className="game-container">
          <div className="Scoresheet-container">
            <Scoresheet score={this.state.score} />
          </div>
          {this.game_state_component}
          <div className="rulesButton" onClick={this.toggleRules}>
            Rules
          </div>
        </div>
      </div>
    );
  }
}

export default App;
