import React, { useState, useCallback } from 'react'
import samplepage from '../../samplepage'
import ReactHtmlParser from 'react-html-parser'; 
import ContentBlock from './ContentBlock';

class GeneratePage extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      components: [],
    }
    this.allowDrop = this.allowDrop.bind(this);
    this.drop = this.drop.bind(this)
  }



allowDrop = (event) => {
  event.preventDefault();
}

callbackFunction = (data) => {
  this.props.editFunction(data)
}


drop = (event) => {
  event.preventDefault();

}


  /*
  samplepage.push({
    id: samplepage.length,
    data: {
      tag: this.props.dragData.tag,
      text: this.props.dragData.text,
      contentStyle: this.props.dragData.contentStyle,
      position: {
        x: event.clientX - 408, //tochange
        y: event.clientY,
        z: this.props.dragData.position.z
      }
    }
    });
  this.setState({
    currentPage: samplepage[samplepage.length-1] ///
    }) 
  }*/



 //event.target.appendChild(document.getElementById(data));
render(props) {

  return (


    <div>
      Page generator:
      <div id="div1" onDragOver={this.allowDrop} onDrop={this.drop}>
        {
          this.props.components.map(component => <ContentBlock data={component} callback={this.callbackFunction} template={false} />)}
      
      <br />
      </div>
    </div>
  )
}
}


export default GeneratePage
