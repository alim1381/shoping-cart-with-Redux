import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchProducts } from '../../redux/products/productsAction'

export default function Store() {
    const products = useSelector(state => state.productsState)
    const dispatch = useDispatch()
    console.log(products);
    useEffect(() => {
        dispatch(fetchProducts())
    } , [])

    return (
        <div>
            <div>
                
            </div>
        </div>
    )
}
