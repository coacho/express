import express from 'express';
import { ExpressRouter } from './express-router';
import bodyParser from 'body-parser';

export class ExpressServer{
    private express = express();

    constructor(
        private expressRouter: ExpressRouter,
        private port: string){
            this.configureBodyParser();
            this.configureRoutes();

    }

    bootstrap():void{
        this.express.listen(this.port, () => {
            console.log(`> Listening on port ${this.port}`);
        });
    }


// region private
    private configureRoutes() {
        this.express.use('/api', this.expressRouter.router);
    }
    private configureBodyParser() {
       this.express.use(bodyParser.json());
    }

// end region
}