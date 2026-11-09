"use client";

import { useEffect, useState } from "react";

export default function MyTimer() {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;
    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Timer Example</h1>
      <p>Seconds: {seconds}</p>
      <button
        disabled={isRunning}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsRunning(true)}
      >
        Mulai Timer
      </button>
      <button
        disabled={!isRunning}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setIsRunning(false)}
      >
        Stop Timer
      </button>
      <button
        className="bg-slate-500 hover:bg-slate-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => {
          setIsRunning(false);
          setSeconds(0);
        }}
      >
        Reset Timer
      </button>
    </div>
  );
}
