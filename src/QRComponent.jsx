import React from 'react'
import './QRComponent.css'

const qr = require('./assets/image-qr-code.png')

const QRComponent = () => {
  return (
    <div className='app__qrcomponent'>
        <img src={qr} alt='qr code' />
        <h1>Improve your front-end skills by building projects</h1>
        <p>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
    </div>
  )
}

export default QRComponent