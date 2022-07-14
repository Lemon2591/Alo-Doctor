import React from 'react'
import ErrorPhoto from './assets/img/404.jpg'
import './AppDoctor.css'

function HomeDoctor() {
  return (  
    <div className='error404'>
        <img src={ErrorPhoto}></img>
    </div>
  )
}

export default HomeDoctor
