import eras from './eras'

export const findEra = (date: Date): string => {
  const time = date.getTime()
  const era = eras.find(e => time >= (new Date(e.from)).getTime())
  return era?.name ?? ''
}

export const getJpYear = (date: Date): string => {
  let result: string
  try {
    result = Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
      year: '2-digit',
      era: 'long'
    }).format(date).slice(0, -1)

    if (!isNaN(Number(result))) {
      result = findEra(date) + result
    }
  } catch {
    result = '該当なし'
  }
  return result
}

export const getJpEra = (date: Date): string => {
  let result: string
  try {
    result = Intl.DateTimeFormat('ja-JP-u-ca-japanese', {
      era: 'long'
    }).format(date).slice(0, 2)

    if (!isNaN(Number(result))) {
      result = findEra(date) + result
    }
  } catch {
    result = '不明'
  }
  return result
}
