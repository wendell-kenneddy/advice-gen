import { ReactText } from 'react';

interface QuoteProps {
  children: ReactText;
}

export function Quote({ children }: QuoteProps) {
  return (
    <p className="text-center text-light-cyan font-extrabold text-2xl">
      “{children}”
    </p>
  );
}
