import React from 'react'
import TourPanelsDataGetter from './TourPanelsDataGetter'
import tourPanelsData from './tourPanelsData'

class Panels extends React.Component {
    constructor() {
        super()
        this.state = {
            list: tourPanelsData
        }
    }
    
    render() {
        const tourPanelsLists = this.state.list.map(item => <TourPanelsDataGetter key={item.id} item={item} />)
        return (
          <div> 
          <div className="outside-tour-panel-list">
            <p className="tour-panel-list-introduction">Edit panels for ____ tour</p>
            <div className="tour-panel-list">
              {tourPanelsLists}
            </div>
          </div>
          </div>
        )    
    }
  }

  export default Panels