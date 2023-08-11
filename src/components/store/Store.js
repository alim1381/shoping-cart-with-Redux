import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/products/productsAction'
import Product from '../products/Product'
import Loader from '../Loader/Loader'
import Error from '../404/404'

export default function Store() {
    const productsState = useSelector(state => state.productsState)
    const dispatch = useDispatch()
    console.log(productsState);
    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts())
    } , [])

    return (
        <div className='mt-[70px]'>
            <div className='grid grid-cols-4 max-lg:grid-cols-3 max-md:grid-cols-2 max-sm:grid-cols-1 '>
                {
                    productsState.loading ? <Loader /> :
                        productsState.error ? <Error /> :
                            productsState.products.map(item =>{
                                return (
                                    <Product
                                        key={item.id}
                                        item={item}
                                    />
                                )
                            })
                }
            </div>
        </div>
    )
}
