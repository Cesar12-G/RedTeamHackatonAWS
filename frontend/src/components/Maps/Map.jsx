import React from 'react'
import GoogleMaps from "simple-react-google-maps"

export const Map = () => {
  return (
    <div className="container">
      <GoogleMaps
        apiKey={"AIzaSyDhEPE9u4fkvaUt-EUxxxgFL3cEIf4UPRE"}
        style={{height: "600px", width: "850px" }}
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
