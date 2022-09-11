import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext()

const baseURL = 'http://127.0.0.1:8000/api/'

const endpoints = {
  createAccount: 'account/register/',
  getUserData: 'account/user/',
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
      setRefreshToken(response.data.refresh)
      setIsAuth(true)

      // Set localstorage
      localStorage.setItem('a_token', response.data.access)
      localStorage.setItem('r_token', response.data.refresh)
    });
    return true
  }

  function getTokens(){
    let tokens = {
      "a_token": "",
      "r_token": ""
    }
    if(localStorage.getItem('a_token') != null){
      tokens = setTokens(localStorage.getItem('a_token'),localStorage.getItem('r_token'))
    }

    return tokens
  }

  function setTokens(access, refresh){
    return {
      "a_token": access,
      "r_token": refresh
    }
  }

  async function getUserData (tokens) {
    axios.get(baseURL + endpoints.getUserData, {
      headers: {
        'Authorization': `Bearer ${tokens.a_token}`
      }
    })
    .then((response) => {
      setUser(response.data)
      setIsAuth(true)
    })

    return true
  }

  const contextValue = {
    user,
    isAuth,
    token,
    refreshToken,
    login,
    createAccount,
    getUserData,
    getTokens
  }
  return <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
}

export default AuthProvider