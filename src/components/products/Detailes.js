import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

export default function Detailes() {
    const { id } = useParams()
    const navigate = useNavigate()
    const data = useSelector(state => state.productsState)    
    const item = data.products.find(e => e.id == id)
    return (
        <div className='mt-[90px] flex flex-col items-center'>
            <div className='m-8 min-w-[800px] p-5 border flex items-center justify-around rounded-lg hover:shadow-lg transition'>
                <img className='w-60' src={item.image} alt="product" />
                <div>
                    <h3 className='font-bold text-gray-700 mt-3'>{`${item.title.split(" ")[0]} ${item.title.split(" ")[1]}`}</h3>
                    <p className='max-w-sm'>{item.description}</p>
                </div>
                <p className='text-blue-500'>{item.price} $</p>
            </div>
            <button onClick={() => navigate(-1)} className='p-2 w-1/4 bg-blue-700 text-white text-sm text-center rounded-md'>Back</button> 
        </div>
    )
}