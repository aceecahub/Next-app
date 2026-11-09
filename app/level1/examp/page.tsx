"use client";

import { useEffect, useState } from "react";

import EmployeeList from "./EmployeeList";
import FormInput from "./FormInput";

import type { Employee, EmployeeFormData } from "./types";

const initialEmployees: Employee[] = [
  {
    id: 1,
    name: "Andi",
    email: "andi@example.com",
    position: "Frontend Developer",
    department: "IT",
    status: "active",
  },
  {
    id: 2,
    name: "Budi",
    email: "budi@example.com",
    position: "Backend Developer",
    department: "IT",
    status: "inactive",
  },
  {
    id: 3,
    name: "Citra",
    email: "citra@example.com",
    position: "UI/UX Designer",
    department: "Design",
    status: "active",
  },
];

export default function EmployeeListPage() {
  const [employees, setEmployees] = useState<Employee[]>(initialEmployees);
  const [keyword, setKeyword] = useState("");

  // Memuat data dari localStorage
  useEffect(() => {
    const savedEmployees = localStorage.getItem("employees");

    if (savedEmployees) {
      try {
        setEmployees(JSON.parse(savedEmployees) as Employee[]);
      } catch {
        console.error("Data employees di localStorage tidak valid.");
      }
    }
  }, []);

  // Menyimpan data ketika employees berubah
  useEffect(() => {
    localStorage.setItem("employees", JSON.stringify(employees));
  }, [employees]);

  // Menambahkan karyawan
  function handleAddEmployee(employee: EmployeeFormData) {
    const newEmployee: Employee = {
      id: Date.now(),
      ...employee,
    };

    setEmployees((previousEmployees) => [...previousEmployees, newEmployee]);
  }

  // Mengubah status karyawan
  function handleToggleStatus(id: number) {
    setEmployees((previousEmployees) =>
      previousEmployees.map((employee) =>
        employee.id === id
          ? {
              ...employee,
              status: employee.status === "active" ? "inactive" : "active",
            }
          : employee,
      ),
    );
  }

  // Pencarian karyawan
  const filteredEmployees = employees.filter((employee) =>
    employee.name.toLowerCase().includes(keyword.toLowerCase()),
  );

  const activeEmployees = employees.filter(
    (employee) => employee.status === "active",
  ).length;

  return (
    <main className="flex min-h-screen flex-col items-center gap-6 p-8">
      <h1 className="text-3xl font-bold">Employee Management Dashboard</h1>

      <section className="flex gap-6">
        <div className="rounded-xl border p-4">
          <p>Total Karyawan</p>
          <h2 className="text-2xl font-bold">{employees.length}</h2>
        </div>

        <div className="rounded-xl border p-4">
          <p>Karyawan Aktif</p>
          <h2 className="text-2xl font-bold">{activeEmployees}</h2>
        </div>
      </section>

      <FormInput onAddEmployee={handleAddEmployee} />

      <section className="w-full max-w-xl">
        <input
          type="text"
          value={keyword}
          onChange={(event) => setKeyword(event.target.value)}
          placeholder="Cari nama karyawan..."
          className="w-full rounded-lg border p-3"
        />

        <button
          type="button"
          onClick={() => setKeyword("")}
          className="mt-2 rounded-lg bg-slate-600 px-4 py-2 text-white"
        >
          Reset Pencarian
        </button>
      </section>

      <section className="flex w-full flex-col items-center gap-4">
        {filteredEmployees.length === 0 ? (
          <p>Data karyawan tidak ditemukan.</p>
        ) : (
          filteredEmployees.map((employee) => (
            <EmployeeList
              key={employee.id}
              employee={employee}
              onToggleStatus={handleToggleStatus}
            />
          ))
        )}
      </section>
    </main>
  );
}
