import React, { useState } from 'react'

function Clock() {
    let [time,Settime]=useState()
    setInterval(()=>{
        let date=new Date().toLocaleString()
        console.log(date,"eee");
        Settime(date)
    })
  return (
    <div>
        {time} 
    </div>
  )
}

export default Clock