import React from "react";
import PanelButton from './PanelButton'
import PanelView from './PanelView'
import TourButton from './TourButton'



class TourList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            tours: this.props.data.mockTours,
        }
    }

    callBackFunction = (data) => {
        this.props.sendToMain(data)
    }

    render(props) {


        return (
            <div className="TourList">
             {this.state.tours.map(panel => <TourButton data={panel} sendDataBack={this.callBackFunction}/>)}
            </div>
            
        )
    }
}

export default TourList;