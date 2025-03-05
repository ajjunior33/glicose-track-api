import {database} from "../../../database/index.database";
import {CreateUserDto} from "./dto/create-user.dto";
import {User} from "@prisma/client";

class UserRepository {
    public async findByEmail(email: string): Promise<User | null>{
        return database.user.findFirst({
            where: {
                email
            }
        });
    }

    public async create({email, name, password}: CreateUserDto) {

        return database.user.create({
            data: {
                name,
                email,
                password
            }
        });

    }
}

export { UserRepository }