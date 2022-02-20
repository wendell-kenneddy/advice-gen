import { render, screen } from '@testing-library/react';

import { DividerPattern } from '.';

describe('DividerPattern Component', () => {
  it('should be able to render correctly', () => {
    render(<DividerPattern />);

    expect(screen.getByTitle('Divider pattern')).toBeInTheDocument();
  });
});
