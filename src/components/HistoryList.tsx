import { colors, spacing, borderRadius, fontSize } from '../theme';
import type { ConversionRecord } from '../types';

interface Props {
  history: ConversionRecord[];
  onClear: () => void;
}

export const HistoryList = ({ history, onClear }: Props) => {
  if (history.length === 0) return null;

  return (
    <div style={{ marginTop: spacing.xl }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: spacing.md }}>
        <h3 style={{ color: colors.text, margin: 0 }}>Conversion History</h3>
        <button
          onClick={onClear}
          style={{ border: 'none', background: 'none', color: colors.error, cursor: 'pointer', fontWeight: 'bold' }}
        >
          Delete
        </button>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: spacing.sm }}>
        {history.map((item) => (
          <div key={item.id} style={{
            backgroundColor: colors.surface,
            padding: spacing.md,
            borderRadius: borderRadius.md,
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 1px 3px rgba(0,0,0,0.1)'
          }}>
            <div>
              <div style={{ fontWeight: 'bold', color: colors.text }}>
                {item.fromValue} {item.fromUnit} → {item.toValue.toFixed(2)} {item.toUnit}
              </div>
              <div style={{ fontSize: '0.75rem', color: colors.textSecondary }}>
                {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            <span style={{ fontSize: '0.75rem', color: colors.primary, textTransform: 'uppercase' }}>
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};