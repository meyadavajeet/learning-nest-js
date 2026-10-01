import { UserService } from './user.service';
import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
export declare class UserController {
    private userService;
    constructor(userService: UserService);
    getUsers(): Promise<import("./entity/user.entity").User[]>;
    store(body: CreateUserDto): Promise<any>;
    update(body: UpdateUserDto, userId: number): Promise<any>;
    getUser(userId: number): Promise<any>;
    deleteUser(userId: number): Promise<import("typeorm").DeleteResult>;
}
