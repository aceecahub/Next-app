"use client";
import SubmitPage from "./submit";
import InputPage from "./input";
import { useState } from "react";

export default function EventPage() {
  const [name, setName] = useState("");

  function sapaClick() {
    alert("Hallo Echa");
  }
  function nameClick(name: string) {
    setName(name);
  }

  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <h1 className="text-3xl font-bold">Event Example</h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={sapaClick}
      >
        Click Me
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
        onClick={() => nameClick("Echa Muhammad Roffy Yandi")}
      >
        Show Name
      </button>
      {name && <p className="text-2xl font-bold">Hallo {name}</p>}

        {/* <InputPage /> */}

        <SubmitPage />
    </div>
  );
}
