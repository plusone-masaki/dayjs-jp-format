import { getJpYear, getJpEra, findEra } from '../utils'

describe('utils', () => {
  describe('getJpYear', () => {
    it('could convert the year correctly', () => {
      const actualDateString = '2020-06-24'
      expect(getJpYear(new Date(actualDateString))).toBe('令和2')
    })
    it('Returns an error message when pass in an invalid date', () => {
      const actualDateString = '9999-99-99'
      expect(getJpYear(new Date(actualDateString))).toBe('該当なし')
    })
  })

  describe('getJpYear', () => {
    it('could convert the year correctly', () => {
      const actualDateString = '2020-06-24'
      expect(getJpEra(new Date(actualDateString))).toBe('令和')
    })
    it('Returns an error message when pass in an invalid date', () => {
      const actualDateString = '9999-99-99'
      expect(getJpEra(new Date(actualDateString))).toBe('不明')
    })
  })

  describe('findEra', () => {
    it('could convert the year correctly', () => {
      const actualDateString = '1830-12-09'
      expect(findEra(new Date(actualDateString))).toBe('文政')
    })
    it('could convert the year correctly', () => {
      const actualDateString = '1830-12-10'
      expect(findEra(new Date(actualDateString))).toBe('天保')
    })
    it('could convert the year correctly', () => {
      const actualDateString = '1830-12-11'
      expect(findEra(new Date(actualDateString))).toBe('天保')
    })
    it('Returns an error message when pass in an invalid date', () => {
      const actualDateString = '600-12-31'
      expect(findEra(new Date(actualDateString))).toBe('')
    })
  })
})
