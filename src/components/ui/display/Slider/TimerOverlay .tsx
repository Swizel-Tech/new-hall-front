import React, { useEffect, useState } from "react";

interface TimerOverlayProps {
  autoplaySpeed: number;
}

const TimerOverlay: React.FC<TimerOverlayProps> = ({ autoplaySpeed }) => {
  const [timeLeft, setTimeLeft] = useState(autoplaySpeed / 1000);

  useEffect(() => {
    const timerId = setInterval(() => {
      setTimeLeft((prevTime) =>
        prevTime > 0 ? prevTime - 1 : autoplaySpeed / 1000
      );
    }, 1000);

    return () => clearInterval(timerId);
  }, [autoplaySpeed]);

  return <div className="timer-overlay ">{timeLeft} s</div>;
};

export default TimerOverlay;
