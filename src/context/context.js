import React, {useContext, useReducer, useEffect } from 'react'
import cartItems from '../utilis/data'
import reducer from '../utilis/reducer'

const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext();

const initialState = {
  loading:false,
  cart:cartItems,
  total:0,
  amount:0
}

const AppProvider = ({ children }) => {
  //state = initialState
  const [state, dispatch] = useReducer(reducer,initialState);

  
  const clearCart = () => {
    dispatch( { type: 'CLEAR_CART' } )
  }

  const clearSingleElement = (id) => {
    dispatch( { type: 'CLEAR_SINGLE_ELEMENT', payload: id} )
  }

  const increaseAmount = (id) => {
    dispatch( { type: 'INCREASE_AMOUNT', payload: id } );
  }

  const decreaseAmount = (id) => {
    dispatch( { type: 'DECREASE_AMOUNT', payload: id } );
  }

  const fetchData = async () => {
    dispatch( {type: 'LOADING'});
    const response = await fetch(url);
    const cart = await response.json();
    dispatch({type: 'DISPLAY_ITEMS', payload: cart}) 
  }

  const toggleAmount = (id,type) => {
    dispatch({type:'TOGGLE_AMOUNT', payload:{id, type}})
  }

  useEffect( ()=> {
    fetchData();
  },[])

  useEffect( () => {
    dispatch( {type: 'GET_TOTAL'});
  },[state.cart])

  return (
    <AppContext.Provider
      value={{
       ...state,
       clearCart,
       clearSingleElement,
       increaseAmount,
       decreaseAmount,
       toggleAmount
      }}
    >
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }
