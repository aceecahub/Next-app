"use client";

import { useRef } from "react";

export default function Referensi() {
  const inputRef = useRef<HTMLInputElement>(null);

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Referensi Example</h1>
      <input
        ref={inputRef}
        type="text"
        placeholder="Klik tombol untuk fokus"
        className="border border-gray-300 p-2 rounded"
      />
      <button
        onClick={handleFocus}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Fokus Input
      </button>
      <button
        onClick={handleClear}
        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
      >
        Bersihkan Input
      </button>
    </div>
  );
}
