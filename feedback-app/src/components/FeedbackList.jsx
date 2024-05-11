import React from 'react'
import Feedbackitem from './Feedbackitem'

function FeedbackList({feedback}) {
 if (!feedback || feedback.length === 0) {
    return (
      <div>
        <h2>No feedback Yet</h2>
      </div>
    )
  }
  return (
    <div className='feedback-list'>
        {feedback.map((item) => (
            <Feedbackitem key={item.id} item={item} />
        ))}
           
        
    </div>
  )
}

export default FeedbackList