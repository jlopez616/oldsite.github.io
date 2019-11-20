import React from 'react'
import AllPanelsDataGetter from './AllPanelsDataGetter'
import AllPanelsData from './allPanelsData'

class Panels extends React.Component {
    constructor() {
        super()
        this.state = {
            list: AllPanelsData
        }
    }
    
    render() {
        const panelsLists = this.state.list.map(item => <AllPanelsDataGetter key={item.id} item={item} />)
        return (
          <div className="outside-all-panel-list">
            <p className="all-panel-list-introduction">List of all panels</p>
            <div className="all-panel-list">
              {panelsLists}
            </div>
          </div>
        )    
    }
  }

  export default Panels