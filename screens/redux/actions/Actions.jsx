
export const addItemToCart = data=>({
    type: 'ADD_TO_CART',
    payload: data,
});

export const removeFromCart=index=>({
    type: 'REMOVE_FROM_CART',
    payload: index,
})

export const addToWishlist=data=>({
    type: 'ADD_TO_WISHLIST',
    payload: data,
})

export const removeFromWishlist=index=>({
    type: 'REMOVE_FROM_WISHLIST',
    payload: index,
})
