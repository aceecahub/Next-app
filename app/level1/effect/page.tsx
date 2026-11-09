"use client";

import { useEffect, useState } from "react";

import MyTimer from "./Timer";
import Referensi from "./Referensi";
import Combo from "./Combo";

export default function EffectPage() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`${count}`);
  }, [count]);

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Effect Example</h1>
      <p>Count: {count}</p>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count + 1)}
      >
        +
      </button>
      <button
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => setCount(count - 1)}
      >
        -
      </button>

      {/* <MyTimer /> */}
      {/* <Referensi /> */}
      <Combo />
    </div>
  );
}
