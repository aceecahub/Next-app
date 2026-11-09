import type { Employee } from "./types";

interface EmployeeListProps {
  employee: Employee;
  onToggleStatus: (id: number) => void;
}

export default function EmployeeList({
  employee,
  onToggleStatus,
}: EmployeeListProps) {
  return (
    <article className="w-full max-w-xl rounded-2xl border p-5 shadow-sm">
      <header className="flex items-center justify-between gap-3">
        <div>
          <h2 className="text-xl font-bold">{employee.name}</h2>
          <p className="text-sm text-gray-500">{employee.position}</p>
        </div>

        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            employee.status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {employee.status}
        </span>
      </header>

      <dl className="mt-5 space-y-2">
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Email</dt>
          <dd>{employee.email}</dd>
        </div>

        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Departemen</dt>
          <dd>{employee.department}</dd>
        </div>
      </dl>

      <button
        type="button"
        onClick={() => onToggleStatus(employee.id)}
        className="mt-5 rounded-lg bg-slate-700 px-4 py-2 text-white"
      >
        Ubah Status
      </button>
    </article>
  );
}
