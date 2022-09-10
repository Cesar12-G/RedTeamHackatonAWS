import axios from "axios";
import { createContext, useState } from "react";

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [isAuth, setIsAuth] = useState(false)
  // const [loading, setLoading] = useState(false)
  const [token, setToken] = useState('')
  const [refreshToken, setRefreshToken] = useState('')

  async function createAccount (userDetails) {
    console.log(userDetails)
    // axios.get(baseURL, {
    //   headers: {
    //     Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyODMxODUyLCJpYXQiOjE2NjI4MzEyNTIsImp0aSI6IjU1OWRmN2YzODFhYzQ4NGRiMzI3MTQ4M2M5YWEwZTYxIiwidXNlcl9pZCI6M30.Lq4VSpLSQOyTObIYxAjr05W-fHwGEDI1VKo9_4t-O-4' //the token is a variable which holds the token
    //   }
    // }).then((response) => {
    //   if ('properites' in response.data) {
    //     setPost(response.data.properites);
    //   }
    // });
    return true 
  }

  async function login (userDetails) {
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