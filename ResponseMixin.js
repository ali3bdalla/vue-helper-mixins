import AlertMixin from './AlertMixin'
import { Inertia } from '@inertiajs/inertia'

export default {
  mixins: [AlertMixin],
  methods: {
    handleResponse (url = null, title = 'Success', message = 'Operation Completed', type = 'success', skipOnSuccess = false) {
      Inertia.on('invalid', (e) => {
        const statusCode = e.detail.response.status
        if (statusCode === 500) {
          e.preventDefault()
          this.alertUser('Server Error', e.detail.response.statusText, 'error')
        } else if (statusCode === 404) {
          e.preventDefault()
          this.alertUser('Request Error', e.detail.response.statusText, 'warning')
        } else if (statusCode === 403) {
          e.preventDefault()
          this.alertUser('Permission Denied', 'Operation Not Allowed', 'warning')
        } else {
          if (!skipOnSuccess) {
            e.preventDefault()
            this.alertUser(title, message, type).then(() => {
              if (url) {
                Inertia.visit(url)
              }
            })
          }
        }
      })
    }
  }
}
