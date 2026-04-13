import { ConversionRecord } from '../types'

const CATEGORY_LABELS: Record<string, string> = {
  length: 'Délka',
  weight: 'Váha',
  temperature: 'Teplota',
  currency: 'Měna',
  volume: 'Objem',
}

interface HistoryListProps {
  history: ConversionRecord[]
  onClear: () => void
}

function HistoryList({ history, onClear }: HistoryListProps) {
  return (
    <div className="history-section">
      <div className="history-header">
        <h2>Historie konverzí</h2>
        {history.length > 0 && (
          <button onClick={onClear}>Vymazat</button>
        )}
      </div>

      {history.length === 0 ? (
        <p className="empty-history">Zatím žádné konverze</p>
      ) : (
        <div className="history-list">
          {history.map((record) => (
            <div key={record.id} className="history-item">
              <span className="history-item-text">
                {record.fromValue} {record.fromUnit} → {record.toValue} {record.toUnit}
              </span>
              <div className="history-item-meta">
                <span className="history-item-time">
                  {new Date(record.timestamp).toLocaleTimeString('cs-CZ', {
                    hour: '2-digit',
                    minute: '2-digit',
                  })}
                </span>
                <span className="history-item-category">
                  {CATEGORY_LABELS[record.category] || record.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default HistoryList
