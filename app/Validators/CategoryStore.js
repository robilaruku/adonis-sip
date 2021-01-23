'use strict'

class CategoryStore {
    get rules() {
        return {
            name: 'required',
            status: 'required'
        }
    }

    get messages() {
        return {
            'name.required': 'The field name is required',
            'status.required': 'The field status is required'
        }
    }
}

module.exports = CategoryStore