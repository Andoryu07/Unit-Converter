import { Unit } from '../types'

interface ConversionFormProps {
  units: Unit[]
  topValue: string
  bottomValue: string
  topUnit: string
  bottomUnit: string
  onTopValueChange: (value: string) => void
  onBottomValueChange: (value: string) => void
  onTopUnitChange: (unit: string) => void
  onBottomUnitChange: (unit: string) => void
}

function ConversionForm({
  units,
  topValue,
  bottomValue,
  topUnit,
  bottomUnit,
  onTopValueChange,
  onBottomValueChange,
  onTopUnitChange,
  onBottomUnitChange,
}: ConversionFormProps) {
  return (
    <div className="converter-card">
      <div className="input-group">
        <input
          type="number"
          value={topValue}
          onChange={(e) => onTopValueChange(e.target.value)}
          placeholder="0"
        />
        <select value={topUnit} onChange={(e) => onTopUnitChange(e.target.value)}>
          {units.map((unit) => (
            <option key={unit.value} value={unit.value}>
              {unit.value}
            </option>
          ))}
        </select>
      </div>

      <div className="swap-icon">⇅</div>

      <div className="input-group">
        <input
          type="number"
          value={bottomValue}
          onChange={(e) => onBottomValueChange(e.target.value)}
          placeholder="0"
        />
        <select value={bottomUnit} onChange={(e) => onBottomUnitChange(e.target.value)}>
          {units.map((unit) => (
            <option key={unit.value} value={unit.value}>
              {unit.value}
            </option>
          ))}
        </select>
      </div>
    </div>
  )
}

export default ConversionForm
