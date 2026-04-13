import type { CategoryType } from '../types';

interface Props {
  active: CategoryType;
  onChange: (cat: CategoryType) => void;
}

const CATEGORY_LABELS: Record<CategoryType, string> = {
  length: 'Délka',
  weight: 'Váha',
  temperature: 'Teplota',
  currency: 'Měna',
  volume: 'Objem',
};

export const CategoryTabs = ({ active, onChange }: Props) => {
  const categories: CategoryType[] = ['length', 'weight', 'temperature', 'currency', 'volume'];

  return (
    <div className="category-tabs">
      {categories.map((cat) => (
        <button
          key={cat}
          className={`category-tab ${active === cat ? 'active' : ''}`}
          onClick={() => onChange(cat)}
        >
          {CATEGORY_LABELS[cat]}
        </button>
      ))}
    </div>
  );
};
