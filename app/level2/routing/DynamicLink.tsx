import Link from "next/link";

const employees = [
  { id: 1, name: "Budi" },
  { id: 2, name: "Andi" },
  { id: 3, name: "Siti" },
];

export default function DynamicLink() {
  return (
    <div>
      {employees.map((employee) => (
        <div key={employee.id}>
          <h2>{employee.name}</h2>

          <Link href={`/employees/${employee.id}`}>Detail</Link>
        </div>
      ))}
    </div>
  );
}
