import { api } from '../services/api';

export interface Advice {
  id: number;
  advice: string;
}

export async function fetchAdvice() {
  const response = await api.get<{ slip: Advice }>('/advice');

  return response.data.slip;
}
