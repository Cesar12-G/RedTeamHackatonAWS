import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext()

const baseURL = 'http://127.0.0.1:8000/api/'

const endpoints = {
  createAccount: 'account/register/',
  getToken: 'token/',
}

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)
  const [token, setToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')
  const [createAccountResponse, setCreateAccountResponse ] = useState({})

  async function createAccount (userDetails) {
    console.log(userDetails)
    axios.post(baseURL + endpoints.createAccount, userDetails).then((response) => {
      setCreateAccountResponse(response)
    });
    return true
  }

  async function login (userDetails) {
    axios.post(baseURL + endpoints.getToken, userDetails).then((response) => {
      setToken(response.data.access)
      refreshToken(response.data.refresh)
    });
    return true
  }

  const contextValue = {
    user,
    isAuth,
    token,
    refreshToken,
    login,
    createAccount
  }
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthProvider