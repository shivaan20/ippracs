import React from 'react'

const Football = () => {
    const shoot = () => {
        alert("Great Shot!");
      }
  return (
    <div>
       <button onClick={shoot}>Take the shot!</button>
    </div>
  )
}

export default Football