export default {
  props: {
    lang: {
      required: true
    }
  },
  data () {
    return {
      langJson: {}
    }
  },
  created () {
    this.langJson = JSON.parse(JSON.stringify(this.lang))
  },
  methods: {
    $getLang (key) {
      return this.langJson[key]
    }
  }
}
