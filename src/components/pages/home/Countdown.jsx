"use client";
import { useCallback, useEffect, useState } from "react";

const calculateTimeLeft = () => {
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 1);
  targetDate.setHours(0);
  targetDate.setMinutes(0);
  targetDate.setSeconds(0);

  const now = new Date().getTime();
  const difference = targetDate - now;

  let timeLeft = {
    hours: "00",
    minutes: "00",
    seconds: "00",
  };

  if (difference > 0) {
    timeLeft = {
      hours: String(Math.floor((difference / (1000 * 60 * 60)) % 24)).padStart(
        2,
        "0"
      ),
      minutes: String(Math.floor((difference / 1000 / 60) % 60)).padStart(
        2,
        "0"
      ),
      seconds: String(Math.floor((difference / 1000) % 60)).padStart(2, "0"),
    };
  }

  return timeLeft;
};

const Countdown = () => {
  const [countDownTime, setCountDownTime] = useState(calculateTimeLeft());

  const updateCountdown = useCallback(() => {
    setCountDownTime(calculateTimeLeft());
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateCountdown();
    }, 1000);

    return () => clearTimeout(timer);
  }, [countDownTime, updateCountdown]);

  return (
    <div className="flex justify-between max-w-screen-sm gap-2 mx-auto">
      {["Hours", "Minutes", "Seconds"].map((unit) => (
        <div key={unit} className="flip-card w-1/3 perspective-1000 relative">
          <div
            className="flip-card-inner transform transition-transform duration-500"
            style={{
              transformStyle: "preserve-3d",
              transform: `rotateX(${
                countDownTime[unit.toLowerCase()] % 2 === 0 ? 0 : 180
              }deg)`,
            }}
          >
            <div className="flip-card-front h-16 bg-black rounded-lg p-4"></div>
          </div>
          <div className="absolute top-1 left-8 lg:left-3 text-center text-white text-2xl font-bold">
            <span>{countDownTime[unit.toLowerCase()]}</span>
            <span className="text-sm block">{unit}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Countdown;
