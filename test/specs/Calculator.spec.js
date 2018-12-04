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

  it('should multiply -2 and 7', () => {
    expect(Calculator.multiply(-2, 7))
      .to.equal(-14)
  })

  it('should multiply 2 and 5', () => {
    expect(Calculator.multiply(2, 5))
      .to.equal(10)
  })
})
