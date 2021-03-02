import './SelectionButtonContainer.css'
import SelectionButton from './SelectionButton.js'

function SelectionButtonContainer(props) {
    return (
        <div className="SelectionButton-container">
            <div className="container">
                <div className="row-container">
                    <div className="row">
                        <SelectionButton type="scissors" onclick={props.selectChoice} />
                    </div>
                    <div className="row">
                        <SelectionButton type="spock" onclick={props.selectChoice} />
                        <SelectionButton type="paper" onclick={props.selectChoice} />
                    </div>
                    <div className="row">
                        <SelectionButton type="lizard" onclick={props.selectChoice} />
                        <SelectionButton type="rock" onclick={props.selectChoice} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SelectionButtonContainer;