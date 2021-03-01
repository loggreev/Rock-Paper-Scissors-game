import './Rules.css'
import matchups from './../images/image-rules-bonus.svg'
import iconclose from './../images/icon-close.svg'

function Rules(props) {

    return (
        <div className="unfocused-area" onClick={props.onclick}>
            <div className="Rules-container">
                <div className="centered Rules-container-items">
                    <p>Rules</p>
                    <img src={matchups} alt="rules" id="matchups" />
                    <img src={iconclose} alt="close" id="closebutton" onClick={props.onclick} />
                </div>
            </div>
        </div>
    );
}

export default Rules;