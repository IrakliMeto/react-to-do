import { useEffect, useState } from "react";
import "./DateTime.scss";

export const DateTime = () => {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const displayDateTime = currentTime.toLocaleString("en-US", options);

  return <div className="date-time">{displayDateTime}</div>;
};
