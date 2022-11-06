import React, { useState } from 'react'
import Popup from './Popup'
import './Refs.scss'

const Refs = () => {

    const [showPopup,setShowPopup] = useState(false)

    const closePopup = () => {
        setShowPopup(false)
    }
  return (
    <div className='refs'>
      <button onClick={() => setShowPopup(true)}>Open Popup</button>

{showPopup && <Popup onClose={closePopup} />}
        
    </div>

  )
}

export default Refs