import { colors, spacing, borderRadius, fontSize } from '../theme';
import { UNIT_DATA } from '../data/units';
import type { CategoryType } from '../types';

interface Props {
  amount: number;
  setAmount: (val: number) => void;
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
  const commonInputStyle = {
    padding: spacing.md,
    borderRadius: borderRadius.md,
    border: `1px solid ${colors.border}`,
    fontSize: fontSize.md,
    width: '100%'
  };

  return (
    <div style={{ backgroundColor: colors.surface, padding: spacing.lg, borderRadius: borderRadius.lg, boxShadow: '0 4px 6px rgba(0,0,0,0.05)' }}>
      <div style={{ marginBottom: spacing.md }}>
        <label style={{ color: colors.textSecondary, display: 'block', marginBottom: spacing.xs }}>From Unit</label>
        <div style={{ display: 'flex', gap: spacing.sm }}>
          <input
            type="number"
            value={amount || ''}
            onChange={(e) => setAmount(Number(e.target.value))}
            style={commonInputStyle}
            placeholder="0"
          />
          <select value={fromUnit} onChange={(e) => setFromUnit(e.target.value)} style={{...commonInputStyle, width: '120px'}}>
            {UNIT_DATA[category].map(u => <option key={u.value} value={u.value}>{u.value}</option>)}
          </select>
        </div>
      </div>

      <button onClick={onSwap} style={{
        backgroundColor: colors.primary,
        color: 'white',
        border: 'none',
        borderRadius: borderRadius.pill,
        padding: spacing.sm,
        cursor: 'pointer',
        display: 'block',
        margin: `${spacing.md} auto`
      }}>⇅</button>

      <div style={{ marginBottom: spacing.lg }}>
        <label style={{ color: colors.textSecondary, display: 'block', marginBottom: spacing.xs }}>To unit</label>
        <div style={{ display: 'flex', gap: spacing.sm }}>
          <input
            type="text"
            value={result.toFixed(2)}
            readOnly
            style={{...commonInputStyle, backgroundColor: colors.background}}
          />
          <select value={toUnit} onChange={(e) => setToUnit(e.target.value)} style={{...commonInputStyle, width: '120px'}}>
            {UNIT_DATA[category].map(u => <option key={u.value} value={u.value}>{u.value}</option>)}
          </select>
        </div>
      </div>

      <button
        onClick={onSave}
        style={{ width: '100%', padding: spacing.md, backgroundColor: colors.success, color: 'white', border: 'none', borderRadius: borderRadius.md, fontWeight: 'bold' }}
      >
        Save to history
      </button>
    </div>
  );
};