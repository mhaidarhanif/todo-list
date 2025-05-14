export function Button({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-4 py-2 font-bold bg-emerald-300 text-emerald-800 rounded-lg text-sm">
      {children}
    </button>
  );
}

export function ButtonSmall({ children }: { children: React.ReactNode }) {
  return (
    <button className="px-2 py-1 font-bold bg-red-300 text-red-800 rounded-lg text-xs">
      {children}
    </button>
  );
}
