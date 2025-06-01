export function Button(props: React.ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      {...props}
      className="px-4 py-2 font-bold bg-emerald-300 text-emerald-800 rounded-lg text-sm"
    />
  );
}

export function ButtonSmall(
  props: React.ButtonHTMLAttributes<HTMLButtonElement>
) {
  return (
    <button
      {...props}
      className="px-2 py-1 font-bold bg-red-300 text-red-800 rounded-lg text-xs"
    />
  );
}
