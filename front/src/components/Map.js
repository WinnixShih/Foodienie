import {useState, useEffect} from 'react';
import { GoogleMap, LoadScript } from "@react-google-maps/api";
const api_key = process.env.GOOGLE_MAPS_API_KEY;

const containerStyle = {
  width: "100%",
  height: "500px",
};


const MapComponent = () => {
  const [center, setCenter] = useState({ lat: 25.033964, lng: 121.564468 });

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCenter({
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          });
        },
        (error) => console.error(error)
      );
    }
  }, []);

  return (
    <LoadScript googleMapsApiKey={api_key}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={15} />
    </LoadScript>
  );
};

export default MapComponent;
