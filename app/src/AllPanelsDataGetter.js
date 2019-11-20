import React from 'react'

function AllPanelsDataGetter(props) {
    return (
        <div className="all-panel-item">
            <p>{props.item.text}</p>
        </div>
    )
}

export default AllPanelsDataGetter