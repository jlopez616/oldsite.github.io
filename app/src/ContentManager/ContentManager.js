import React from 'react';	
import { BrowserRouter, Route } from 'react-router-dom';
import HomePage from '../ContentManager/HomePage';
import SignUp from '../ContentManager/SignUp';
import '../App.css';
import PopupBox from '../ContentManager/PopupBox';
import '../style.css'
import CMS from './CMS/CMS'
// import Panels from './AllPanels'
// import TourPanels from './TourPanels'
// import CMS from './CMS/CMS';

class ContentManager extends React.Component {
  render() {
      return (
        // <div>
        // {/* <Panels /> */}
        // {/* <TourPanels /> */}
        // </div>
        <BrowserRouter>
        <div>
          <Route exact={true} path='/' render={() => (
            <div className="App">
              <SignUp />
            </div>
          )}/>
          <Route exact={true} path='/PopupBox' render={() => (
            <div className="App">
              <PopupBox />
            </div>
          )}/>
          <Route exact={true} path='/signup' render={() => (
            <div className="App">
              <SignUp />
            </div>
          )}/>
          <Route exact={true} path='/button' render={() => (
            <div className="App">
              <HomePage />
            </div>
          )}/>
          
          <Route exact={true} path='/toNextLevel' render={() => (
            <div className="App">
                <CMS />
              
            </div>
          )}/>
        </div>
      </BrowserRouter>
      )    
  }
}
export default ContentManager;



