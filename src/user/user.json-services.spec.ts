import fs from 'fs';
import { User } from './user';
import { UserService } from './user.service';
import { UserJSONService } from './user.json-service';

jest.mock('fs');

const fMock = fs as jest.Mocked<typeof fs>;

describe('UserJSONService', () => {
    
    let sut : UserJSONService;
         
    beforeEach(()=>{
       sut = new UserJSONService();
       jest.resetAllMocks(); 
    });

    describe('getById', () => {


    });
    
    
    describe('addUser', () => {


    });     
});