import React, { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 2500); // 2.5 seconds wait

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      {!isLoaded && (
        <div id="loader">
          <div className="avatar"></div>
        </div>
      )}
      {isLoaded && (
        <iframe
          id="wordgus-frame"
          src="https://wordgus.vercel.app"
          allowFullScreen
          title="WordGus"
        />
      )}
    </div>
  );
}

export default App;
