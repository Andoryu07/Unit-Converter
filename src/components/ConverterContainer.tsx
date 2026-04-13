import { useState, useMemo, useEffect } from 'react';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { useExchangeRates } from '../hooks/useExchangeRates';
import { UNIT_DATA } from '../data/units';
import type { CategoryType, ConversionRecord } from '../types';
import { CategoryTabs } from './CategoryTabs';
import { ConversionForm } from './ConversionForm';
import { HistoryList } from './HistoryList';

export const ConverterContainer = () => {
  const [category, setCategory] = useState<CategoryType>('length');
  const [amount, setAmount] = useState<number>(0);
  const [fromUnit, setFromUnit] = useState(UNIT_DATA[category][0].value);
  const [toUnit, setToUnit] = useState(UNIT_DATA[category][1].value);
  const [history, setHistory] = useLocalStorage<ConversionRecord[]>('history', []);
  const { rates, status, refetch } = useExchangeRates();

  useEffect(() => {
    setFromUnit(UNIT_DATA[category][0].value);
    setToUnit(UNIT_DATA[category][1].value);
  }, [category]);

  const result = useMemo(() => {
    if (amount === 0) return 0;
    if (category === 'currency' && rates) {
       const fromRate = rates[fromUnit] || 1;
       const toRate = rates[toUnit] || 1;
       return (amount / fromRate) * toRate;
    }

    const uFrom = UNIT_DATA[category].find(u => u.value === fromUnit);
    const uTo = UNIT_DATA[category].find(u => u.value === toUnit);
    if (!uFrom || !uTo) return 0;

    if (category === 'temperature') {
        if (fromUnit === 'C' && toUnit === 'F') return (amount * 9/5) + 32;
        if (fromUnit === 'F' && toUnit === 'C') return (amount - 32) * 5/9;
        return amount;
    }

    return (amount * uFrom.ratio) / uTo.ratio;
  }, [amount, fromUnit, toUnit, category, rates]);

  const handleSwap = () => {
    setFromUnit(toUnit);
    setToUnit(fromUnit);
  };

  const saveToHistory = () => {
    if (amount === 0) return;
    const record: ConversionRecord = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      fromValue: amount,
      fromUnit,
      toValue: result,
      toUnit,
      category
    };
    setHistory([record, ...history].slice(0, 5));
  };

  return (
    <>
      <CategoryTabs active={category} onChange={setCategory} />

      {category === 'currency' && (
        <div className="exchange-rate-info">
          <span>Kurzy: {new Date().toLocaleDateString('cs-CZ')} | {status}</span>
          <button onClick={refetch}>Aktualizovat</button>
        </div>
      )}

      <ConversionForm
        amount={amount}
        setAmount={setAmount}
        fromUnit={fromUnit}
        setFromUnit={setFromUnit}
        toUnit={toUnit}
        setToUnit={setToUnit}
        result={result}
        category={category}
        onSwap={handleSwap}
        onSave={saveToHistory}
      />

      <HistoryList history={history} onClear={() => setHistory([])} />
    </>
  );
};
