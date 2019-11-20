import React, { Component } from 'react';
import Style from '../style.css'
export default class SignUp extends Component { 
  state = { 
  }
  
  render () {                                   
      return (
        <div id='signin'>
            <h1>Ballona Discovery Park</h1>
             <div id='signinContainer'>
                  <form id='form'>       
                      {/* <input className='input' type="text"   
                       placeholder="First Name"/>
                      <input className='input' type="text"  
                       placeholder="Last Name"/>           */}
                      <input className='input' type="text"  
                       placeholder="Username"/>          
                      <input className='input' type="password" 
                       placeholder="Password"/>
                       {/* <a href="button"><button id='submit'>Log-In to Your Park</button></a> */}
                      <button id='submit'><a href="button">Log-In to Your Park</a></button>
                      
                  </form>
             </div>
             <img id ='signinImage' src="https://playavista.com/shared/2016/02/PlayaVista_0923.jpg?x49818" ></img>
        </div>
      )
   }
}