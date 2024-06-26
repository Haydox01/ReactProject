import React from 'react'
import Feedbackitem from './Feedbackitem'
import PropTypes from 'prop-types'

function FeedbackList({feedback, handleDelete}) {
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
            <Feedbackitem key={item.id}
             item={item}
              handleDelete={handleDelete} />
        ))}
           
        
    </div>
  )
}
FeedbackList.propTypes={
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
}

export default FeedbackList