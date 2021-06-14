export default {
  methods: {
    getTaxValue (tax) {
      return 1 + (tax / 100)
    },
    getAmountWithoutTax (amount, tax) {
      if (tax === 0) return amount
      const taxValue = this.getTaxValue(tax)
      return amount / taxValue
    },
    getAmountIncludingTax (amount, tax) {
      if (tax === 0) return amount
      const taxValue = this.getTaxValue(tax)
      return amount * taxValue
    }
  }
}
