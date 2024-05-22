export const addToCart = (product) => {
    return (dispatch, getState) => {
        const { cart } = getState() 
        const updateItems = [...cart.items, product]
        dispatch({ type: 'ADD_TO_CART', payload: updateItems})
    }
}

export const removeFromCart = (index) => {
    return (dispatch, getState) => {
        const { cart } = getState()
        const updateItems = [...cart.items.slice(0, index), ...cart.items.slice(index + 1)]
        dispatch({ type: 'REMOVE_FROM_CART', payload: updateItems})
    }
}

export const increaseQuantity = (index) => {
    return (dispatch, getState) => {
        const { cart } = getState()
        const updateItems = [...cart.items]
        updateItems[index].quantity += 1
        dispatch({ type: 'INCREASE_QUANTITY', payload: updateItems})
    }
}

export const decreaseQuantity = (index) => {
    return (dispatch, getState) => {
        const { cart } = getState()
        const updateItems = [...cart.items]
        updateItems[index].quantity -= 1
        dispatch({ type: 'DECREASE_QUANTITY', payload: updateItems})
    }
}