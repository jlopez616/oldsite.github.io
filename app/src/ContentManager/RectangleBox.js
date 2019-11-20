import React from 'react';

class rectangle extends React.Component {
  constructor() {
    super()
    this.state = {
    }
  }

  render() {
    return(
      <div class="container">
        <div class="box">
          What is this??
          {this.props.name}
        </div>
      </div>
    )
  }
  
}
  export default rectangle;
  