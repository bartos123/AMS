import { useState, useEffect } from 'react';

export const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex flex-col font-mono font-bold">
      {time.toLocaleTimeString("cs-CZ")}
    </div>
  );
};