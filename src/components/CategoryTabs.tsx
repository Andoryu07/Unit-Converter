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
    <div>
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
};