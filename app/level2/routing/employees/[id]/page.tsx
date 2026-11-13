import { employees } from "../data"

interface EmployeeDetailProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function EmployeeDetailPage({
  params,
}: EmployeeDetailProps) {
  const { id } = await params;

  const employee = employees.find((item) => item.id === Number(id));

  if (!employee) {
    return <p>Tidak ada Data Karyawan!</p>;
  }

  return (
    <div>
      <h1>Detail Karyawan</h1>
        <p>ID: {employee.id}</p>
        <p>Nama: {employee.name}</p>
        <p>Email: {employee.email}</p>
        <p>Department: {employee.department}</p>
    </div>
  );
}
