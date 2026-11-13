export interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
}

export const employees: Employee[] = [
  { id: 1, name: "Budi", email: "budi@gmail.com", department: "IT" },
  { id: 2, name: "Andi", email: "andi@gmail.com", department: "Inventory" },
  { id: 3, name: "Siti", email: "siti@gmail.com", department: "Finance" },
];
