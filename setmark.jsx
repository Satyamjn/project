import React, { useState } from 'react'

function Setmark() {
    let[marks,setMark]=useState(0)

    function update(){
        setMark(marks++);
    }

  return (
    <div>
       <h1>
       <p>mera number hai{marks}</p>
     </h1>
        <button onClick={update}>click me</button>
        
        </div>
  )
}

export default Setmark