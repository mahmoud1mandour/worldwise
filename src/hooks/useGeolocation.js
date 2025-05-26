import { useState } from "react";

export function useGeolocaton(defaultPosition = null) {
  const [position, setPosition] = useState(defaultPosition);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  function getLocation() {
    if (!navigator.geolocation)
      return setError("Your browser does not support geolocation");
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setPosition({ lat: pos.coords.lat, lng: pos.coords.lng });
        setIsLoading(true);
      },
      (error) => {
        setError(error.message);
        setIsLoading(false);
      }
    );
  }

  return { position, error, isLoading, getLocation };
}
