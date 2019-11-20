import React from "react";
import PanelButton from './PanelButton'
import PanelView from './PanelView'
import ReactHtmlParser from 'react-html-parser'; 
import './PageView.css'
      
      
class PanelList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            page: this.props.data,
        }
        this.generateHTML = this.generateHTML.bind(this)
    }


    generateHTML = () => {
        let code = ``;
        this.state.page.html.forEach((component) => {
            if (component.contentStyle != undefined) {
            let elementStyle = JSON.stringify(component.contentStyle).replace(/['"{}]+/g, '').replace(/[,]+/g, ';') + ";";
            elementStyle = elementStyle + `position: absolute; top: ${component.position.y}px; left: ${component.position.x}px;`
            code = code + `<${component.tag} id= "component${component.id}"style="${elementStyle}">${component.string}</${component.contentType}
            <br>`;
            }
        } ) 
        return code;
    }





    render(props) {

        return (
            <div className="page">

                <div className="pageContainer">
                    <div> {ReactHtmlParser (this.generateHTML())}</div>
                </div>
            </div>
            
        )
    }
}

export default PanelList;