"use client";

import { useState } from "react";

export default function SubmitPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert(`Selamat Anda Berhasil Login, ${username}`);
  }

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Submit Example</h1>
      <form onSubmit={handleSubmit}>
        <div className="flex w-full max-w-md flex-col gap-2">
          <label htmlFor="username" className="font-semibold">
            Username
          </label>
          <input
            id="username"
            type="text"
            placeholder="Masukkan username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <div className="flex w-full max-w-md flex-col gap-2">
          <label htmlFor="password" className="font-semibold">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="Masukkan password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
            className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
          />
        </div>

        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          type="submit"
        >
          Submit
        </button>
      </form>
    </main>
  );
}
