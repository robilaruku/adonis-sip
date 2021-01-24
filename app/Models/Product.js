'use strict'

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use('Model')

class Product extends Model {


    static get table() {
        return 'products'
    }

    category() {
        return this.belongsTo('App/Models/Category', 'id', 'category_id')
    }
}

module.exports = Product
