import React from 'react';
import './App.css';
import SelectionButton from './components/SelectionButton.js';

class App extends React.Component {
  constructor() {
    super()
    this.selectChoice = this.selectChoice.bind(this);
    this.state = {
      choice: undefined,
      other: 1
    };
  }

  //called when component is updates, such as on state change
  componentDidUpdate() {
    console.log(this.state)
  }

  selectChoice(event) {
    //the element with the event handler
    const target = event.currentTarget;
    //get the value of the button based on the element's class that it was given
    const type = target.children[0].className.split(" ").filter(c =>
      c !== "circle" && c !== "outer"
    )[0];
    return this.setState({ choice: type });
  }

  render() {
    return (
      <div className="App">
        <div className="SelectionButton-container">
          <SelectionButton type="rock" onclick={this.selectChoice} />
          <SelectionButton type="paper" onclick={this.selectChoice} />
          <SelectionButton type="scissors" onclick={this.selectChoice} />
          <SelectionButton type="lizard" onclick={this.selectChoice} />
          <SelectionButton type="spock" onclick={this.selectChoice} />
        </div>
      </div>
    );
  }
}

export default App;
