
export function globalReducer (state, action) {
    const {
        type,
        payload
    } = action;

    switch(type) {
        case 'ADD_TO_BAG':
            const addedProduct = state.products.find(product => product.id === payload.id);
            let updatedCart = [...state.cart];
            updatedCart.push({
                ...addedProduct,
                qty: payload.qty
            })

            return {
                ...state,
                cart: updatedCart
            };
        
        case 'REMOVE_FROM_BAG': {
            const updatedCart = state.cart.filter(cartItem => cartItem.id !== payload.id);

            return {
                ...state,
                cart: updatedCart
            };
        };


        case 'ADD_TO_WISHLIST': {
            const addedProduct = state.products.find(product => product.id === payload.id);
            let updatedWishList= [...state.wishlist];
            updatedWishList.push({
                ...addedProduct,
                qty: payload.qty
            })

            return {
                ...state,
                wishlist: updatedWishList
            };
        };

        case 'REMOVE_FROM_WISHLIST': {
            const updatedWishList = state.wishlist.filter(WishListItem => WishListItem.id !== payload.id);

            return {
                ...state,
                wishlist: updatedWishList
            };
        };


        default:
            throw new Error(`Unhandled action type ${type}`);
    };
            
        
};

