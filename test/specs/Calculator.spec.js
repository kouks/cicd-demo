import Calculator from '@/Calculator'
import { expect } from 'chai'

describe('Calculator', () => {
  it('should add 2 and 5', () => {
    expect(Calculator.add(2, 5))
      .to.equal(7)
  })

  it('should add -2 and 7', () => {
    expect(Calculator.add(-2, 7))
      .to.equal(5)
  })
})
