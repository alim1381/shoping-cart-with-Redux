import React from 'react'
import err from '../../assets/gif/err.gif'

export default function Error() {
  return (
    <div className='w-full h-[100vh] fixed flex justify-center items-center'>
        <img className='w-52' src={err} alt="loader" />
    </div>
  )
}
