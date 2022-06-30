import {render} from '@testing-library/react'
import getCurrentTime from '../utili/time'

describe('time should be 10', () => {
  const date = new Date('10/10/2022')
  it('10', () => {
    const year = getCurrentTime(date);
    expect(year?.year).toBe(2022)
  })
})