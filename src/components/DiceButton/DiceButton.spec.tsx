import { render, screen } from '@testing-library/react';

import { DiceButton } from '.';

describe('DiceButton Component', () => {
  it('should be able to render correctly', () => {
    render(<DiceButton />);

    expect(
      screen.getByRole('button', {
        name: 'Dice icon'
      })
    ).toBeInTheDocument();
    expect(screen.getByAltText('Dice icon')).toBeInTheDocument();
  });

  it('should be able to render a loading state', () => {
    render(<DiceButton isLoading={true} />);

    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });
});
