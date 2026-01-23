import { useEffect } from "react";

export default function Timer({ time, setTime, onTimeUp }) {
  useEffect(() => {
    if (time === 0) {
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTime((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [time, setTime, onTimeUp]);

  return (
    <p className="text-red-600 font-semibold">
      Time Left: {time}s
    </p>
  );
}