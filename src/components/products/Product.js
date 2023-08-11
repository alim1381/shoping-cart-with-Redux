import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { addToCart, decrease, increase, removeFromCart } from '../../redux/cart/cartAction'
import { quantityCount } from '../../helper/functions'
import trashLogo from '../../assets/svg/trash.svg'

export default function Product({item}) {
  
  const cartState = useSelector(state => state.cartState)
  const dispatch = useDispatch()
  return (
    <div className='m-8 p-5 border flex flex-col items-center justify-around rounded-lg hover:shadow-lg transition'>
        <img className='w-10/12 h-4/6' src={item.image} alt="product" />
        <h3 className='font-bold text-gray-700 mt-3'>{`${item.title.split(" ")[0]} ${item.title.split(" ")[1]}`}</h3>
        <p className='text-blue-500'>{item.price} $</p>
        <div className='w-full flex justify-between items-center'>
          <Link className='text-gray-700 font-medium' to={`/products/${item.id}`}>Detail</Link>
          {
            (!cartState.cart.find(i => i.id === item.id)) ? <button onClick={() => dispatch(addToCart(item))} className='p-2 bg-blue-700 text-white text-sm text-center rounded-md'>Add To Cart</button> :
            <div className='flex items-center'>
              {console.log(cartState)}
              {
                quantityCount(cartState , item.id) === 1 ?  
                // if
                <button onClick={() => dispatch(removeFromCart(item))} className='p-2 m-1 w-[35px] h-[36px] bg-blue-700 text-white text-sm text-center rounded-md'><img src={trashLogo} alt="trash" /></button> :
                // else
                <button onClick={() => dispatch(decrease(item))} className='p-2 m-1 w-[35px] h-[36px] bg-blue-700 text-white text-sm text-center rounded-md'>-</button>
              }
              <button onClick={() => dispatch(increase(item))} className='p-2 m-1 w-[35px] h-[36px] bg-blue-700 text-white text-sm text-center rounded-md'>+</button>
            </div>
          }
        </div>
    </div>
  )
}