import React from 'react';
import './App.css';
import SelectionButtonContainer from './components/SelectionButtonContainer.js';
import Scoresheet from './components/Scoresheet.js';
import Rules from './components/Rules';
import Versus from './components/Versus.js'

class App extends React.Component {
  constructor() {
    super()
    this.state = {
      madeChoice: false,
      score: 0,
      displayRules: false
    };
  }

  //called when component is updated, such as on state change
  componentDidUpdate() {
    //TODO: implement
    console.log(this.state)
  }

  // get the value of the button the user clicked on
  selectChoice = (event) => {
    //the element with the event handler
    const target = event.currentTarget;
    const type = target.dataset.type;
    this.setState({ madeChoice: true });
  }

  // updateScore = (score) => {
  //   this.setState({ score: score })
  // }

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

  render() {
    let rules;
    if (this.state.displayRules) {
      rules = <Rules onclick={this.toggleRules} />
    }

    return (
      <div className="App">
        {rules}
        <div className="game-container">
          <div className="Scoresheet-container">
            <Scoresheet score={this.state.score} />
          </div>
          {/* <SelectionButtonContainer selectChoice={this.selectChoice} /> */}
          <Versus type="rock" />
          <div className="rulesButton" onClick={this.toggleRules}>
            Rules
          </div>
        </div>
      </div>
    );
  }
}

export default App;
