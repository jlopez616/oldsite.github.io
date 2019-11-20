import React from "react";
import PanelButton from './PanelButton'
import PanelView from './PanelView'
import PanelList from './PanelList'
import TourList from './TourView'
//import './MobileContainer.css' //TO DO: Get Style to Correctly Work
import mockData from '../mockData'
import { tsConstructorType } from "@babel/types";


class MobileContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            currentPanel: undefined,
            currentView: "tourView",
            currentTour: undefined,
        }
        this.changeToPanel = this.changeToPanel.bind(this)
        this.changeToTours = this.changeToTours.bind(this)
        this.changeToList = this.changeToList.bind(this)
    }


    changeToPanel = (data) => {
        this.setState(prevState => ({
            currentView: "panelView",
            currentPanel: data,
            currentTour: prevState.currentTour
        }))
    
    }

    changeToTours= () => {
        this.setState({
            currentView: "tourView",
            currentPanel: undefined,
            currentTour: undefined,
        })
    }

    changeToList = (data) => {
        let changeTour;
        if (this.state.currentTour === undefined) {
            changeTour = data.id
        } else {
            changeTour = this.state.currentTour
        }
        this.setState({
            currentView: "listView",
            currentPanel: undefined,
            currentTour: changeTour
        })
    }



    render(props) {
        let currentView;

        if (this.state.currentView === "listView") {
          let toursToDisplay  = [];
          mockData.mockPanels.forEach(each => {
              
              each.tours.forEach(number => {
                  if (number === this.state.currentTour) {
                      toursToDisplay.push(each)
                  }
              })
          })
           currentView = 
            <div className="PanelList">
            <PanelList data = {toursToDisplay} sendToMain={this.changeToPanel}/>
            <button onClick={this.changeToTours}> Return to List of Tours</button>
            </div> 

        } else if (this.state.currentView === "panelView") {
            currentView =
            <div>
            {<PanelView data = {this.state.currentPanel} />}
            <button onClick={this.changeToList}> Return to List of Panels</button>
            </div>
        } else {
            currentView =           
            <div>
            {<TourList data = {mockData} sendToMain = {this.changeToList} />}
             </div>
        }

        return (
            <div>
            {currentView}
            </div>
            
        )
    }
}

export default MobileContainer;