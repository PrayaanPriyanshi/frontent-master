import React from 'react'
import './Videolink.css'

const Videolink = () => {
  return (
    <div className="video-container">
      <iframe
        title="YouTube Video"
        width="560"
        height="315"
        src="https://www.youtube.com/embed/xwdFJ2gs0GA"
        frameBorder="0"
        allowFullScreen
      ></iframe>
    </div>
  )
}

export default Videolink
