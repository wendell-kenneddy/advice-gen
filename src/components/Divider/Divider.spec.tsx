import { render, screen } from '@testing-library/react';

import { Divider } from '.';

describe('Divider Component', () => {
  it('should be able to render correctly', () => {
    render(<Divider />);

    expect(screen.getByTitle('Divider')).toBeInTheDocument();
  });
});
