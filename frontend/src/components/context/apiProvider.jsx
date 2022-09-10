import axios from "axios";
import { createContext, useState } from "react";

export const ApiContext = createContext()
const baseURL = "http://127.0.0.1:8000/api/property/";

const ApiProvider = ({ children }) => {
  const [properties, setProperties] = useState([])

  async function getProperties(userDetails) {
    // axios.get(baseURL, {
    //   headers: {
    //     Authorization: 'Bearer ' + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjYyODMxODUyLCJpYXQiOjE2NjI4MzEyNTIsImp0aSI6IjU1OWRmN2YzODFhYzQ4NGRiMzI3MTQ4M2M5YWEwZTYxIiwidXNlcl9pZCI6M30.Lq4VSpLSQOyTObIYxAjr05W-fHwGEDI1VKo9_4t-O-4' //the token is a variable which holds the token
    //   }
    // }).then((response) => {
    //   if ('properites' in response.data) {
    //     setPost(response.data.properites);
    //   }
    // });
    return []
  }

  const contextValue = {
    properties,
    getProperties
  }
  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
}

export default ApiProvider