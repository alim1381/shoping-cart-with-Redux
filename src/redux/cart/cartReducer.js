const initialState = {
    cart : [],
    itemCounter : 0,
    total : 0,
    checkout : false
}

const sumItem = item => {
    const itemCounter = item.reduce((total , product) => total + product.quantity , 0);
    const total = item.reduce((total , product) => total + product.price * product.quantity , 0).toFixed(2);
    return {itemCounter , total}
}

const cartReducer = (state = initialState , action) => {
    switch(action.type) {
        case "ADD_TO_CART" :
            if (!state.cart.find(item => item.id === action.payload.id)) {
                const arry = state.cart

                arry.push({
                    ...action.payload,
                    quantity : 1
                })
                return {
                    ...state,
                    cart : arry,
                    ...sumItem(state.cart),
                    checkout : false
                }
            } else {
                return state ;
            }
        case "REMOVE_FROM_CART" :
            const newCart = state.cart.filter(item => item.id !== action.payload.id)
            return {
                ...state,
                cart : newCart,
                ...sumItem(newCart)
                
            }
        case "INCREASE" :
            const indexI = state.cart.findIndex(i => i.id === action.payload.id)
            state.cart[indexI].quantity ++ ;
            return {
                ...state,
                ...sumItem(state.cart)
            }
        case "DECREASE" :
            const indexD = state.cart.findIndex(i => i.id === action.payload.id)
            state.cart[indexD].quantity -- ;
            return {
                ...state,
                ...sumItem(state.cart)
            }
        default :
            return state ;
    }
}

export default cartReducer ;