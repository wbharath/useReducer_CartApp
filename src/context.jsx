import { useEffect } from 'react'
import { createContext } from 'react'
import { useReducer } from 'react'
import { useContext } from 'react'
import reducer from './reducer'
import {
  CLEAR_CART,
  REMOVE,
  INCREASE,
  DECREASE,
  LOADING,
  DISPLAY_ITEMS
} from './actions'
import cartItems from './data'


const AppContext = createContext()

const defaultState = {
  loading: false,
  cart: new Map(cartItems.map((item)=> [item.id, item])),
}
export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState)

  return (
    <AppContext.Provider value={{ ...state }}>{children}</AppContext.Provider>
  )
}

export const useGlobalContext = () => {
  return useContext(AppContext)
}
