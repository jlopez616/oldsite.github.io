import React from 'react';	
import './App.css';
import './style.css'
import ContentManager from './ContentManager/ContentManager'
import PanelList from './Views/PanelList'
import MobileContainer from './Views/MobileContainer'
// import Panels from './AllPanels'
// import TourPanels from './TourPanels'
// import CMS from './CMS/CMS';

class App extends React.Component {
  render() {
      return (
        <MobileContainer />
      )    
  }
}
export default App;



