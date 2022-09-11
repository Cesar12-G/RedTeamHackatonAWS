import axios from "axios";
import { createContext, useState } from "react";

export const ApiContext = createContext()

const baseURL = 'http://127.0.0.1:8000/api/'

const endpoints = {
  properties: 'property/'
}

const ApiProvider = ({ children }) => {
  const [properties, setProperties] = useState([])
  const [locations, setLocations] = useState([])
  const [currentProperty, setCurrentProperty] = useState({})

  async function getProperties() {
    axios.get(baseURL + endpoints.properties).then((response) => {
      if (response.data.message == 'Properties found') {
        setProperties(response.data.properties);
      }
    });
    return []
  }

  async function getLocations() {
    axios.get(baseURL + endpoints.properties).then((response) => {
      if (response.data.message == 'Properties found') {
        const properties = response.data.properties
        const locations = [];
        properties.forEach(property => {
          let picked = (({ lat, lng, id }) => ({ lat, lng, id }))(property);
          locations.push(picked);
        });
        console.log(locations)
        setLocations(locations);
      }
    });
    return []
  }

  async function getPropertyDetailsById(id) {
    axios.get(baseURL + endpoints.properties + id).then((response) => {
      console.log(response.data)
      if (response.data.message == 'Property found') {
        setCurrentProperty(response.data.property);
      }
    });
    return []
  }

  const contextValue = {
    properties,
    locations,
    currentProperty,
    getProperties,
    getLocations,
    getPropertyDetailsById
  }
  return <ApiContext.Provider value={contextValue}>{children}</ApiContext.Provider>
}

export default ApiProvider