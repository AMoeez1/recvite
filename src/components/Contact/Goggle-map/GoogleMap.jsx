import React, { useState, useEffect } from "react";
import { GoogleMap, Marker } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "400px",
};

const center = {
  lat: 40.712776,
  lng: -74.005974,
};

const GoogleMapSection = () => {
  const [map, setMap] = useState(null);
  const [scriptLoaded, setScriptLoaded] = useState(false);

  useEffect(() => {
    const loadGoogleMapScript = () => {
      if (!window.google) {
        const script = document.createElement("script");
        script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyA-CE0deH3Jhj6GN4YvdCFZS7DpbXexzGU`;
        script.async = true;
        script.defer = true;
        script.onload = () => setScriptLoaded(true);
        document.head.appendChild(script);
      } else {
        setScriptLoaded(true);
      }
    };

    loadGoogleMapScript();
  }, []);

  const onLoad = React.useCallback((map) => {
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(() => {
    setMap(null);
  }, []);

  if (!scriptLoaded) {
    return <div>Loading map...</div>;
  }

  return (
    <section className="google-map-section">
      <div className="map-inner">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={12}
          onLoad={onLoad}
          onUnmount={onUnmount}
        >
          <Marker
            position={center}
            icon={{
              url: "assets/images/icons/map-marker.png",
              scaledSize: new window.google.maps.Size(40, 40),
            }}
          />
        </GoogleMap>
      </div>
    </section>
  );
};

export default GoogleMapSection;
