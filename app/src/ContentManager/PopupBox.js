import React from 'react';
import Popup from "reactjs-popup";
import TextareaAutosize from 'react-textarea-autosize';
import AddTourBox from './AddTourBox.js';


class PopupBox extends React.Component {
  constructor() {
    super()
    this.state = {
      components: [],
      name : "", 
      description : "",
      
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit =  (event) => {
    event.preventDefault();
    const newBox =  <AddTourBox name={this.state.name} description={this.state.description}/>
    this.setState({
      components: [...this.state.components, newBox]
    })


  }

  handleChange = (event) => {
    console.log(event)
    console.log(event.currentTarget)
    console.log(event.currentTarget.name)
    if (event.currentTarget.name === "tourname") {
      this.setState({
        name: event.currentTarget.value
         
      })
    }
    else {
      this.setState({
      description: event.currentTarget.value
       
    })
    }
    
  }



  render() {
    return (
      <div>
        List of Tours
        {this.state.components.map(component => component)}
        <Popup trigger={<div><AddTourBox name = '+'/></div>} modal>
          {close => (
            <div className="modal">
              <a className="close" onClick={close}>
                &times;
              </a>
              <div className="header"> Add a new Tour </div>
              <div className="content">
                {" "}
                <form onSubmit = {this.handleSubmit}> 
                  <label>
                    Tour Name:{"  "}
                    <input type="text" name="tourname" onChange = {this.handleChange}  /> 
                    
                  </label>

                  <br />
                <label>
                    Description:{"  "}
                    <TextareaAutosize
                      style={{width:300}}
                      minRows={3}
                      maxRows={6}
                      defaultValue="Enter your description..."

                      name="description"
                      onChange = {this.handleChange}

                    />
                  </label>
                  <br />
                  <input type="submit" value = "Submit" />
                </form>

                
              </div>
              <div className="actions">
              {/* <form onSubmit = {this.submitDescription}><input type="submit" value="Submit" /></form> */}
              </div>
            </div>
          )}
        </Popup>
      </div>
    )
  }
}

export default PopupBox; 