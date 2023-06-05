export const initialState = {
    cart : [],
    user: null
}

const reducer = (state, action) => {
    console.log(action, state);
    switch(action.type) {
        case 'ADD_TO_CART':
            // Logic for adding to cart
            return { ...state,
                    cart: [...state.cart, action.item]
                }
        case 'REMOVE_FROM_CART':
            // Logic from removing from cart
            return { state, cart:[] }
        default:
            return state;
    }
}

export default reducer;