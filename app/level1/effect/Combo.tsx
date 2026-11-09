"use client";

import { useEffect, useState, useRef } from "react";

const employees = [
  { id: 1, name: "John Doe", position: "Software Engineer" },
  { id: 2, name: "Jane Smith", position: "Product Manager" },
  { id: 3, name: "Alice Johnson", position: "UX Designer" },
];

export default function Combo() {
  const inputRef = useRef<HTMLInputElement>(null);
  const data = employees;
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    console.log("Keyword berubah:", keyword);
  }, [keyword]);

  const filteredEmployees = data.filter(
    (employee) =>
      employee.name.toLowerCase().includes(keyword.toLowerCase()) ||
      employee.position.toLowerCase().includes(keyword.toLowerCase()),
  );

  const handleFocus = () => {
    inputRef.current?.focus();
  };

  const handleClear = () => {
    setKeyword("");
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Combo Example</h1>
      <input
        ref={inputRef}
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
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

      <div className="flex flex-col items-center justify-center gap-6 py-10">
        {filteredEmployees.length === 0 ? (
          <p>Data Karyawan Tidak Ditemukan</p>
        ) : (
          filteredEmployees.map((employee) => (
            <div key={employee.id} className="border p-4 rounded shadow-md">
              <h2 className="text-xl font-bold">{employee.name}</h2>
              <p>{employee.position}</p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
