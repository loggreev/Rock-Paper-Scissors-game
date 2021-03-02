import './Versus.css'
import SelectionButton from './SelectionButton.js'
import React from 'react'

const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];

class Versus extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            player_choice: this.props.choice,
            opponent_choice: choices[Math.floor(Math.random() * choices.length)]
        };
    }

    componentDidMount = () => {
        this.roulette()
            .then(() => this.wait(750))
            .then(() => {
                this.gameLogic()
                // this.displayOutcome()
            })
    }

    wait = (duration) => {
        return new Promise((resolve) => {
            setTimeout(() => {
                resolve()
            }, duration)
        })
    }

    // fake a roulette over each choice
    roulette = () => {
        return new Promise((resolve) => {
            setTimeout(() => {
                let i = 0;
                const id = setInterval(() => {
                    this.setState({ displayed_opponent_choice: choices[i] });
                    i++;
                    i %= choices.length;
                }, 125);
                // at least 15 rolls, at most 30
                const rollDuration = Math.ceil(Math.random() * 15) * 125 + (125 * 15);
                // const rollDuration = Math.floor(Math.random() * 100) + 0;
                setTimeout(() => {
                    clearInterval(id);
                    this.setState({ displayed_opponent_choice: this.state.opponent_choice });
                    resolve();
                }, rollDuration);
            }, 750)
        });
    }

    gameLogic = () => {
        let outcome;
        const player_choice = this.state.player_choice;
        const opponent_choice = this.state.opponent_choice;
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
        this.setState({ outcome_message: outcome_message, game_over: true })
    }

    render() {
        let results;
        if (this.state.game_over) {
            results =
                <div className="results">
                    <p>{this.state.outcome_message}</p>
                    <div className="play-again" onClick={() => { this.props.playAgain() }}>Play Again</div>
                </div>
        }

        //portrait view
        if (matchMedia("(orientation:portrait)").matches) {
            return (
                <div className="Versus-container" >
                    <div className="choices-container">
                        <div className="choice">
                            <SelectionButton type={this.state.player_choice} />
                            <p>You Picked</p>
                        </div>
                        <div className="choice">
                            <SelectionButton type={this.state.displayed_opponent_choice} />
                            <p>The House Picked</p>
                        </div>
                    </div>
                    <div className="result-container">
                        {results}
                    </div>
                </div>
            );
        }
        //landscape view
        else {
            return (
                <div className="Versus-container" >
                    <div className="choices-container">
                        <div className="choice">
                            <p>You Picked</p>
                            <SelectionButton type={this.state.player_choice} />
                        </div>
                        <div className="result-container">
                            {results}
                        </div>
                        <div className="choice">
                            <p>The House Picked</p>
                            <SelectionButton type={this.state.displayed_opponent_choice} />
                        </div>
                    </div>
                </div>
            );
        }
    }
}

export default Versus;