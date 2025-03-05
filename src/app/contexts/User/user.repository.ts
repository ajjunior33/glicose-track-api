import {database} from "../../../database/index.database";

class UserRepository {
    public async findByEmail(email: string){
        return await database.user.findFirst({
            where: {
                email
            }
        })
    }
}

export { UserRepository }