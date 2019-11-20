import React from 'react';
class addTour extends React.Component {
    constructor() {
        super()
        this.state = {
        }
    }
    
    render() {
        return(
            <div class="container">
                <div class="box2">
                    {this.props.name}
                    <br/>
                    <a href="toNextLevel">{this.props.description}</a>
                    {/* {this.props.description} */}
                </div>
            </div>
            )
    }
}

 export default addTour;