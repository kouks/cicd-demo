
export default {
  add (...nums) {
    return nums.reduce((c, i) => c + i, 0)
  },

  multiply (...nums) {
    return nums.reduce((c, i) => c * i, 1)
  }
}
