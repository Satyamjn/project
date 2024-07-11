import React, { useEffect, useState } from 'react'

  function Count() {
    let [count,setcount]=useState(0);
    let [city,SetCity]=useState('BHOPAL')
    let [data,Setdata]=useState([])

    useEffect(()=>{
      fetch('https://dummyjson.com/recipes').then((res)=>{
         return res.json()
      }).then((dataa)=>{
        console.log(dataa);
        Setdata(dataa.recipes)
      })
    },[])

    function add(){
     setcount(count+1)

    }  
    function fun2(){
      SetCity('delhi')
    }

    return (
     <div>
        <h1>mera num hai{count}</h1>
      <button onClick={add}>clickme</button>
      <h2>{city}</h2>
      <button onClick={fun2}>change</button>

      {
        data.map((a)=>{
        return (a.name)
        })
      }
    </div>
  )
}

export default Count