import { createContext, useReducer } from 'react'
import UserReducer from './UserReducer'
const UsersContext = createContext()

export const UsersProvider = ({ children }) => {
  const initUser = {
    users: [],
    user:{},
    isLoading: false,
  }
  const [state, dispatch] = useReducer(UserReducer, initUser)
  return (
    <UsersContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </UsersContext.Provider>
  )
}

export default UsersContext
