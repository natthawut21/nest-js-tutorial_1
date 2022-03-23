import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController{
    constructor(private authService: AuthService){}

    //call by http://localhost:3300/auth/signup
    @Post('signup')
    signup() { 
        return this.authService.signup();
    }

    //call by http://localhost:3300/auth/signin
    @Post('signin')
    signin() {
        return this.authService.signin();
    }
} 