import { hasUncaughtExceptionCaptureCallback } from 'process';
import { User } from './user';
import { UserService } from './user.service';

export class UserController {
    constructor(private userService: UserService) {}

    add(username: string): User {
        if(this.isUserNameValid(username))
            return this.userService.add(username);
        else
            throw new Error("Invalid username");
    }

    getById(id: number): User | null {
        if(this.isIdValid(id))
            return this.userService.getById(id);
        else
            throw new Error("Invalid id");
    }

    
    // region private
    
    private isUserNameValid(username: string | null): boolean{
        return username != null && username.trim() !== '';
    }

    private isIdValid(id: number | null): boolean{
        return id != null && id > 0;
    }
    
    // end region
    
}

