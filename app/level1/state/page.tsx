import StateMethods from "./StateMethod";
import VaribleMethods from "./VariableMethod";
import LoveState from "./LoveState";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center gap-6 py-10">
      <h1 className="text-3xl font-bold">State Management Example</h1>
        <LoveState />
    </div>
  );
}