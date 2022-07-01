import spinner from  '../assets/spinner.gif'
import React from 'react'

function Spinner() {
  return <img src={spinner} alt="Loading..."
  style={{width: '100px', margin: 'auto', 
    display: 'block'}} />
}

export default Spinner