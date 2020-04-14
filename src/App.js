import React, { useEffect, useState } from "react";
import "./App.css";
import useCurrentLocation from "./hooks/useCurrentLocation";
import useWatchLocation from "./hooks/useWatchLocation";
import { geolocationOptions } from "./constants/geolocationOptions";
import Location from "./components/Location";

function App() {
  const { location: currentLocation, error: currentError } = useCurrentLocation(geolocationOptions);
  const { location, cancelLocationWatch, error } = useWatchLocation(geolocationOptions);
  const [isWatchinForLocation, setIsWatchForLocation] = useState(true);

  useEffect(() => {
    if (!location) return;

    // Cancel location watch after 3sec
    setTimeout(() => {
      cancelLocationWatch();
      setIsWatchForLocation(false);
    }, 3000);
  }, [location, cancelLocationWatch]);

  return (
    <div className="appContainer">
      <header>
        <h1>HTML Geolocation API with React Hooks</h1>
      </header>
      <p>Current position:</p>
      <Location location={currentLocation} error={currentError} />

      <p>Watch position: (Status: {isWatchinForLocation.toString()})</p>
      <Location location={location} error={error} />
    </div>
  );
}

export default App;
