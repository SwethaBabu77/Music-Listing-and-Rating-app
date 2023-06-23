import React ,{useState} from 'react'
import './Body.css'
import Header from './Header'

import BodyContent from './BodyContent'
// function Body(props) 
function Body() {
 
  return (
    <div className="Homebody">
    <hr className='Homehr'/>
    <BodyContent/>
    {/* <BodyContent pro={props.pro} set={props.set}/> */}
   </div>
   

  )
}

export default Body