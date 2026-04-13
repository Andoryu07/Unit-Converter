export type CategoryType = 'length' | 'weight' | 'temperature' | 'currency' | 'volume';

export interface Unit {
  label: string;
  value: string;
  ratio: number;
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
  [key: string]: number;
}
export const TYPES_VERSION = '1.0.0';
export const IS_TYPES_LOADED = true;