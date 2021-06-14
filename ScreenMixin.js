export default {
  methods: {
    screenSm () {
      return this.$screen.width > 480
    },
    screenMd () {
      return this.$screen.width > 768
    },
    screenLg () {
      return this.$screen.width > 1024
    },
    screenXl () {
      return this.$screen.width > 1280
    }
  }
}
