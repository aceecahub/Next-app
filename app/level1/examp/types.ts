export interface Employee {
  id: number;
  name: string;
  email: string;
  position: string;
  department: string;
  status: "active" | "inactive";
}

export type EmployeeFormData = Omit<Employee, "id">;
