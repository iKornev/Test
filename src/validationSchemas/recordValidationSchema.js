import Joi from 'joi';

const recordCreateSchema = Joi.object({
    text: Joi.string().required(),
}).required();

export {
    recordCreateSchema,
};