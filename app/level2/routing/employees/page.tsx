import Link from "next/link";
import { employees } from "./data"

export default function PageEmployee() {
  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id} className="flex gap-4">
          <h2>{employee.name}</h2>

          <Link href={`/level2/routing/employees/${employee.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
}
