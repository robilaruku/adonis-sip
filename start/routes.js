'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.on('/').render('welcome')

Route.get('admin', 'DashboardController.index').as('admin')
Route.get('admin/categories', 'CategoryController.index').as('categories.index')
Route.get('admin/categories/create', 'CategoryController.create').as('categories.create')
Route.post('admin/categories/store', 'CategoryController.store').as('categories.store').validator('CategoryStore')
Route.get('admin/categories/:id/edit', 'CategoryController.edit').as('categories.edit')