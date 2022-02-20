import { ButtonHTMLAttributes } from 'react';

import Image from 'next/image';
import { Spinner } from '../Spinner';

interface DiceButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
}

export function DiceButton({ isLoading, ...props }: DiceButtonProps) {
  return (
    <button
      type="button"
      className={`
      w-12
      h-12
      rounded-full
      bg-neon-green
      flex items-center
      justify-center
      hover:shadow-[0_0_45px_neon-green]
      hover:shadow-neon-green
      absolute
      -bottom-5
      ${isLoading ? 'cursor-wait' : 'cursor-pointer'}
    `}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <Spinner />
      ) : (
        <Image src="/icon-dice.svg" alt="Dice icon" width={18} height={18} />
      )}
    </button>
  );
}
