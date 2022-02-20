import { render, screen } from '@testing-library/react';

import { Separator } from '.';

describe('Separator Component', () => {
  it('should be able to render correctly', () => {
    render(<Separator />);

    expect(screen.getByTitle('Divider pattern')).toBeInTheDocument();
    expect(screen.getAllByTitle('Divider').length).toBe(2);
  });
});
