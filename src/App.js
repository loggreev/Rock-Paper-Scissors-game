import React from 'react';
import './App.css';
import SelectionButton from './components/SelectionButton.js';
import Scoresheet from './components/Scoresheet.js';

class App extends React.Component {
  constructor() {
    super()
    this.selectChoice = this.selectChoice.bind(this);
    this.state = {
      choice: undefined,
      score: 0
    };
  }

  //called when component is updates, such as on state change
  componentDidUpdate() {
    //TODO: implement
    console.log(this.state)
  }

  selectChoice(event) {
    //the element with the event handler
    const target = event.currentTarget;
    const type = target.dataset.type;
    return this.setState({ choice: type });
  }

  render() {
    return (
      <div className="App">
        <Scoresheet score={this.state.score} />
        <div className="SelectionButton-container">
          <div className="row">
            <SelectionButton type="scissors" onclick={this.selectChoice} />
          </div>
          <div className="row">
            <SelectionButton type="spock" onclick={this.selectChoice} />
            <SelectionButton type="paper" onclick={this.selectChoice} />
          </div>
          <div className="row">
            <SelectionButton type="lizard" onclick={this.selectChoice} />
            <SelectionButton type="rock" onclick={this.selectChoice} />
          </div>
        </div>
        <div className="rulesButton">
          Rules
      </div>
      </div>
    );
  }
}

export default App;
