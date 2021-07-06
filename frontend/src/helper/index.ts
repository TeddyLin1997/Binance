
export const NumberFormat = (value: string | number): string => {
  if (typeof value === 'string') value = Number(value)
  if (typeof value === 'number') value = value.toFixed(2)
  return value.replace(/\B(?=(\d{3})+(?!\d))/g, ',') 
}