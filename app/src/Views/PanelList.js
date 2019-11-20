import React from "react";
import PanelButton from './PanelButton'


class PanelList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            panels: this.props.data,
        }
    }

    callBackFunction = (data) => {
        this.props.sendToMain(data)
    }

    



    render(props) {


        return (
            <div className="PanelList">
             {this.state.panels.map(panel => <PanelButton data={panel} sendDataBack={this.callBackFunction}/>)}
            </div>
            
        )
    }
}

export default PanelList;