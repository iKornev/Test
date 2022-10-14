import express from 'express';
import bodyParser from 'body-parser';
import errorHandler from './src/middleware/error-handler';
import RecordsRouter from './src/router/router';
import RecordsService from './src/service/RecordsService';

const port = process.env.PORT || 8000

export default class Server {

    run() {
        this.initService();
        this.initRoutes()
        this.createApp();
        this.start();
    }

    createApp() {
        this.app = express();
        this.app.use(bodyParser.json());
        this.app.use(this.recordsRouter.getRecordsRoutes());
        this.app.use(errorHandler);
    }

    start() {
        this.app.listen(port, () => {
            console.log(`App listen on port ${port}`)
        })
    }

    initRoutes() {
        this.recordsRouter = new RecordsRouter(this.recordService);
    }

    initService() {
        this.recordService = new RecordsService();
    }
}