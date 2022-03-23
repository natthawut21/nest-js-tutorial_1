import { Injectable } from "@nestjs/common";

@Injectable({})
export class AuthService{
    signup() { 
        return  {msg:'Hello am Sign Up'};
    }

    signin() {
        return  {msg:'Hello am Sign In'};
    }
}