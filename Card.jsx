//rfce
import React from 'react'

let title="Welcome "
let description ="this is my discription"
function Card(props) {
  return (
    <div>
        <h1>{props.title}</h1>
        <p>{description}</p>
        </div>
  )
}

export default Card