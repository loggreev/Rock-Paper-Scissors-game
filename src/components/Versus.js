import './Versus.css'
import SelectionButton from './SelectionButton.js'
import React from 'react'

class Versus extends React.Component {
    constructor(props) {
        super(props);
        this.state = this.gameLogic(props);
    }

    gameLogic = (props) => {
        let outcome;
        const player_choice = props.choice;
        const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock']
        const opponent_choice = choices[Math.floor(Math.random() * choices.length)];
        if (player_choice === opponent_choice)
            outcome = 0;
        else {
            switch (player_choice) {
                case 'rock':
                    if (opponent_choice === 'scissors' || opponent_choice === 'lizard')
                        outcome = 1;
                    else
                        outcome = -1;
                    break;
                case 'paper':
                    if (opponent_choice === 'rock' || opponent_choice === 'spock')
                        outcome = 1;
                    else
                        outcome = -1;
                    break;
                case 'scissors':
                    if (opponent_choice === 'paper' || opponent_choice === 'lizard')
                        outcome = 1;
                    else
                        outcome = -1;
                    break;
                case 'lizard':
                    if (opponent_choice === 'spock' || opponent_choice === 'paper')
                        outcome = 1;
                    else
                        outcome = -1;
                    break;
                case 'spock':
                    if (opponent_choice === 'scissors' || opponent_choice === 'rock')
                        outcome = 1;
                    else
                        outcome = -1;
                    break;
                default: ;
            }
        }
        let outcome_message;
        if (outcome === 1)
            outcome_message = "You Win";
        else if (outcome === 0)
            outcome_message = "You Tied"
        else
            outcome_message = "You Lose";

        this.props.updateScore(outcome);

        return { player_choice: player_choice, opponent_choice: opponent_choice, outcome_message: outcome_message }
    }

    render() {
        return (
            <div className="Versus-container" >
                <div className="choices-container">
                    <div className="choice">
                        <SelectionButton type={this.state.player_choice} />
                        <p>You Picked</p>
                    </div>
                    <div className="choice">
                        <SelectionButton type={this.state.opponent_choice} />
                        <p>The House Picked</p>
                    </div>
                </div>
                <div className="result-container">
                    <p>{this.state.outcome_message}</p>
                    <div className="play-again" onClick={() => { this.props.playAgain() }}>Play Again</div>
                </div>
            </div>
        );
    }
}

export default Versus;