'use strict'

const Course = use('App/Models/Course')

const payload = [
    'name',
    'description',
    'url',
    'price'
]

class CourseController {

    async index({ request }) {

        // listar cursos

        const cursos = await Course.all()
        
        return cursos
    }

    async store({ request }) {

        const payloadCurso = request.only(payload)

        const curso = await Course.create(payloadCurso);

        return curso

    }

    async update({ request, params }) {

        const payloadCurso = request.only(payload)

        const curso = await Course.find(params.id)

        curso.name = payloadCurso.name
        curso.description = payloadCurso.description
        curso.url = payloadCurso.url
        curso.price = payloadCurso.price
        await curso.save()

        return curso
    }

    async delete({ request }) {

    }
}

module.exports = CourseController
