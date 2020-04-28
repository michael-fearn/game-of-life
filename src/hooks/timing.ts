import { useState, useEffect } from "react";

export const useTiming = (getNextState: () => void) => {
  const [gameTicker, setGameTicker] = useState(0);
  const [speed, setSpeed] = useState(20);

  useEffect(() => {
    setTimeout(() => setGameTicker(gameTicker + 1), 10);
  }, [gameTicker]);

  useEffect(() => {
    if (!(gameTicker % speed)) {
      getNextState();
    }
  }, [gameTicker, speed]);

  return {
    speed,
    setSpeed,
  };
};
