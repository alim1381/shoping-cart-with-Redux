const quantityCount = (state , id) => {
    const index = state.cart.findIndex((item) => item.id === id )
    
    if (index === -1) {
        return false
    } else {
        return state.cart[index].quantity
    }
}

export { quantityCount }