"use client";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";
import { useMemo } from "react";

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY, // Add your API key here
  });

  const center = useMemo(() => ({ lat: 37.7749, lng: -122.4194 }), []);

  if (!isLoaded) return <div>Loading...</div>;
  return (
    <GoogleMap
      mapcontainerrStyle={{ width: "100%", height: "208px", maxWidth: "412px" }}
      center={center}
      zoom={10}
    >
      <Marker position={center} />
    </GoogleMap>
  );
};

export default Map;
