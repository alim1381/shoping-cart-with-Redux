import axios from "axios"

const fetchProductsRequest = () => {
    return {
        type : "FETCH_PRODUCTS_REQUEST",
    }
}

const fetchProductsSuccess = (products) => {
    return {
        type : "FETCH_PRODUCTS_SUCCESS",
        payload : products,
    }
}

const fetchProductsFailure = (err) => {
    return {
        type : "FETCH_PRODUCTS_FAILURE",
        payload : err,
    }
}

const fetchProducts = () => {
    return (dispatch) => {
        dispatch(fetchProductsRequest())
        axios.get("https://fakestoreapi.com/products")
            .then((res) => {
                dispatch(fetchProductsSuccess(res.data))
            })
            .catch((err) => {
                dispatch(fetchProductsFailure(err))
            })
    }
}

export { fetchProducts }