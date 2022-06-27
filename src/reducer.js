export const initialState = {
    cart : []
}

const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TO_CART':
            // Logic for adding to cart
            break;
        case 'REMOVE_FROM_CART':
            // Logic from removing from cart
            break;
        default:
            return state;
    }
}

export default reducer;