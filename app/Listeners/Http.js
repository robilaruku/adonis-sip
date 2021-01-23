Http.handleError = function*(error, request, response) {
    if (error.name === 'ModelNotFoundException') {
        (1)
        yield response.status(404).sendView('404')
        return
    }

    if (error.name === 'PasswordMisMatch') {
        (2)
        response.status(400).send('Invalid credentials')
        return
    }

    response.status(error.status).send(error.message)(3)
}
