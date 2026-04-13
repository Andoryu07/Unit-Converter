//Used for exchange rates fetching
import { useState, useEffect } from 'react';
import type { ExchangeRates } from '../types';

export function useExchangeRates() {
  const [rates, setRates] = useState<ExchangeRates | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const fetchRates = async () => {
    setStatus('loading');
    try {
      const res = await fetch('https://api.exchangerate-api.com/v4/latest/CZK');
      if (!res.ok) throw new Error();
      const data = await res.json();
      setRates(data.rates);
      setStatus('success');
    } catch (e) {
      setStatus('error');
    }
  };
  useEffect(() => { fetchRates(); }, []);
  return { rates, status, refetch: fetchRates };
}