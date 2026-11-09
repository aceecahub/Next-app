export default function Profile() {
  const name = "Echa Muhammad";
  const age = 20;
  const job = "Software Engineer";
  return (
    <div className="flex items-center justify-center p-4">
      <div>
        <div className="flex justify-center p-4">
          <div className="flex flex-col items-center justify-center">
            <div className="h-15 w-15 bg-gray-500 rounded-full"></div>
            <h1 className="text-xl font-bold">{name}!</h1>
          </div>
        </div>
        <div className="mt-10 w-full">
          <dl>
            <div className="flex justify-between">
              <dt>Umur</dt>
              <dd className="font-bold">{age} tahun</dd>
            </div>
            <div className="flex w-100 justify-between">
              <dt>Pekerjaan</dt>
              <dd className="font-bold">{job}</dd>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}
