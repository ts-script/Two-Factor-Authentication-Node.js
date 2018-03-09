import { Application } from 'express';
import { attachControllers } from '@decorators/express';
import express from 'express';
import BodyParser from 'body-parser';

/* CONTROLLERS */
import { CONTROLLERS } from '../controllers/index';

export class ApiServer {

    public app: Application;

    constructor() {
        this.app = express();
        this.app.use(BodyParser.json());
        this.app.set('jwt-secret', 'a60cdd3642fbe81545a3b93fe2b19dd6');
        attachControllers(this.app, CONTROLLERS);
    }

    public start(port: number): void {
        this.app.listen(port, () => console.log(`Server listening on port ${port}`))
    }
}
