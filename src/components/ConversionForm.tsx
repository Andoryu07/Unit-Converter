import { UNIT_DATA } from '../data/units';
import type { CategoryType } from '../types';

interface Props {
  amount: number | '';
  setAmount: (val: number | '') => void;
  fromUnit: string;
  setFromUnit: (val: string) => void;
  toUnit: string;
  setToUnit: (val: string) => void;
  result: number;
  category: CategoryType;
  onSwap: () => void;
  onSave: () => void;
}

export const ConversionForm = ({ amount, setAmount, fromUnit, setFromUnit, toUnit, setToUnit, result, category, onSwap, onSave }: Props) => {
  return (
    <div className="converter-card">
      <div className="input-group">
        <input
          type="number"
          value={amount}
          onKeyDown={(e) => {
                      if (['e', 'E', '+'].includes(e.key)) {
                        e.preventDefault();
                      }
                  }}
          onChange={(e) => {
              const val = e.target.value;
              setAmount(val === '' ? '' : Number(val));
          }}
          placeholder="0"
          inputMode="decimal"
        />
        <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)}>
          {UNIT_DATA[category].map((u) => (
            <option key={u.value} value={u.value}>{u.value}</option>
          ))}
        </select>
      </div>

      <div className="swap-icon" onClick={onSwap}>⇅</div>

      <div className="input-group">
        <input type="text" value={result.toFixed(2)} readOnly />
        <select value={toUnit} onChange={(e) => setToUnit(e.target.value)}>
          {UNIT_DATA[category].map((u) => (
            <option key={u.value} value={u.value}>{u.value}</option>
          ))}
        </select>
      </div>

      <button className="save-button" onClick={onSave}>Uložit do historie</button>
    </div>
  );
};
