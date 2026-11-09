"use client";

import { useState } from "react";
import type { FormEvent } from "react";
import type { EmployeeFormData } from "./types";

interface FormInputProps {
  onAddEmployee: (employee: EmployeeFormData) => void;
}

export default function FormInput({ onAddEmployee }: FormInputProps) {
  const [formData, setFormData] = useState<EmployeeFormData>({
    name: "",
    email: "",
    position: "",
    department: "",
    status: "active",
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    onAddEmployee(formData);

    setFormData({
      name: "",
      email: "",
      position: "",
      department: "",
      status: "active",
    });
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full max-w-xl flex-col gap-3 rounded-xl border p-5"
    >
      <h2 className="text-xl font-bold">Tambah Karyawan</h2>

      <input
        name="name"
        value={formData.name}
        onChange={handleChange}
        placeholder="Nama"
        required
        className="rounded border p-2"
      />

      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
        placeholder="Email"
        required
        className="rounded border p-2"
      />

      <input
        name="position"
        value={formData.position}
        onChange={handleChange}
        placeholder="Posisi"
        required
        className="rounded border p-2"
      />

      <input
        name="department"
        value={formData.department}
        onChange={handleChange}
        placeholder="Departemen"
        required
        className="rounded border p-2"
      />

      <select
        name="status"
        value={formData.status}
        onChange={handleChange}
        className="rounded border p-2"
      >
        <option value="active">Aktif</option>
        <option value="inactive">Tidak Aktif</option>
      </select>

      <button type="submit" className="rounded-lg bg-blue-600 p-2 text-white">
        Tambahkan Karyawan
      </button>
    </form>
  );
}
