'use strict'

const Category = use('App/Models/Category')

class CategoryController {

    async index({ view }) {
        const categories = await Category.query().orderBy('created_at', 'desc').fetch()
        return view.render('admin.categories.index', { categories: categories.rows })
    }

    create({ view }) {
        return view.render('admin.categories.create')
    }

    async store({ request, response, session }) {
        try {
            const category = request.only(['name', 'status'])

            await Category.create(category)

            session.flash({ messages: 'Successfully create!' });
            return response.route('categories.index')

        } catch (error) {
            session.flash({ errors: 'Errors Store Data' });
            return response.route('categories.index')
        }
    }

    async show({ view, session, params, response }) {
        const id = params.id
        const category = await Category.find(id)

        if (category == null) {
            session.flash({ errors: 'Data Not Found' });
            return response.route('categories.index')
        }

        return view.render('admin.categories.show', { category: category });
    }

    async edit({ view, params, session, response }) {
        const id = params.id
        const category = await Category.find(id)

        if (category == null) {
            session.flash({ errors: 'Data Not Found' });
            return response.route('categories.index')
        }

        return view.render('admin.categories.edit', { category: category });

    }

    async update({ response, request, params, session }) {
        try {
            const id = params.id
            const category = await Category.find(id)

            if (category == null) {
                session.flash({ errors: 'Data Not Found' });
                return response.route('categories.index')
            }

            const data = request.only(['name', 'status'])

            category.merge(data)

            await category.save()

            session.flash({ messages: 'Successfully updated!' });
            return response.route('categories.index')
        } catch (error) {
            session.flash({ errors: 'Errors Update Data' });
            return response.route('categories.index')
        }
    }

    async destroy({ request, response, view, params, session }) {
        try {
            const id = params.id;
            const category = await Category.find(id);

            if (category == null) {
                session.flash({ errors: 'Data Not Found' });
                return response.route('categories.index')
            }

            await category.delete();

            session.flash({ messages: 'Successfully delete!' });
            return response.route('categories.index')
        } catch (error) {
            session.flash({ errors: 'Errors Delete Data' });
            return response.route('categories.index')
        }

    }

}

module.exports = CategoryController
