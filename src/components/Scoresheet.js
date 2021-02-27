import './Scoresheet.css'

function Scoresheet(props) {
    return (
        <div className="Scoresheet">
            <div className="choices">
                <p>Rock</p>
                <p>Paper</p>
                <p>Scissors</p>
                <p>Lizard</p>
                <p>Spock</p>
            </div>
            <div className="score">
                <p className="text">Score</p>
                <p className="number">{props.score}</p>
            </div>
        </div>
    );
}

export default Scoresheet;