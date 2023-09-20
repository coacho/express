import { User } from './user';
import { UserService } from './user.service';

export class UserJSONService implements UserService {
    
    private users : User[] = [];

    add(username: string) : User {
        const userCreated = this.createUser(username);
        this.users.push(userCreated);
        console.log(`created user ${userCreated.username} with ID ${userCreated.id}`);
        return userCreated;
    }

    getById(id: number) : User | null {
        const userSelected = this.users.find((u)=> u.id === id);
        return userSelected || null;
    }

    //region private

    private createUser(username: string) : User{
        let userJson = JSON.stringify({"id":this.createNewId(),"username":username});
        let user : User = JSON.parse(userJson);
        return user;
    }
    
    private createNewId() : number{
        return Math.floor(Math.random()*(999-100 + 1))+100;
    }   

    // end region


}