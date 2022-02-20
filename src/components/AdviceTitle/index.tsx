interface AdviceTitleProps {
  id: number;
}

export function AdviceTitle({ id }: AdviceTitleProps) {
  return (
    <h2 className="uppercase tracking-widest font-extrabold text-xs text-neon-green">
      Advice #{id}
    </h2>
  );
}
