import { useState, useEffect } from "react";

const LocalTime = () => {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const caliTime = now.toLocaleTimeString("en-US", {
        timeZone: "America/Bogota",
        hour12: true,
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      });
      setCurrentTime(caliTime);
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex gap-2">
      <p className="text-gray-600 text-sm">CALI, COLOMBIA (GMT-5)</p>
      <p className="text-sm">{currentTime}</p>
    </div>
  );
};

export default LocalTime;
