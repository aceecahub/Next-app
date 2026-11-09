import type { Metadata } from "next";
import EmployeeCard from "./level1/components/EmployeeCard";

export const metadata: Metadata = {
  title: "Daftar Karyawan | MyCompany",
  description:
    "Kenali tim profesional MyCompany yang berpengalaman dalam pengembangan teknologi dan solusi digital.",
};

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-5xl flex-col items-center gap-6 p-6">
      <header className="text-center">
        <h1 className="text-3xl font-bold">Daftar Karyawan</h1>

        <p className="mt-2 text-gray-500">Kenali tim profesional kami.</p>
      </header>

      <section className="grid w-full grid-cols-1 gap-5 md:grid-cols-2">
        <EmployeeCard
          name="Echa Muhammad"
          age={20}
          email="echa.muhammad@mycompany.com"
          position="Software Engineer"
          department="IT Development"
          description="Berpengalaman dalam pengembangan aplikasi web dan sistem backend."
          status="active"
        />

        <EmployeeCard
          name="Andi"
          age={25}
          email="andi@mycompany.com"
          position="UI Designer"
          department="Design"
          status="inactive"
        />

        <EmployeeCard
          name="Budi"
          age={23}
          email="budi@mycompany.com"
          position="Backend Developer"
          department="Engineering"
          description="Berpengalaman dalam pengembangan server"
          status="active"
        />
      </section>
    </main>
  );
}
