"use client";

export default function VariableMethod() {
    let count = 0;

    function increment() {
        count++;
    }

    return (
        <div className="flex flex-col items-center justify-center gap-6 py-10">
            <p className="text-2xl font-bold">Count: {count}</p>
            <button
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                onClick={increment}
            >
                Increment
            </button>
        </div>
    );
}