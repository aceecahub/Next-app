interface EmployeeProps {
  name: string;
  age: number;
  email: string;
  position: string;
  department: string;
  description?: string;
  status: "active" | "inactive";
}

export default function EmployeeCard({
  name,
  age,  
  email,
  position,
  department,
  description,
  status,
}: EmployeeProps) {
  return (
    <article className="w-full max-w-xl rounded-2xl border border-slate-700 p-5 shadow-sm">
      <header className="flex items-center justify-between gap-3">
        <div className="flex items-center gap-3">
          <div
            className="h-14 w-14 shrink-0 rounded-full bg-gray-300"
            aria-hidden="true"
          />
          <div>
            <h2 className="text-xl font-bold">{name}</h2>
            <p className="text-sm text-gray-500">{position}</p>
          </div>
        </div>
        <span
          className={`rounded-full px-3 py-1 text-xs font-semibold ${
            status === "active"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {status}
        </span>
      </header>
      <dl className="mt-6 space-y-3">
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Email</dt>
          <dd className="font-semibold text-right">{email}</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Umur</dt>
          <dd className="font-semibold">{age} tahun</dd>
        </div>
        <div className="flex justify-between gap-4">
          <dt className="text-gray-500">Departemen</dt>
          <dd className="font-semibold text-right">{department}</dd>
        </div>
      </dl>
      {description && (
        <p className="mt-5 border-t pt-4 text-sm leading-relaxed text-gray-600">
          {description}
        </p>
      )}
    </article>
  );
}
