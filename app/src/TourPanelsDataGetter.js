import React from 'react'

function TourPanelsDataGetter(props) {
    return (
        <div className="tour-panel-item">
            <p>{props.item.text}</p>
        </div>
    )
}

export default TourPanelsDataGetter