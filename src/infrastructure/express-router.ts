import { Router } from "express";
import { UserController } from "../user/user.controller";
import { UserRouter } from "../user/user.router";
import { UserService } from "../user/user.service";

export class ExpressRouter{
 
    router = Router();

    private userController!: UserController;
    private userRouter!: UserRouter;

    constructor(private userService: UserService){
        this.configureControllers();
        this.configureRouters();
        this.configureRoute();
    }

private configureControllers(){
    this.userController = new UserController(this.userService);
}

private configureRouters(){
    this.userRouter = new UserRouter(this.userController);
}

private configureRoute(){
    this.router.use('/user', this.userRouter.router);
}



}