import {FaTimes} from 'react-icons/fa'
import React from 'react'
import Card from './Shared/Card'
import PropTypes from 'prop-types'

function Feedbackitem
({item, handleDelete}) {
    
  return (
    <Card /*reverse={true}*/>
        <div className='num-display'>{item.rating}</div>
        <button onClick={() => handleDelete(item.id)} 
        className='close'>
          <FaTimes color='purple' />
        </button>
        <div className='text-display'>{item.text}</div>
    </Card>
  )
}
Feedbackitem.propTypes= {
  item: PropTypes.object.isRequired,
}

export default Feedbackitem
