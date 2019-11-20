import React from "react";
import "./CMS.css"
import GeneratePage from "./GeneratePage"
import ContentBlock from './ContentBlock';



class CMS extends React.Component {
    constructor() {
        super()
        this.state = {
            components: [],
            view: "text",
            newComponent: true,
            currentComponent: {
                tag: "p",
                string: "Change this text!",
                contentStyle: {
                    color: "black",
                    'font-family': "Times New Roman",
                    'font-size': "24px"
                },
                id: 0,
            },
        }
        this.view = "text"; //to delete soon

        this.changeText = this.changeText.bind(this);
        this.changeColor = this.changeColor.bind(this);
        this.changeFont = this.changeFont.bind(this);
        this.changeSize = this.changeSize.bind(this);
        this.setNewComponent = this.setNewComponent.bind(this)
        this.placeBack = this.placeBack.bind(this)
        this.drag = this.drag.bind(this);
        this.drop = this.drop.bind(this);
    }
    
    changeColor = (event) => {
        event.preventDefault();
        let newColor = event.currentTarget.childNodes[0].childNodes[1].value;
        this.setState(prevState => ({
              currentComponent: {
              ...prevState.currentComponent,           
              contentStyle: {
                  ...prevState.currentComponent.contentStyle,
                  color: newColor
              }
            }                     
        })
    )}

    changeFont = (event) => {
        event.preventDefault();
        let newFont = event.currentTarget.childNodes[0].childNodes[1].value;
        this.setState(prevState => ({
            currentComponent: {
            ...prevState.currentComponent,           
            contentStyle: {
                ...prevState.currentComponent.contentStyle,
                "font-family": newFont
            }
          }                     
      })
  )}

    changeSize = (event) => {
        event.preventDefault();
        let newSize = event.currentTarget.childNodes[0].childNodes[1].value;
        this.setState(prevState => ({
            currentComponent: {
            ...prevState.currentComponent,           
            contentStyle: {
                ...prevState.currentComponent.contentStyle,
               "font-size": newSize
            }
          }                     
      })
  )}

   changeText = (event) => {
        event.preventDefault();
        let currentString = event.target.value

        this.setState(prevState => ({
              currentComponent: {
              ...prevState.currentComponent,           
              string: currentString                
              }
            })
          )
 
    }

     drag = (event) => {
     //might need for future
      }

      drop = (event) => {
        event.preventDefault();


        this.setState( prevState => ({
            components: [...this.state.components, this.state.currentComponent],
            id: prevState.currentComponent.id++,
            newComponent: true,
          }))
      }

      setNewComponent = (event) => {
          event.preventDefault();
          this.setState({
              newComponent: true,
              currentComponent : {
                tag: "p",
                string: "Change this text!",
                contentStyle: {
                    color: "black",
                    'font-family': "Times New Roman",
                    'font-size': "24px"
                },
                id: 0,
            }
          })


      }
      
      editFunction = (data) => {
        this.state.components.forEach(each => {
            if (each === data.state.data) {
                let toRemove = this.state.components.indexOf(each);
                let toy = this.state.components[toRemove];
                this.setState({
                    currentComponent: toy,
                    newComponent: false
                })
            }
        })
      }
      

      placeBack = () => {
          if (!this.state.newComponent) {
              this.state.components.forEach(each => {

                  if (each.id === this.state.currentComponent.id) {
                      const index = this.state.components.indexOf(each);
                      this.state.components[index] = this.state.currentComponent
                  }
              })
        }
      }
             
    render() {
        this.placeBack();

        const textPage = 
        <div className="dropdown">
        <form >
        <label>Edit Text:
            <input type="text" value={this.state.currentComponent.string}  onChange={this.changeText}/>
        </label>
        </form>
        <form onSubmit = {this.changeColor}>
            <label>Text Color:
            <input type="text" />
            <button type="submit">Submit </button>
            </label>
        </form>
        <form onSubmit = {this.changeFont}>
            <label>Change Font:
            <input type="text" />
            <button type="submit">Submit </button>
            </label>
        </form>
        <form onSubmit = {this.changeSize}>
            <label>Change Text Size:
            <input type="text" />
            <button type="submit">Submit </button>
            </label>
        </form>
        </div>

        const imgPage = 
        <div className="dropdown">
            Features will be added soon?
        </div>

        let viewPage = textPage;



        /*if (this.view === "text") {
            viewPage = textPage;
        } else {
            viewPage = imgPage;
            this.addContent({data: {
                tag: "img src=",
                text: "https://myfirstshiba.com/wp-content/uploads/2016/01/dreamstime_xs_34451740.jpg"
            }})
        } */

      /*  let sampleData = {
            id: 0,
            data: {
              tag: "p",
              text: "Hello world",
              contentStyle: {
                  color: "red",
                  'font-family': "Comic sans ms",
                  'font-size': 24
              },
              position: {
                x: 300,
                y: 300,
                z: 1,
              }
            }
        }
        */

       let componentToEdit = <ContentBlock data={this.state.currentComponent} template={true} />


        return (
            <div className="grid-container">
                <div className="result" draggable="true"  onDragStart={this.drag} onDragEnd={this.drop} >
                    {componentToEdit}
                
                {/*
                {ReactHtmlParser (this.generateHTML(this.state))}
                 <button onClick={this.changeType("text")}>Text</button>
                <button onClick={this.changeType("img")}>Image</button> */}
                </div>
                <div className="buttonBar">
                    <p>Buttons to go here</p>
                    <form onSubmit ={this.setNewComponent}>
                    <button type="Submit">New Component</button>
                    </form>
                </div>
                    {viewPage}
                <div className="preview">
                    <GeneratePage dragData={this.state} editFunction={this.editFunction}
                    components={this.state.components}/>
                </div>
            </div>
        )
    }
}

export default CMS;