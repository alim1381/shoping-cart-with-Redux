import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { quantityCount } from '../../helper/functions'
import { checkout, clear, decrease, increase, removeFromCart } from '../../redux/cart/cartAction'
import trashLogo from '../../assets/svg/trash.svg'
import { Link } from 'react-router-dom'

export default function Cart() {
    const data = useSelector(state => state.cartState)
    const dispatch = useDispatch()
    return (
        <main className='mt-[80px] flex max-lg:flex-col max-lg:justify-center max-lg:items-center '>
            <div className='w-2/3 p-7 max-lg:w-full'>
                {
                    data.cart.map(item => (
                        <div className='border flex justify-around items-center p-2 m-3 rounded-md max-sm:flex-col'>
                            <img className='w-32' src={item.image} alt="item" />
                            <div className='text-center'>
                                <h3 className='font-bold text-gray-700 mt-3'>{`${item.title.split(" ")[0]} ${item.title.split(" ")[1]}`}</h3>
                                <p className='max-w-sm'><span className='text-blue-700'>{item.price} $</span> * <span className='text-yellow-500'>{item.quantity}</span></p>
                            </div>
                            <div className='flex items-center'>
                                {console.log(data)}
                                {
                                    quantityCount(data , item.id) === 1 ?  
                                    // if
                                    <button onClick={() => dispatch(removeFromCart(item))} className='p-2 m-1 w-[35px] h-[36px] bg-blue-700 text-white text-sm text-center rounded-md'><img src={trashLogo} alt="trash" /></button> :
                                    // else
                                    <button onClick={() => dispatch(decrease(item))} className='p-2 m-1 w-[35px] h-[36px] bg-blue-700 text-white text-sm text-center rounded-md'>-</button>
                                }
                                <button onClick={() => dispatch(increase(item))} className='p-2 m-1 w-[35px] h-[36px] bg-blue-700 text-white text-sm text-center rounded-md'>+</button>
                            </div>
                        </div>
                    ))
                }
            </div>
            <div className='w-1/3 max-lg:w-full p-7'>
                <div className='border flex flex-col justify-around items-center p-3 m-3 rounded-md' >
                    <h2 className='font-bold text-gray-700'>Total</h2>
                    {
                        data.checkout ?
                            <div className='w-full'>
                                <p className='font-bold text-gray-700 p-1 text-center'>Thanks for Your Shopping</p>
                            </div>
                            :
                            <div className='w-full'>
                                <p className='font-bold text-gray-700 p-1'>Total Price : <span className='text-blue-700 font-medium'>{data.total} $</span></p>
                                <p className='font-bold text-gray-700 p-1'>Total Counter : <span className='text-blue-700 font-medium'>{data.itemCounter}</span></p>
                            </div>
                    }
                    {
                        data.checkout ?
                            <Link to={`/producs`} className='p-2 w-full bg-blue-700 text-white text-sm text-center m-1 rounded-md'>Buy More</Link>
                            :                               
                            data.itemCounter > 0 ? 
                                <div className='w-full flex max-sm:flex-col'>
                                    <button onClick={() => dispatch(clear())} className='p-2 w-1/2 max-sm:w-full bg-blue-700 text-white text-sm text-center m-1 rounded-md'>Clear</button>
                                    <button onClick={() => dispatch(checkout())} className='p-2 w-1/2 max-sm:w-full bg-blue-700 text-white text-sm text-center m-1 rounded-md'>Check Out</button>
                                </div>        
                                :
                                <Link to={`/producs`} className='p-2 w-full bg-blue-700 text-white text-sm text-center m-1 rounded-md'>Go To Shop</Link>
                    }
                </div>
            </div>
        </main>
    )
}
