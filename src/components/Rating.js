import React, { useState } from 'react'
import './Rating.css'
import Card from './Card'
import image from '../images/icon-star.svg'

const Rating = ({rating, setRating, setShowPage}) => {
  const [activeRating, setActiveRating] = useState({
    oneStar:false,
    twoStar:false,
    threeStar:false,
    fourStar:false,
    fiveStar:false
  })

  const handleSubmit = ()=>{
    if(!rating) return;

    setShowPage(true)
}


  return (
    <Card>
     <div className='image'>
      <img src={image} alt="image"/>
     </div>
     <h2 className='title'>How did we do?</h2>
     <p className='text'>
         Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!
     </p>
     <div className='rating'>
     
       <div className={activeRating.oneStar ? 'rating-container active': 'rating-container'} onClick={()=>{
        setActiveRating({
            oneStar:true,
            twoStar:false,
            threeStar:false,
            fourStar:false,
            fiveStar:false
        })
        setRating(1)
       }}>1</div>

       <div className={activeRating.twoStar ? 'rating-container active': 'rating-container'} onClick={()=>{
        setActiveRating({
            oneStar:false,
            twoStar:true,
            threeStar:false,
            fourStar:false,
            fiveStar:false
        })
        setRating(2)
       }}>2</div>

       <div className={activeRating.threeStar ? 'rating-container active': 'rating-container'} onClick={()=>{
        setActiveRating({
            oneStar:false,
            twoStar:false,
            threeStar:true,
            fourStar:false,
            fiveStar:false
        })
        setRating(3)

       }}>3</div>

       <div className={activeRating.fourStar ? 'rating-container active': 'rating-container'} onClick={()=>{
        setActiveRating({
            oneStar:false,
            twoStar:false,
            threeStar:false,
            fourStar:true,
            fiveStar:false
        })
        setRating(4)

       }}>4</div>

       <div className={activeRating.fiveStar ? 'rating-container active': 'rating-container'} onClick={()=>{
        setActiveRating({
            oneStar:false,
            twoStar:false,
            threeStar:false,
            fourStar:false,
            fiveStar:true
        })
        setRating(5)

       }}>5</div>
      
     </div>

     <button className='submit-btn' onClick={handleSubmit}>Submit</button>
    </Card>
 )
}

export default Rating