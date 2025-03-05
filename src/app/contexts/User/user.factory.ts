import { User } from '@prisma/client'
import {IUser} from "./interface/user.interface";
class UserFactory {
    static async getUser(user: User): Promise<IUser> {

        return {
            id: user.id,
            name: user.name,
            email: user.email
        }

    }
}

export { UserFactory }