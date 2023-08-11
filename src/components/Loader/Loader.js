import React from 'react'
import loaderGif from '../../assets/gif/loader.gif'

export default function Loader() {
  return (
    <div className='w-full h-[100vh] fixed flex justify-center items-center'>
        <img className='' src={loaderGif} alt="loader" />
    </div>
  )
}
