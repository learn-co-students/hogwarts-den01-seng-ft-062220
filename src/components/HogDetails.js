import React from 'react'

const HogDetails = ({ hog }) => {
  return (
    <div className='description'>
      <p>{hog.greased ? "Greased" : "Not Greased"}</p>
      <p>Weight: {hog.weight}</p>
      <p>Highest Medal Achieved: {hog['highest medal achieved']}</p>
    </div>
  )
}

export default HogDetails