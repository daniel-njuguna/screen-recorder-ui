import React, { useState, useEffect } from 'react';

function CountdownTimer({ seconds, onTimerEnd }) {
  const [time, setTime] = useState(seconds);

  useEffect(() => {
    const timer = setInterval(() => {
      if (time > 0) {
        setTime(time - 1);
      } else {
        clearInterval(timer);
        onTimerEnd();
      }
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, [time, onTimerEnd]);

  return (
    <div>
      <p>Recording starts in: {time} seconds</p>
    </div>
  );
}

export default CountdownTimer;
