import { Divider } from '../Divider';
import { DividerPattern } from '../DividerPattern';

export function Separator() {
  return (
    <div className="w-full grid grid-cols-[5fr_1fr_5fr]" role="separator">
      <Divider />

      <DividerPattern />

      <Divider />
    </div>
  );
}
