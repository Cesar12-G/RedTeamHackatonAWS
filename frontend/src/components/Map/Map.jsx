import { useState, useEffect } from "react"
import GoogleMaps from "simple-react-google-maps"
import mapStyles from './mapStyles'
import useApi from '../hooks/useApi'

export const Map = () => {

  const api = useApi()

  useEffect(()=> {
      const resp = api.getLocations()
  },[])

  return (
    <div className="container">
      <GoogleMaps
        apiKey={"AIzaSyDhEPE9u4fkvaUt-EUxxxgFL3cEIf4UPRE"}
        style={{ height: "80vh", width: "110vh" }}
        defaultOptions={{ styles: mapStyles.lightTeal }}
        zoom={5}
        center={{
          lat: 24.1546232,
          lng: -98.1043418,

        }}
        markers={api.locations}
      />
    </div>
  )
}
