export default {
  methods: {
    async alertUser (title = null, message = null, type = 'error') {
      if (title === null) { title = this.$page.props.layout_lang.common.messages.confirm }
      if (message === null) { message = this.$page.props.layout_lang.common.messages.are_you_sure }
      return this.$alert(message, title, type)
    },
    async askUser (title = null, message = null, type = 'error') {
      if (title === null) { title = this.$page.props.layout_lang.common.messages.confirm }
      if (message === null) { message = this.$page.props.layout_lang.common.messages.are_you_sure }
      return this.$confirm(message, title, type,{
      confirmButtonText: 'تاكيد',
      cancelButtonText: 'الغاء',
      })
    },
    async notifyUser (title = null, message = null, type = 'error') {
      if (title === null) { title = this.$page.props.layout_lang.common.messages.confirm }
      if (message === null) { message = this.$page.props.layout_lang.common.messages.are_you_sure }
      return this.$notify({
        title: title,
        message: message,
        type: type

      })
    },
    async messageUser (message = 'Message', type = 'error') {
      return this.$message({
        message: message,
        type: type
      })
    }
  }
}
