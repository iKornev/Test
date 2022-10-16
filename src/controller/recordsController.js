import ServerException from "../errors/server-exeption";

export default class RecordsController {
    recordService

    constructor(recordService) {
        this.recordService = recordService
    }

     async createRecords(request, response, next) {

        let record;
        try {
            record =  await this.recordService.createRecord(request.body)

        } catch (e) {
            console.log(e)
            next(new ServerException(500, 'Server Error'));
            return
        }

        response.status(201);
        response.json({
            record,
        })
    }

     async getRecords(request, response, next) {
        let records;

        try {
            records =  await this.recordService.findRecords()

        } catch (e) {
            console.log(e.message)
            next(new ServerException(500, e.message));
            return
        }

         response.status(200);
         response.json({
             records,
         })
    }
}