import React from 'react'
import Card from './Card'
import './Selected.css'
import image from '../images/illustration-thank-you.svg'

const Selected = ({rating}) => {
  return (
    <Card>
      <div className='thank-img'>
       <img src={image} alt="thank-img"/>
      </div>

      <div className='selected'>
       <p>You selected {rating} out of 5</p>
      </div>

      <h2 className='title'>
       Thank You
      </h2>

      <p className='text'>
      We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!
      </p>
    </Card>
  )
}

export default Selected 