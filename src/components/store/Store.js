import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/products/productsAction'
import Product from '../products/Product'

export default function Store() {
    const productsState = useSelector(state => state.productsState)
    const dispatch = useDispatch()
    console.log(productsState);
    useEffect(() => {
        if (!productsState.products.length) dispatch(fetchProducts())
    } , [])

    return (
        <div className='mt-[70px]'>
            <div className='grid grid-cols-4 '>
                {
                    productsState.loading ? <p>Loading ...</p> :
                        productsState.error ? <p>Errr</p> :
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
