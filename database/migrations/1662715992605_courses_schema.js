'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CoursesSchema extends Schema {
  up() {
    this.create('courses', (table) => {
      table.increments()
      table.string('name', 64).notNullable()
      table.string('description', 64).notNullable()
      table.string('url', 64).notNullable()
      table.decimal('price', 64)
      table.timestamps()
    })
  }

  down() {
    this.drop('courses')
  }
}

module.exports = CoursesSchema
