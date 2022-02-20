import { render, screen } from '@testing-library/react';

import { AdviceTitle } from '.';

describe('AdviceTitle Component', () => {
  it('should be able to render correctly', () => {
    render(<AdviceTitle id={117} />);

    expect(screen.getByText('Advice #117')).toBeInTheDocument();
  });
});
