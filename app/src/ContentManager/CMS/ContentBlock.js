import React from "react";

class ContentBlock extends React.Component {
    constructor(props) {
        super(props)
        this.state = Object.assign({}, this.props);
        this.drag = this.drag.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick = (event) => {
        event.preventDefault();
        this.props.callback(this)
    }


    generateStyle = (data) => {
        let elementStyle = {
            color: data.contentStyle.color,
            'font-family': data.contentStyle['font-family'],
            'font-size': data.contentStyle['font-size']
        }
       /* if (!this.props.template) {

            elementStyle.position = 'absolute'
            elementStyle.left =  this.state.position.x+ 'px'
            elementStyle.top = this.state.position.y + 'px'
        } */
        return elementStyle
    }

    drag = (event) => {
        

      event.preventDefault();
      //let newState = Object.assign({}, this.state);
      //this.setState({}, newState)
      this.setState({
          position: {
              x: event.clientX - 550,
              y: event.clientY - 50,
              z: 0
          }
      })
    }





    render(props) {
        console.log(this.props.data)
        return (
            <div draggable="true" onDragEnd={this.drag} onClick={this.handleClick}>
                <p style = {this.generateStyle(this.props.data)}>
                    {this.props.data.string}
                </p>
            </div>
        )
    }
}

export default ContentBlock;