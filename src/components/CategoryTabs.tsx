import { colors, spacing, borderRadius, fontSize } from '../theme';
import type { CategoryType } from '../types';
interface Props {
  active: CategoryType;
  onChange: (cat: CategoryType) => void;
}

export const CategoryTabs = ({ active, onChange }: Props) => {
  const categories: { id: CategoryType; label: string }[] = [
    { id: 'length', label: 'Length' },
    { id: 'weight', label: 'Weight' },
    { id: 'temperature', label: 'Temperature' },
    { id: 'currency', label: 'Currency' },
    { id: 'volume', label: 'Volume' },
  ];

  return (
    <div style={{
      display: 'flex',
      gap: spacing.sm,
      overflowX: 'auto',
      paddingBottom: spacing.sm
    }}>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          style={{
            padding: `${spacing.sm} ${spacing.lg}`,
            borderRadius: borderRadius.pill,
            border: 'none',
            fontSize: fontSize.sm,
            cursor: 'pointer',
            whiteSpace: 'nowrap',
            //Changes color dynamically based on whether the category is active or not
            backgroundColor: active === cat.id ? colors.primary : colors.surface,
            color: active === cat.id ? 'white' : colors.textSecondary,
            boxShadow: '0 2px 4px rgba(0,0,0,0.05)',
            transition: 'all 0.2s'
          }}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};