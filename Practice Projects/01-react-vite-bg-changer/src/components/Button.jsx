import React from 'react'

function Button({color="no Color", handleCange}) {
  return (
    <button className='mx-2' onClick={() => handleCange(color)}>
        {color.charAt(0).toUpperCase() + color.slice(1)}
    </button>
  )
}

export default Button