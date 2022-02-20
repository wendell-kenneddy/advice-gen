import { fireEvent, render, screen } from '@testing-library/react';

import { QueryClient, QueryClientProvider } from 'react-query';

import AxiosMock from 'axios-mock-adapter';

import { api } from '../../services/api';

import Home from '../../pages';

const apiMock = new AxiosMock(api);
const advice = {
  id: 117,
  advice: 'Something useful.'
};

describe('Home Page', () => {
  beforeEach(() => {
    apiMock.reset();
  });

  it('should be able to show loading states', () => {
    render(
      <QueryClientProvider client={new QueryClient()}>
        <Home />
      </QueryClientProvider>
    );

    expect(screen.getByText('“Loading advice...”')).toBeInTheDocument();
    expect(screen.getByText('Advice #0')).toBeInTheDocument();
    expect(screen.getByRole('status')).toBeInTheDocument();
    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('should be able to render an advice data', async () => {
    apiMock.onGet('/advice').reply(200, { slip: advice });

    render(
      <QueryClientProvider client={new QueryClient()}>
        <Home />
      </QueryClientProvider>
    );

    expect(await screen.findByText('Advice #117')).toBeInTheDocument();
    expect(await screen.findByText('“Something useful.”')).toBeInTheDocument();
  });

  it('should be able to fetch other advice', async () => {
    apiMock.onGet('/advice').reply(200, { slip: advice });

    render(
      <QueryClientProvider client={new QueryClient()}>
        <Home />
      </QueryClientProvider>
    );

    expect(await screen.findByText('Advice #117')).toBeInTheDocument();
    expect(await screen.findByText('“Something useful.”')).toBeInTheDocument();

    apiMock
      .onGet('/advice')
      .reply(200, { slip: { id: 118, advice: 'Something even more useful.' } });

    const fetchAdviceButton = await screen.findByRole('button', {
      name: 'Dice icon'
    });

    fireEvent.click(fetchAdviceButton);

    expect(await screen.findByText('Advice #118')).toBeInTheDocument();
    expect(
      await screen.findByText('“Something even more useful.”')
    ).toBeInTheDocument();
  });
});
