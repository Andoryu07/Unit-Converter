import { useState } from 'react'
import { CategoryType, ConversionRecord } from '../types'
import { UNIT_DATA } from '../data/units'
import CategoryTabs from './CategoryTabs'
import ConversionForm from './ConversionForm'
import HistoryList from './HistoryList'

function ConverterContainer() {
  const [category, setCategory] = useState<CategoryType>('length')
  const [topValue, setTopValue] = useState('')
  const [bottomValue, setBottomValue] = useState('')
  const [topUnit, setTopUnit] = useState(UNIT_DATA['length'][0].value)
  const [bottomUnit, setBottomUnit] = useState(UNIT_DATA['length'][1].value)
  const [history, setHistory] = useState<ConversionRecord[]>([])

  const units = UNIT_DATA[category]

  const handleCategoryChange = (newCategory: CategoryType) => {
    setCategory(newCategory)
    const newUnits = UNIT_DATA[newCategory]
    setTopUnit(newUnits[0].value)
    setBottomUnit(newUnits[1]?.value || newUnits[0].value)
    setTopValue('')
    setBottomValue('')
  }

  const convert = (value: number, from: string, to: string): number => {
    if (category === 'temperature') {
      if (from === 'C' && to === 'F') return value * 9 / 5 + 32
      if (from === 'F' && to === 'C') return (value - 32) * 5 / 9
      return value
    }
    const fromUnit = units.find((u) => u.value === from)
    const toUnit = units.find((u) => u.value === to)
    if (!fromUnit || !toUnit) return 0
    return (value * fromUnit.ratio) / toUnit.ratio
  }

  const addToHistory = (fromVal: number, from: string, toVal: number, to: string) => {
    const record: ConversionRecord = {
      id: Date.now().toString(),
      timestamp: Date.now(),
      fromValue: fromVal,
      fromUnit: from,
      toValue: Math.round(toVal * 1000000) / 1000000,
      toUnit: to,
      category,
    }
    setHistory((prev) => [record, ...prev].slice(0, 10))
  }

  const handleTopValueChange = (value: string) => {
    setTopValue(value)
    if (value === '' || isNaN(Number(value))) {
      setBottomValue('')
      return
    }
    const num = Number(value)
    const result = convert(num, topUnit, bottomUnit)
    setBottomValue(String(Math.round(result * 1000000) / 1000000))
    addToHistory(num, topUnit, result, bottomUnit)
  }

  const handleBottomValueChange = (value: string) => {
    setBottomValue(value)
    if (value === '' || isNaN(Number(value))) {
      setTopValue('')
      return
    }
    const num = Number(value)
    const result = convert(num, bottomUnit, topUnit)
    setTopValue(String(Math.round(result * 1000000) / 1000000))
    addToHistory(num, bottomUnit, result, topUnit)
  }

  const handleTopUnitChange = (unit: string) => {
    setTopUnit(unit)
    if (topValue !== '') {
      const num = Number(topValue)
      const result = convert(num, unit, bottomUnit)
      setBottomValue(String(Math.round(result * 1000000) / 1000000))
    }
  }

  const handleBottomUnitChange = (unit: string) => {
    setBottomUnit(unit)
    if (topValue !== '') {
      const num = Number(topValue)
      const result = convert(num, topUnit, unit)
      setBottomValue(String(Math.round(result * 1000000) / 1000000))
    }
  }

  const resultText =
    topValue && bottomValue
      ? `${topValue} ${topUnit} = ${bottomValue} ${bottomUnit}`
      : null

  return (
    <>
      <CategoryTabs activeCategory={category} onCategoryChange={handleCategoryChange} />

      <ConversionForm
        units={units}
        topValue={topValue}
        bottomValue={bottomValue}
        topUnit={topUnit}
        bottomUnit={bottomUnit}
        onTopValueChange={handleTopValueChange}
        onBottomValueChange={handleBottomValueChange}
        onTopUnitChange={handleTopUnitChange}
        onBottomUnitChange={handleBottomUnitChange}
      />

      {resultText && <div className="result-box">{resultText}</div>}

      <HistoryList history={history} onClear={() => setHistory([])} />
    </>
  )
}

export default ConverterContainer
