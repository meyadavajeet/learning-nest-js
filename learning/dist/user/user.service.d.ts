import { CreateUserDto } from './dto/create.user.dto';
import { UpdateUserDto } from './dto/update.user.dto';
import { User } from './entity/user.entity';
import { Repository } from 'typeorm';
export declare class UserService {
    private userRepository;
    constructor(userRepository: Repository<User>);
    get(): Promise<User[]>;
    create(createUserDto: CreateUserDto): Promise<any>;
    getUserById(userId: number): Promise<any>;
    update(updateUserDto: UpdateUserDto, userId: number): Promise<any>;
    deleteUser(userId: number): Promise<import("typeorm").DeleteResult>;
    findByEmail(email: string): Promise<User | null>;
}
