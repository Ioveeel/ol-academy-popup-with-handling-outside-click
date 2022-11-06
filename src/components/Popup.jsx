import React, { useEffect, useRef } from 'react'
import './Popup.scss'

const Popup = ({onClose}) => {
  const popupRef = useRef(null)

  useEffect(() => {
    const handleClick = e => {
      if(popupRef.current !== null) {
        if(!popupRef.current.contains(e.target)) {
          onClose()
        }
      }
    }
    document.addEventListener('click',handleClick)

    return function cleanUp() {
      document.removeEventListener('click',handleClick)
    }
  },[])

  return (
    <div className='popup'>
        <div className="popup-inner" ref={popupRef}>
            <h1>Popup is opened</h1>
            <p>popup text</p>
            <button onClick={onClose}>Close</button>
        </div>
    </div>
  )
}

export default Popup