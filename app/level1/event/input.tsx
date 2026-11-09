"use client";

import { useState } from "react";

export default function InputPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Input Example</h1>
      <div className="flex w-full max-w-md flex-col gap-2">
        <label htmlFor="username" className="font-semibold">
          Nama Lengkap
        </label>

        <input
          onChange={(event) => setName(event.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />

        {name ? (
          <p>Nama: {name}</p>
        ) : (
          <p className="text-red-500">Nama belum diisi</p>
        )}
      </div>

      <div className="flex w-full max-w-md flex-col gap-2">
        <label htmlFor="username" className="font-semibold">
          Username
        </label>

        <input
          id="username"
          type="text"
          placeholder="Masukkan nama lengkap"
          value={username}
          onChange={(event) => setUsername(event.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />

        {username ? (
          <p>Nama: {username}</p>
        ) : (
          <p className="text-red-500">Nama belum diisi</p>
        )}
      </div>

      <div className="flex w-full max-w-md flex-col gap-2">
        <label htmlFor="email" className="font-semibold">
          Email
        </label>

        <input
          id="email"
          type="email"
          placeholder="Masukkan email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500"
        />

        {email ? (
          <p>Email: {email}</p>
        ) : (
          <p className="text-red-500">Email belum diisi</p>
        )}
      </div>
    </main>
  );
}
