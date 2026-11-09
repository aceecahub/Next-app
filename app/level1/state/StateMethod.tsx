"use client";
import { useState } from "react";

export default function StatePage() {
  const [count, setCount] = useState(0);
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <p className="text-2xl font-bold">Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>
    </div>
  );
}
