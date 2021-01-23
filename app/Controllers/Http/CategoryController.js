'use strict'

const Category = use('App/Models/Category')

class CategoryController {

    async index({ view, session }) {
        const categories = await Category.query().orderBy('created_at', 'desc').fetch()
        return view.render('admin.categories.index', { categories: categories.rows })
    }

    create({ view }) {
        return view.render('admin.categories.create')
    }

    async store({ request, response, session }) {
        const category = request.only(['name', 'status'])

        await Category.create(category)

        session.flash({ notification: 'Successfully create!' });
        return response.route('categories.index')
    }

    async edit({ view, params, session }) {
        const id = params.id
        const category = await Category.find(id)

        if (category == null) {
            session.flash({ errors: 'Data Not Found' });
            return response.route('categories.index')
        }

    }

}

module.exports = CategoryController