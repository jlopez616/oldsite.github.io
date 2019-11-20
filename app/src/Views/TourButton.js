import React from "react";
import './PanelButton.css'

class PanelButton extends React.Component {
    constructor(props) {
        super(props)
    }

    sendData = (event) => {
        event.preventDefault();
        this.props.sendDataBack(this.props.data)
    }

    



    render(props) {
        return (
            <div className="panelButton" onClick={this.sendData}>
               {this.props.data.name}
            </div>
        )
    }
}

export default PanelButton;