const initialState = {
    items: [],
}


export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {...state, items: [...state.items, action.payload]}
        case 'REMOVE_FROM_CART':
            return {...state,items:action.payload}
        case 'INCREASE_QUANTITY':
            return {...state,items:action.payload}
        case 'DECREASE_QUANTITY':
            return {...state,items:action.payload}
        default:
            return state
    }
}

