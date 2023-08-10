import React from 'react'
import { Link } from 'react-router-dom'

// svg
import magnifying from '../../assets/svg/magnifying.svg'
import cart from '../../assets/svg/cart.svg'
import { useSelector } from 'react-redux'

export default function Navbar() {
    const cartState = useSelector(state => state.cartState)
  return (
    <header className='w-full bg-000 fixed top-0 z-5 backdrop-blur-lg border-b-[1px] border-gray-100'>
        <nav className='flex w-full container-4xl-w mx-auto pos-relative px-4-md grow-1'>
            <div className='w-full py-5 flex pos-relative z-2 justify-between'>
                <div className='flex flex-1 grow-1'>
                    <Link className='ml-5 shrink-0 text-center flex items-center'>
                        <div style={{width: "115px" , height: "30px"}}>
                            <h2 className='font-bold text-xl text-center text-blue-700	'>SHOPING</h2>
                        </div>
                    </Link>
                    <div className='w-96 relative bg-[#f1f2f4] rounded flex items-center p-1'>
                        <input className='w-full bg-inherit	rounded focus:outline-none p-1 pl-8 text-gray-500' type="text" />
                        <img className='absolute w-6' src={magnifying} alt='magnifying' />
                    </div>
                </div>
                <div className='flex'>
                    <Link>
                        <div className='relative flex p-1 mr-8'>
                            <img className='w-8' src={cart} alt='cart' />
                            <span className='absolute right-0 text-center text-xs bg-blue-700 p-1 rounded-[50%] text-white flex justify-center items-center' style={{width : "20px" , height : "20px"}}>{cartState.itemCounter}</span>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    </header>
  )
}
