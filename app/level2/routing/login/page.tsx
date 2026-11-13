"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    router.push("/level2/routing");
  }

  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-sm rounded-lg border border-gray-200 bg-white p-8 shadow-sm"
      >
        <h1 className="mb-6 text-center text-2xl font-bold text-black">
          Login
        </h1>

        <div className="mb-4">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Username
          </label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Masukkan username"
            required
          />
        </div>

        <div className="mb-6">
          <label className="mb-1 block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
            placeholder="Masukkan password"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full rounded bg-blue-600 py-2 text-sm font-medium text-white transition hover:bg-blue-700"
        >
          Login
        </button>
        {/* Tambah ini */}
        <p className="mt-4 text-center text-sm text-gray-500">
          Belum punya akun?{" "}
          <button
            type="button"
            onClick={() => router.push("/level2/routing/register")}
            className="font-medium text-blue-600 hover:underline"
          >
            Daftar
          </button>
        </p>
      </form>
    </div>
  );
}
