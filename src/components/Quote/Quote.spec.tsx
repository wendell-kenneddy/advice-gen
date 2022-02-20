import { render, screen } from '@testing-library/react';

import { Quote } from '.';

describe('Quote Component', () => {
  it('should be able to render correctly', () => {
    render(<Quote>Something.</Quote>);

    expect(screen.getByText('“Something.”')).toBeInTheDocument();
  });
});
