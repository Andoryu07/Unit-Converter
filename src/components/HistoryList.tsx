import type { ConversionRecord } from '../types';
interface Props {
  history: ConversionRecord[];
  onClear: () => void;
}

export const HistoryList = ({ history, onClear }: Props) => {
  if (history.length === 0) return null;

  return (
    <div>
      <div>
        <h3>Conversion History</h3>
        <button
          onClick={onClear}
        >
          Delete
        </button>
      </div>

      <div>
        {history.map((item) => (
          <div key={item.id}>
            <div>
              <div>
                {item.fromValue} {item.fromUnit} → {item.toValue.toFixed(2)} {item.toUnit}
              </div>
              <div>
                {new Date(item.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
              </div>
            </div>
            <span>
              {item.category}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};