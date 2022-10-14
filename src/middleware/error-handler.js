export default (error, request, response, next) => {
    const status = error.status || 500;
    const message = error.message || 'Internal server error';

    console.log('error handler caught exeption')

    response.status(status)
    response.send({
        status,
        message,
    })
}