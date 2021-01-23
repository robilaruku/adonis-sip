'use strict'

class DashboardController {

    index({ view, request }) {
        return view.render('admin.dashboard')
    }

}

module.exports = DashboardController
