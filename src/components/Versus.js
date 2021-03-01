import './Versus.css'
import SelectionButton from './SelectionButton.js'

function Versus(props) {
    return (
        <div className="Versus-container">
            <div className="choices-container">
                <div className="choice">
                    <SelectionButton type={props.type} />
                    <p>You Picked</p>
                </div>
                <div className="choice">
                    <SelectionButton />
                    <p>The House Picked</p>
                </div>
            </div>
            <div className="result-container">
                <p>You Win</p>
                <div className="play-again">Play Again</div>
            </div>
        </div>
    );
}

export default Versus;