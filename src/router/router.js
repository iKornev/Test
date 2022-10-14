import { Router } from 'express';
import validator from '../middleware/validator';
import RecordsController from '../controller/recordsController';
import { recordCreateSchema } from '../validationSchemas/recordValidationSchema';

export default class RecordsRouter {

    constructor(recordsService) {
        this.router = Router();
        this.recordsController = new RecordsController(recordsService);
    }

    getRecordsRoutes() {
        this.router.get('/api/v1/records', this.recordsController.getRecords.bind(this.recordsController));
        this.router.post('/api/v1/records', validator(recordCreateSchema), this.recordsController.createRecords.bind(this.recordsController));

        return this.router
    }
}