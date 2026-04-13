import type { Unit, CategoryType } from '../types';

export const UNIT_DATA: Record<CategoryType, Unit[]> = {
  length: [
    { label: 'Meters', value: 'm', ratio: 1 },
    { label: 'Kilometers', value: 'km', ratio: 1000 },
    { label: 'Centimeters', value: 'cm', ratio: 0.01 },
    { label: 'Inches', value: 'in', ratio: 0.0254 },
  ],
  weight: [
    { label: 'Kilograms', value: 'kg', ratio: 1 },
    { label: 'Grams', value: 'g', ratio: 0.001 },
    { label: 'Pounds', value: 'lb', ratio: 0.453592 },
  ],
  temperature: [
    { label: 'Celsius', value: 'C', ratio: 1 },
    { label: 'Fahrenheit', value: 'F', ratio: 1 }, // Temperature requires a special formula, ratio is just a placeholder in this case
  ],
  currency: [
    { label: 'Czech Crown', value: 'CZK', ratio: 1 },
    { label: 'Euro', value: 'EUR', ratio: 25.3 },
    { label: 'Dollar', value: 'USD', ratio: 23.5 },
  ],
  volume: [
    { label: 'Litres', value: 'l', ratio: 1 },
    { label: 'Millilitres', value: 'ml', ratio: 0.001 },
  ]
};