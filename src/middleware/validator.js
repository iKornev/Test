export default (validationSchema) => (request, response, next) => {
    const { body } = request;

    const result = validationSchema.validate(body);

    const { error } = result;

    if (error) {
        next(error)
    }

    next();
}