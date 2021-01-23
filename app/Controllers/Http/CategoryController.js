'use strict'

const Category = use('App/Models/Category')
const Database = use('Database')

class CategoryController {

    async index({ view }) {
        const categories = await Category.query().orderBy('created_at', 'desc').fetch()
        return view.render('admin.categories.index', { categories: categories.rows })
    }

    create({ view }) {
        return view.render('admin.categories.create')
    }

    async store({ request, response, session }) {
        const category = request.only(['name', 'status'])

        await Category.create(category)

        session.flash({ messages: 'Successfully create!' });
        return response.route('categories.index')
    }

}

module.exports = CategoryController