import { ReactNode } from 'react';

export default function Button({ children }: { children: ReactNode }) {
  return (
    <div className="inline-flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
      {children}
    </div>
  );
}
