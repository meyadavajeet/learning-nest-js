import { UserService } from '../user/user.service';
import { LoginDto } from './dto/login.dto';
export declare class AuthController {
    private userService;
    constructor(userService: UserService);
    login(loginDto: LoginDto): Promise<import("../user/entity/user.entity").User | "password does not match" | "unauthenticated">;
}
