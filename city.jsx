import React, { useState } from 'react'
import Home from './home';

function City(pp) {
   
    let[city,setCity]=useState('Bhopal');
    function fun(){
        setCity('delhi')
      
    }
  return (
    <div>
       
        <p>{city}</p>
        
    <button onClick={fun}>Change</button>
    <Home a={pp} />
    </div>
  )
}

export default City