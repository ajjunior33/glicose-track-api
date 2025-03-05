import {UserRepository} from "./user.repository";

class UserService{
    public async findByEmail(email: string){
        const userRepository = new UserRepository();
        return await userRepository.findByEmail(email);
    }
}
export { UserService }