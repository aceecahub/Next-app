import EmployeeCard from "./EmployeeCard";

interface Employee {
  id: number;
  name: string;
  age: number;
  email: string;
  position: string;
  department: string;
  description: string;
  status: "active" | "inactive";
}

const employees: Employee[] = [
  {
    id: 1,
    name: "John Doe",
    age: 30,
    email: "john.doe@example.com",
    position: "Software Engineer",
    department: "Engineering",
    description:
      "John is a talented software engineer with experience in React and Node.js.",
    status: "active",
  },
  {
    id: 2,
    name: "Jane Smith",
    age: 28,
    email: "jane.smith@example.com",
    position: "Product Manager",
    department: "Product",
    description:
      "Jane is an experienced product manager with a passion for creating user-centered products.",
    status: "inactive",
  },
  {
    id: 3,
    name: "Bob Johnson",
    age: 35,
    email: "bob.johnson@example.com",
    position: "Designer",
    department: "Design",
    description:
      "Bob is a creative designer with a keen eye for detail and a passion for user experience.",
    status: "active",
  },
];

export default function MapPage() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      {employees.map((employee) => (
        <EmployeeCard key={employee.id} {...employee} />
      ))}
    </div>
  );
}
