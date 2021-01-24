'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CreateCategoriesSchema extends Schema {
    up() {
        this.create('categories', (table) => {
            table.increments()
            table.string('name').nullable()
            table.string('status').nullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('categories')
    }
}

module.exports = CreateCategoriesSchema
