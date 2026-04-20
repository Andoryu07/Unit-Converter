import type { ConversionRecord } from '../types';

const CATEGORY_LABELS: Record<string, string> = {
  length: 'Délka',
  weight: 'Váha',
  temperature: 'Teplota',
  currency: 'Měna',
  volume: 'Objem',
};

interface Props {
  history: ConversionRecord[];
  onClear: () => void;
}

export const HistoryList = ({ history, onClear }: Props) => {
  if (history.length === 0) {
    return (
      <div className="history-section">
        <div className="history-header">
          <h2>Historie konverzí</h2>
        </div>
        <p className="empty-history">Zatím žádné konverze</p>
      </div>
    );
  }

  return (
    <div className="history-section">
      <div className="history-header">
        <h2>Historie konverzí</h2>
        <button onClick={onClear}>Vymazat</button>
      </div>

      <div className="history-list">
        {history.map((item) => (
          <div key={item.id} className="history-item">
            <div>
              <span className="history-item-text">
                {item.fromValue} {item.fromUnit} → {item.toValue.toFixed(2)} {item.toUnit}
              </span>
              <span className="history-item-time">
                {new Date(item.timestamp).toLocaleTimeString('cs-CZ', { hour: '2-digit', minute: '2-digit' })}
              </span>
            </div>
            <span className="history-item-category">
              {CATEGORY_LABELS[item.category] || item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
