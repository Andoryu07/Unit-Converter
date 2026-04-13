import { CategoryType } from '../types'

const CATEGORY_LABELS: Record<CategoryType, string> = {
  length: 'Délka',
  weight: 'Váha',
  temperature: 'Teplota',
  currency: 'Měna',
  volume: 'Objem',
}

interface CategoryTabsProps {
  activeCategory: CategoryType
  onCategoryChange: (category: CategoryType) => void
}

function CategoryTabs({ activeCategory, onCategoryChange }: CategoryTabsProps) {
  const categories: CategoryType[] = ['length', 'weight', 'temperature', 'currency', 'volume']

  return (
    <div className="category-tabs">
      {categories.map((category) => (
        <button
          key={category}
          className={`category-tab ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {CATEGORY_LABELS[category]}
        </button>
      ))}
    </div>
  )
}

export default CategoryTabs
