import React from 'react'
import GoogleMaps from "simple-react-google-maps"
import mapStyles from './mapStyles'

export const Map = () => {

  return (
    <div className="container">
      <GoogleMaps
        apiKey={"AIzaSyDhEPE9u4fkvaUt-EUxxxgFL3cEIf4UPRE"}
        style={{ height: "640px", width: "875px" }}
        defaultOptions={{ styles: mapStyles.lightTeal }}
        zoom={5}
        center={{
          lat: 24.1546232,
          lng: -98.1043418,

        }}
        markers={[
          { lat: 24.1546232, lng: -98.1043418 },
          { lat: 31.6540213, lng: -106.5191465 }
        ]}
      />
    </div>
  )
}
