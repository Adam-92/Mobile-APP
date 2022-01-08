const reducer = (state,action) => {
    
    /* Clear the cart */
    if(action.type === 'CLEAR_CART')
    {   
       return {...state, cart:[]}

                       /*  state = {
                            loading:false,
                            cart:[],
                            total:0,
                            amount:0
                        } */
    }
    /* Clear single item */

    if(action.type === 'CLEAR_SINGLE_ELEMENT')
    {
      const newArray =  state.cart.filter( (item) => item.id !== action.payload ); 
      return {...state, cart:newArray};
    }
    /* Summerize the amount */

    if(action.type === 'GET_TOTAL')
    {
       let {total, amount} = state.cart.reduce( 

       (cartTotal, cartItem ) => {
           const {amount,price} = cartItem;
           const itemTotal = amount * price;
           cartTotal.amount += amount;
           cartTotal.total += itemTotal;
           return cartTotal;
       }, 

            {
                total: 0,
                amount: 0
            }
       )
       total = parseFloat(total.toFixed(2))
       return {...state, total, amount}
    }
    /* Loading the screen */

    if(action.type === 'LOADING')
    {
        return {...state, loading: true};
    }
    if(action.type === 'DISPLAY_ITEMS')
    {
        return {...state, cart: action.payload, loading:false }
    }
    /* Increase/decrease the items */

    if(action.type === 'TOGGLE_AMOUNT'){
        let tempCart = state.cart.map( (cartItem) => {
            if(cartItem.id === action.payload.id){
               if(action.payload.type === 'increase'){
                    const {amount} = cartItem;
                    return {...cartItem, amount: amount + 1} 
               }
               if(action.payload.type === 'decrease'){
                    const {amount} = cartItem;
                    return {...cartItem, amount: amount - 1} 
               }  
            }
            return cartItem;
        })
        .filter( item => item.amount !== 0)

        return {...state, cart:tempCart}
    }
    
    throw new Error('no assigned action in reduce');
}

export default reducer;