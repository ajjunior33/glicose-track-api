import {database} from "../../../database/index.database";

class MomentRepository{

    public async list(){
        return database.moment.findMany()
    }

    public async store({ name }: CreateMomentDto){
        return database.moment.create({
            data: {
                name
            }
        })
    }

    public async findById(id: string) {
        return database.moment.findFirst({
            where: {
                id
            }
        })
    }

    public async destroy(id: string) {
        return database.moment.delete({
            where: {
                id
            }
        })
    }

}

export { MomentRepository }