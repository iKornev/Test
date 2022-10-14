export default (validationSchema) => (request, response, next) => {
    const { body } = request;

    const result = validationSchema.validate(body);

    const { error } = result;

    if (error) {
        response.json({ error: error.message });
        return;
    }

    next();
}