import { Suspense } from "react";

interface Employee {
  id: number;
  name: string;
  email: string;
}

async function EmployeeList() {
  const response = await fetch(
    "https://jsonplaceholder.typicode.com/users"
  );
  if (!response.ok) {
    throw new Error("Gagal mengambil data karyawan");
  }
  const employees: Employee[] = await response.json();

  return (
    <div>
      <h1>Daftar Karyawan</h1>
      <table>
        <thead>
          <tr>
            <th>Nama</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee) => (
            <tr key={employee.id}>
              <td>{employee.name}</td>
              <td>{employee.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function EmployeesPage() {
  return (
    <Suspense fallback={<p>Sedang mengambil data...</p>}>
      <EmployeeList />
    </Suspense>
  );
}   