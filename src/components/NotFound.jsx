import React from 'react'
import Pika from '../assets/pikachu-running.gif'
const NotFound = () => {
  return (
    <div className='NotFound'>
        <p>We couldn't find anything, try again</p>
        <img src={Pika} alt="" />
    </div>
  )
}

export default NotFound