import './SelectionButton.css'
import rock from './../images/icon-rock.svg'
import paper from './../images/icon-paper.svg'
import scissors from './../images/icon-scissors.svg'
import lizard from './../images/icon-lizard.svg'
import spock from './../images/icon-spock.svg'

function SelectionButton(props) {
    const type = props.type;
    let svg;
    switch (type) {
        case 'rock':
            svg = rock;
            break;
        case 'paper':
            svg = paper;
            break;
        case 'scissors':
            svg = scissors;
            break;
        case 'lizard':
            svg = lizard;
            break;
        case 'spock':
            svg = spock;
            break;
        default: ;
    }

    return (
        <div className="SelectionButton" onClick={props.onclick}>
            <div className={"circle outer " + type}>
                <div className="circle inner">
                    <img src={svg} alt="" />
                </div>
            </div>
        </div>
    );
}

export default SelectionButton;