import { useGSAP } from '@gsap/react'
import React from 'react'
function  Video() {

  return (
    <div  className='h-full object-cover w-full '>
      <video autoPlay muted loop className='object-cover h-full w-full'  src="https://player.vimeo.com/progressive_redirect/playback/899938964/rendition/1080p/file.mp4?loc=external&log_user=0&signature=6a2cb0320d09d02dcfdfa2ad504c89a510e6d93d55e9060b1b55d680fa2e2be9"></video>
    </div>
  )
}

export default Video