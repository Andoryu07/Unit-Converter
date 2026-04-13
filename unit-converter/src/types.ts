export type CategoryType = 'length' | 'weight' | 'temperature' | 'currency' | 'volume';

export interface Unit {
  label: string;      // Centimeters, for instance
  value: string;      // cm, for instance
  ratio: number;     // Koeficient against the base value
}

export interface ConversionRecord {
  id: string;
  timestamp: number;
  fromValue: number;
  fromUnit: string;
  toValue: number;
  toUnit: string;
  category: CategoryType;
}

export interface ExchangeRates {
  [key: string]: number; // like 25.3 EUR
}