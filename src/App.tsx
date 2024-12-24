import React, { useEffect, useRef } from 'react';
import { Fireworks } from 'fireworks-js'; // Import Fireworks directly
import './App.css';

const App: React.FC = () => {
  const fireworksRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (fireworksRef.current) {
      // Initialize fireworks directly
      const options = {
        speed: 3,
        particles: 500,
        acceleration: 5,
        friction: 0.95,
        gravity: 0.3,
        trace: 7,
        explosion: 5,
      };

      const fireworks = new Fireworks(fireworksRef.current, options as any); // Assert 'any' for TypeScript
      fireworks.start();

      return () => fireworks.stop(); // Cleanup on unmount
    }
  }, []);

  return (
    <div className="fireworks" ref={fireworksRef}>
      
    </div>
  );
};

export default App;
