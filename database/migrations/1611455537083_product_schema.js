'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ProductSchema extends Schema {
    up() {
        this.create('products', (table) => {
            table.increments()
            table.integer('category_id').unsigned().references('id').inTable('categories')
            table.string('name').nullable()
            table.text('description').nullable()
            table.bigint('price').nullable()
            table.string('sku').nullable()
            table.text('image').nullable()
            table.string('status').nullable()
            table.timestamps()
        })
    }

    down() {
        this.drop('products')
    }
}

module.exports = ProductSchema
