import {UserRepository} from "./user.repository";
import {CreateUserDto} from "./dto/create-user.dto";
import {IUser} from "./interface/user.interface";
import {Exception} from "../../middlewares/exception.middleware";
import {encryptPasswod} from "../../helpers/encrypt-password.helper";
import {UserFactory} from "./user.factory";

class UserService{
    public async findByEmail(email: string){
        const userRepository = new UserRepository();
        return await userRepository.findByEmail(email);
    }

    public async createUser({ name, email,password}: CreateUserDto): Promise<IUser> {
        const user = await this.findByEmail(email);

        if(!!user){
            throw new Exception("User already exists", 400);
        }

        const userRepository = new UserRepository();
        const dataUser ={
            name,
            email,
            password: await encryptPasswod(password)
        };

        const createUser = await userRepository.create(dataUser);

        return await UserFactory.getUser(createUser);

    }
}
export { UserService }